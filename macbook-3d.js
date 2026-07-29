import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const MODEL_URL = "assets/models/macbook-pro-m3-16.glb";
const SCREEN_MATERIAL = "sfCQkHOWyrsLmor";
const KEYBOARD_ENGRAVING_MATERIAL = "sIfSZcqgDlKMJPf";
const SCREEN_WIDTH = 1600;
const SCREEN_HEIGHT = 1000;
const VIDEO_FPS = 24;
const CAMERA_MOVE_MS = 3200;
const stage = document.getElementById("stage");
const slots = Array.from(document.querySelectorAll(".macbook-3d-slot"));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (stage && slots.length) {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
    preserveDrawingBuffer: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.54;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.className = "macbook-3d-canvas";
  renderer.domElement.setAttribute("aria-hidden", "true");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(26, 1, 0.05, 100);
  camera.position.set(0, 0.08, 5.2);
  camera.lookAt(0, 0, 0);

  const modelPivot = new THREE.Group();
  scene.add(modelPivot);

  const shotPoses = {
    wide: {
      camera: new THREE.Vector3(0.42, 0.16, 6.8),
      lookAt: new THREE.Vector3(0.3, 0.03, 0),
      position: new THREE.Vector3(0.58, -0.24, 0),
      rotation: new THREE.Vector3(-0.045, -0.035, 0),
    },
    extension: {
      camera: new THREE.Vector3(0.68, 0.2, 4.5),
      lookAt: new THREE.Vector3(0.55, 0.11, 0),
      position: new THREE.Vector3(0.64, -0.15, 0.02),
      rotation: new THREE.Vector3(-0.058, -0.06, 0),
    },
    agent: {
      camera: new THREE.Vector3(0.98, 0.24, 3.92),
      lookAt: new THREE.Vector3(0.73, 0.14, 0),
      position: new THREE.Vector3(0.82, -0.12, 0.04),
      rotation: new THREE.Vector3(-0.052, 0.028, 0),
    },
  };

  function clonePose(pose) {
    return {
      camera: pose.camera.clone(),
      lookAt: pose.lookAt.clone(),
      position: pose.position.clone(),
      rotation: pose.rotation.clone(),
    };
  }

  const currentPose = clonePose(shotPoses.wide);
  let shotFrom = clonePose(shotPoses.wide);
  let shotTo = clonePose(shotPoses.extension);
  let shotStartedAt = performance.now();

  const environmentGenerator = new THREE.PMREMGenerator(renderer);
  scene.environment = environmentGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.16;
  environmentGenerator.dispose();

  const lightTarget = new THREE.Object3D();
  lightTarget.position.set(0, -0.18, 0);
  scene.add(lightTarget);

  const keyLight = new THREE.SpotLight(0xe9f1ff, 0, 14, Math.PI * 0.16, 0.46, 1.15);
  keyLight.position.set(-3.6, 4.6, 5.2);
  keyLight.target = lightTarget;
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048);
  keyLight.shadow.camera.near = 0.5;
  keyLight.shadow.camera.far = 14;
  keyLight.shadow.bias = -0.0002;
  scene.add(keyLight);

  const edgeLight = new THREE.SpotLight(0x64adff, 0, 13, Math.PI * 0.18, 0.56, 1.25);
  edgeLight.position.set(4.8, 2.5, 3.2);
  edgeLight.target = lightTarget;
  scene.add(edgeLight);

  const fillLight = new THREE.PointLight(0x8fa8c9, 0, 9, 1.6);
  fillLight.position.set(1.4, 0.5, 3.8);
  scene.add(fillLight);

  const topLight = new THREE.SpotLight(0xffffff, 0, 10, Math.PI * 0.26, 0.72, 1.4);
  topLight.position.set(0.4, 5.5, 0.5);
  topLight.target = lightTarget;
  scene.add(topLight);

  const screenCanvas = document.createElement("canvas");
  screenCanvas.width = SCREEN_WIDTH;
  screenCanvas.height = SCREEN_HEIGHT;
  const screenOutputContext = screenCanvas.getContext("2d");
  const screenArtwork = document.createElement("canvas");
  screenArtwork.width = SCREEN_WIDTH;
  screenArtwork.height = SCREEN_HEIGHT;
  const screenContext = screenArtwork.getContext("2d");
  const screenTexture = new THREE.CanvasTexture(screenCanvas);
  screenTexture.colorSpace = THREE.SRGBColorSpace;
  screenTexture.flipY = false;
  screenTexture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());

  function createProductVideo(source) {
    const video = document.createElement("video");
    video.src = source;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("aria-hidden", "true");
    video.load();
    return video;
  }

  const productVideos = {
    extension: createProductVideo("assets/product-extension.mp4"),
    agent: createProductVideo("assets/product-agent.mp4"),
  };

  let model = null;
  let activeSlot = null;
  let activeMode = "extension";
  let agentImage = null;
  let sceneActive = false;
  let contactShadow = null;
  let contactBaseY = 0;
  let lastVideoFrame = -1;
  let revealStartedAt = performance.now();

  function roundedRect(context, x, y, width, height, radius) {
    const corner = Math.min(radius, width / 2, height / 2);
    context.beginPath();
    context.moveTo(x + corner, y);
    context.arcTo(x + width, y, x + width, y + height, corner);
    context.arcTo(x + width, y + height, x, y + height, corner);
    context.arcTo(x, y + height, x, y, corner);
    context.arcTo(x, y, x + width, y, corner);
    context.closePath();
  }

  function fillRoundedRect(context, x, y, width, height, radius, color) {
    roundedRect(context, x, y, width, height, radius);
    context.fillStyle = color;
    context.fill();
  }

  function drawText(context, text, x, y, size, color, weight = 500, family = "Inter") {
    context.fillStyle = color;
    context.font = `${weight} ${size}px ${family}, sans-serif`;
    context.fillText(text, x, y);
  }

  function drawExtensionScreen() {
    const context = screenContext;
    context.fillStyle = "#0a0b0e";
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    context.fillStyle = "#111319";
    context.fillRect(0, 0, 1080, SCREEN_HEIGHT);
    context.fillStyle = "#07080a";
    context.fillRect(1080, 0, 520, SCREEN_HEIGHT);
    context.fillStyle = "#282b32";
    context.fillRect(1078, 0, 2, SCREEN_HEIGHT);

    context.fillStyle = "#0d0f13";
    context.fillRect(0, 0, 1080, 68);
    ["#ff5f57", "#febc2e", "#28c840"].forEach((color, index) => {
      context.beginPath();
      context.arc(34 + index * 28, 34, 8, 0, Math.PI * 2);
      context.fillStyle = color;
      context.fill();
    });
    drawText(context, "leetcode.com/problems/two-sum", 138, 42, 17, "#686b73", 500, "JetBrains Mono");

    drawText(context, "1. Two Sum", 72, 146, 38, "#f5f5f7", 650);
    drawText(context, "Easy", 948, 143, 20, "#30d158", 650, "JetBrains Mono");
    fillRoundedRect(context, 66, 190, 948, 630, 18, "#08090c");
    context.strokeStyle = "#282b32";
    context.lineWidth = 2;
    roundedRect(context, 66, 190, 948, 630, 18);
    context.stroke();

    const code = [
      ["class", "#bf8cff", 92],
      [" Solution {", "#f5f5f7", 188],
      ["vector<int> twoSum(vector<int>& nums, int target) {", "#d4d4d8", 132],
      ["unordered_map<int, int> seen;", "#d4d4d8", 180],
      ["for (int i = 0; i < nums.size(); i++) {", "#d4d4d8", 180],
      ["if (seen.count(target - nums[i]))", "#2997ff", 228],
      ["return {seen[target - nums[i]], i};", "#30d158", 276],
      ["seen[nums[i]] = i;", "#d4d4d8", 228],
      ["}", "#d4d4d8", 180],
      ["}", "#d4d4d8", 132],
      ["};", "#d4d4d8", 92],
    ];
    code.forEach(([line, color, x], index) => drawText(context, line, x, 260 + index * 45, 23, color, 500, "JetBrains Mono"));

    fillRoundedRect(context, 66, 850, 948, 82, 13, "#0c1711");
    context.strokeStyle = "#1f7139";
    roundedRect(context, 66, 850, 948, 82, 13);
    context.stroke();
    drawText(context, "✓  ACCEPTED", 98, 902, 23, "#30d158", 700, "JetBrains Mono");

    drawText(context, "◆", 1132, 67, 34, "#f5f5f7", 700);
    drawText(context, "ReAlgo", 1180, 65, 30, "#f5f5f7", 700);
    drawText(context, "ЗАДАЧА НАЙДЕНА", 1132, 172, 18, "#30d158", 700, "JetBrains Mono");
    drawText(context, "Two Sum", 1132, 242, 48, "#f5f5f7", 650);
    drawText(context, "Hash Map  ·  Arrays", 1132, 286, 20, "#2997ff", 600, "JetBrains Mono");

    fillRoundedRect(context, 1130, 350, 400, 76, 14, "#0a84ff");
    drawText(context, "Сохранить решение", 1202, 398, 24, "#ffffff", 650);

    ["AI-подсказка", "Оценить лёгкость", "Карточки"].forEach((label, index) => {
      const y = 468 + index * 104;
      fillRoundedRect(context, 1130, y, 400, 78, 14, "#0c0d10");
      context.strokeStyle = "#292c32";
      roundedRect(context, 1130, y, 400, 78, 14);
      context.stroke();
      drawText(context, label, 1160, y + 49, 22, index === 0 ? "#f5f5f7" : "#a1a1a6", 550);
      drawText(context, "→", 1482, y + 50, 24, "#5c5d62", 500);
    });

    drawText(context, "ReAlgo работает прямо поверх задачи", 1132, 885, 17, "#696a70", 500);
    drawText(context, "Без смены контекста.", 1132, 917, 17, "#696a70", 500);
  }

  function drawAgentScreen() {
    const context = screenContext;
    context.fillStyle = "#070b10";
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    if (!agentImage) return;

    const imageRatio = agentImage.naturalWidth / agentImage.naturalHeight;
    const canvasRatio = SCREEN_WIDTH / SCREEN_HEIGHT;
    let sourceWidth = agentImage.naturalWidth;
    let sourceHeight = agentImage.naturalHeight;
    let sourceX = 0;
    let sourceY = 0;
    if (imageRatio > canvasRatio) {
      sourceWidth = sourceHeight * canvasRatio;
      sourceX = (agentImage.naturalWidth - sourceWidth) / 2;
    } else {
      sourceHeight = sourceWidth / canvasRatio;
      sourceY = (agentImage.naturalHeight - sourceHeight) / 2;
    }
    context.drawImage(agentImage, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  }

  function drawVideoScreen(video) {
    if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return false;
    const sourceRatio = video.videoWidth / video.videoHeight;
    const targetRatio = SCREEN_WIDTH / SCREEN_HEIGHT;
    let sourceWidth = video.videoWidth;
    let sourceHeight = video.videoHeight;
    let sourceX = 0;
    let sourceY = 0;
    if (sourceRatio > targetRatio) {
      sourceWidth = sourceHeight * targetRatio;
      sourceX = (video.videoWidth - sourceWidth) / 2;
    } else {
      sourceHeight = sourceWidth / targetRatio;
      sourceY = (video.videoHeight - sourceHeight) / 2;
    }
    screenContext.drawImage(
      video,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      0,
      0,
      SCREEN_WIDTH,
      SCREEN_HEIGHT
    );
    return true;
  }

  function commitScreenTexture() {
    screenOutputContext.setTransform(1, 0, 0, 1, 0, 0);
    screenOutputContext.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    screenOutputContext.translate(0, SCREEN_HEIGHT);
    screenOutputContext.scale(1, -1);
    screenOutputContext.drawImage(screenArtwork, 0, 0);
    screenOutputContext.setTransform(1, 0, 0, 1, 0, 0);
    screenTexture.needsUpdate = true;
  }

  function drawScreen(mode, restartVideo = false) {
    activeMode = mode === "agent" ? "agent" : "extension";
    const activeVideo = productVideos[activeMode];
    Object.entries(productVideos).forEach(([name, video]) => {
      if (name !== activeMode) video.pause();
    });
    if (restartVideo) {
      activeVideo.currentTime = 0;
      lastVideoFrame = -1;
    }
    const hasVideoFrame = drawVideoScreen(activeVideo);
    if (!hasVideoFrame) {
      if (activeMode === "agent") drawAgentScreen();
      else drawExtensionScreen();
    }
    commitScreenTexture();
    void activeVideo.play().catch(() => undefined);
  }

  function updateVideoTexture() {
    const activeVideo = productVideos[activeMode];
    if (!activeVideo || activeVideo.paused || activeVideo.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
    const videoFrame = Math.floor(activeVideo.currentTime * VIDEO_FPS);
    if (videoFrame === lastVideoFrame) return;
    lastVideoFrame = videoFrame;
    if (drawVideoScreen(activeVideo)) commitScreenTexture();
  }

  function resizeRenderer() {
    if (!activeSlot) return;
    const width = Math.max(1, activeSlot.clientWidth);
    const height = Math.max(1, activeSlot.clientHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function copyPose(target, source) {
    target.camera.copy(source.camera);
    target.lookAt.copy(source.lookAt);
    target.position.copy(source.position);
    target.rotation.copy(source.rotation);
  }

  function startCameraMove(mode, enterFromWide = false, immediate = false) {
    if (enterFromWide) copyPose(currentPose, shotPoses.wide);
    copyPose(shotFrom, currentPose);
    copyPose(shotTo, shotPoses[mode] || shotPoses.extension);
    shotStartedAt = performance.now();
    if (immediate || reduceMotion) copyPose(currentPose, shotTo);
  }

  function updateCameraMove(now) {
    const progress = reduceMotion
      ? 1
      : THREE.MathUtils.clamp((now - shotStartedAt) / CAMERA_MOVE_MS, 0, 1);
    const eased = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    currentPose.camera.lerpVectors(shotFrom.camera, shotTo.camera, eased);
    currentPose.lookAt.lerpVectors(shotFrom.lookAt, shotTo.lookAt, eased);
    currentPose.position.lerpVectors(shotFrom.position, shotTo.position, eased);
    currentPose.rotation.lerpVectors(shotFrom.rotation, shotTo.rotation, eased);

    const idle = reduceMotion ? 0 : Math.sin(now * 0.00048) * 0.006;
    camera.position.copy(currentPose.camera);
    camera.lookAt(currentPose.lookAt);
    modelPivot.position.copy(currentPose.position);
    modelPivot.position.y += idle;
    modelPivot.rotation.set(
      currentPose.rotation.x,
      currentPose.rotation.y + idle * 0.45,
      currentPose.rotation.z
    );
    if (contactShadow) {
      contactShadow.position.set(
        currentPose.position.x,
        contactBaseY + currentPose.position.y + 0.006,
        0.24 + currentPose.position.z
      );
    }
  }

  function renderNow() {
    if (!model || !activeSlot) return;
    resizeRenderer();
    updateCameraMove(performance.now());
    renderer.render(scene, camera);
  }

  function mountSlot(slot) {
    if (!slot) return;
    const isVisible = Boolean(slot.closest(".slide.is-active"));
    const enterFromWide = isVisible && !sceneActive;
    sceneActive = isVisible;
    if (activeSlot !== slot) {
      activeSlot?.classList.remove("is-ready");
      activeSlot = slot;
      activeSlot.appendChild(renderer.domElement);
    }
    revealStartedAt = performance.now();
    drawScreen(activeSlot.dataset.macbookMode, true);
    startCameraMove(activeMode, enterFromWide, !isVisible);
    if (!isVisible) Object.values(productVideos).forEach((video) => video.pause());
    if (model) {
      activeSlot.classList.add("is-ready");
      renderNow();
    }
  }

  function syncActiveSlot() {
    const nextSlot = document.querySelector(".slide.is-active .macbook-3d-slot");
    if (nextSlot) {
      mountSlot(nextSlot);
      return;
    }
    sceneActive = false;
    Object.values(productVideos).forEach((video) => video.pause());
  }

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = url;
    });
  }

  window.addEventListener("realgo:slidechange", syncActiveSlot);
  window.addEventListener("resize", resizeRenderer);

  Promise.all([
    new GLTFLoader().loadAsync(MODEL_URL),
    loadImage("assets/agent.png"),
    document.fonts?.ready || Promise.resolve(),
  ]).then(([gltf, loadedAgentImage]) => {
    agentImage = loadedAgentImage;
    model = gltf.scene;
    let screenMesh = null;
    let keyboardEngraving = null;
    const adjustedMaterials = new Set();

    model.traverse((object) => {
      if (!object.isMesh) return;
      object.castShadow = true;
      object.receiveShadow = true;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      if (materials.some((material) => material?.name === SCREEN_MATERIAL)) screenMesh = object;
      if (materials.some((material) => material?.name === KEYBOARD_ENGRAVING_MATERIAL)) {
        keyboardEngraving = object;
      }
      materials.forEach((material) => {
        if (
          !material
          || material.name === SCREEN_MATERIAL
          || material.name === KEYBOARD_ENGRAVING_MATERIAL
          || adjustedMaterials.has(material)
        ) return;
        adjustedMaterials.add(material);
        if ("envMapIntensity" in material) material.envMapIntensity = 0.48;
        if ("roughness" in material && typeof material.roughness === "number") {
          material.roughness = Math.max(0.24, material.roughness);
        }
        if (material.color && !material.map) {
          const luminance = material.color.r * 0.2126 + material.color.g * 0.7152 + material.color.b * 0.0722;
          if (luminance > 0.42) {
            material.color.multiplyScalar(0.17);
            if ("metalness" in material) material.metalness = Math.max(0.68, material.metalness || 0);
            if ("roughness" in material) material.roughness = 0.34;
          }
        }
        material.needsUpdate = true;
      });
    });

    if (!screenMesh) throw new Error("MacBook screen mesh was not found");
    if (!keyboardEngraving) throw new Error("MacBook keyboard engraving mesh was not found");

    screenMesh.material = new THREE.MeshBasicMaterial({
      map: screenTexture,
      side: THREE.DoubleSide,
      toneMapped: false,
    });

    keyboardEngraving.material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      toneMapped: false,
    });
    keyboardEngraving.castShadow = false;
    const engravingGlow = keyboardEngraving.clone();
    engravingGlow.material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    });
    engravingGlow.position.y += 0.018;
    engravingGlow.castShadow = false;
    engravingGlow.receiveShadow = false;
    keyboardEngraving.parent.add(engravingGlow);

    const bounds = new THREE.Box3().setFromObject(model);
    const center = bounds.getCenter(new THREE.Vector3());
    const size = bounds.getSize(new THREE.Vector3());
    const modelScale = 2.9 / Math.max(size.x, size.y, size.z);
    model.scale.setScalar(modelScale);
    model.position.copy(center).multiplyScalar(-modelScale);
    modelPivot.add(model);
    modelPivot.updateMatrixWorld(true);

    const engravingCenter = new THREE.Box3()
      .setFromObject(keyboardEngraving)
      .getCenter(new THREE.Vector3());
    const keyboardLight = new THREE.PointLight(0xffffff, 0.18, 1.15, 2.2);
    keyboardLight.position.copy(engravingCenter);
    keyboardLight.position.y += 0.16;
    modelPivot.worldToLocal(keyboardLight.position);
    modelPivot.add(keyboardLight);

    const baseY = -size.y * modelScale * 0.5 - 0.035;
    const contactCanvas = document.createElement("canvas");
    contactCanvas.width = 512;
    contactCanvas.height = 256;
    const contactContext = contactCanvas.getContext("2d");
    const contactGradient = contactContext.createRadialGradient(256, 128, 12, 256, 128, 230);
    contactGradient.addColorStop(0, "rgba(12, 22, 36, 0.76)");
    contactGradient.addColorStop(0.5, "rgba(7, 13, 23, 0.34)");
    contactGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    contactContext.fillStyle = contactGradient;
    contactContext.fillRect(0, 0, contactCanvas.width, contactCanvas.height);
    const contactTexture = new THREE.CanvasTexture(contactCanvas);
    contactShadow = new THREE.Mesh(
      new THREE.PlaneGeometry(4.7, 2.15),
      new THREE.MeshBasicMaterial({
        map: contactTexture,
        transparent: true,
        depthWrite: false,
        opacity: 0.78,
      })
    );
    contactShadow.rotation.x = -Math.PI / 2;
    contactBaseY = baseY;
    contactShadow.position.set(0, baseY + 0.006, 0.24);
    scene.add(contactShadow);

    syncActiveSlot();
    if (!activeSlot) mountSlot(slots[0]);
    activeSlot?.classList.add("is-ready");
    renderNow();
    stage.classList.add("has-macbook-3d");
  }).catch((error) => {
    stage.classList.add("macbook-3d-failed");
    console.error("MacBook 3D failed to load", error);
  });

  function animate(now) {
    if (model && activeSlot?.closest(".slide.is-active")) {
      const revealProgress = reduceMotion
        ? 1
        : THREE.MathUtils.clamp((now - revealStartedAt) / 1650, 0, 1);
      const lightReveal = 1 - Math.pow(1 - revealProgress, 3);
      keyLight.intensity = 5.05 * lightReveal;
      edgeLight.intensity = 4.15 * lightReveal;
      fillLight.intensity = 0.12 * lightReveal;
      topLight.intensity = 0.72 * lightReveal;
      renderer.toneMappingExposure = 0.48 + 0.31 * lightReveal;
      updateVideoTexture();
      updateCameraMove(now);
      renderer.render(scene, camera);
    }
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
