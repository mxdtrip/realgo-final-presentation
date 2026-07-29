(() => {
  const stage = document.getElementById("stage");
  const slides = Array.from(document.querySelectorAll(".slide"));
  const progressBar = document.querySelector("#progress i");
  const slideCounter = document.getElementById("slideCounter");
  const dots = document.getElementById("dots");
  const timer = document.getElementById("timer");
  const help = document.getElementById("help");
  const marketCounter = document.getElementById("marketCounter");
  const marketCounterRow = document.getElementById("marketCounterRow");
  const marketCounterMain = document.getElementById("marketCounterMain");
  const marketCounterDecimal = document.getElementById("marketCounterDecimal");
  const marketCounterPercent = document.getElementById("marketCounterPercent");
  const teamSlide = document.querySelector(".slide-team");
  const teamHandles = Array.from(document.querySelectorAll("[data-team-index]"));
  const teamOrbits = Array.from(document.querySelectorAll(".team-orbit"));
  const teamPlanets = Array.from(document.querySelectorAll(".team-planet"));
  const memberRole = document.getElementById("memberRole");
  const memberNumber = document.getElementById("memberNumber");
  const memberName = document.getElementById("memberName");
  const memberDuty = document.getElementById("memberDuty");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const teamMembers = [
    {
      name: "Mxdtrip",
      duty: "Координация, продукт, AI-интеграция, браузерное расширение и deploy.",
    },
    {
      name: "MixKage",
      duty: "Frontend: интерфейсы кабинета, onboarding и клиентские продуктовые сценарии.",
    },
    {
      name: "MikebangSfilya",
      duty: "Backend и DevOps: API, инфраструктура, надёжность и идемпотентность операций.",
    },
    {
      name: "bryack",
      duty: "Backend и тестирование: серверная логика, проверки и устойчивость критических потоков.",
    },
    {
      name: "pagister",
      duty: "QA: пользовательские сценарии, интеграционные проверки и валидация релизов.",
    },
    {
      name: "P1xart",
      duty: "Миграции, контракты данных и согласованность состояния между слоями продукта.",
    },
  ];
  const magicMovePairs = [
    [
      [".centered h1", ".giant-number", "morph-primary"],
      [".centered .kicker", ".stat-keynote .kicker", "morph-kicker"],
      [".subhead", ".stat-keynote h2", "morph-secondary"],
    ],
    [
      [".giant-number", ".giant-number", "morph-market-number"],
      [".stat-keynote .kicker", ".stat-keynote .kicker", "morph-market-kicker"],
      [".stat-copy h2", ".stat-copy h2", "morph-market-title"],
      [".stat-copy p", ".stat-copy p", "morph-market-detail"],
      [".source-line", ".source-line", "morph-market-source"],
    ],
    [
      [".giant-number", ".giant-number", "morph-market-number"],
      [".stat-keynote .kicker", ".stat-keynote .kicker", "morph-market-kicker"],
      [".stat-copy h2", ".stat-copy h2", "morph-market-title"],
      [".stat-copy p", ".stat-copy p", "morph-market-detail"],
      [".source-line", ".source-line", "morph-market-source"],
    ],
    [
      [".giant-number", ".statement h2", "morph-primary"],
      [".stat-keynote h2", ".statement > p", "morph-secondary"],
    ],
    [
      [".statement h2", ".about-line.word-line", "morph-primary"],
      [".statement > p", ".about-keynote .kicker", "morph-kicker"],
    ],
    [
      [".about-keynote", ".team-copy", "morph-primary"],
    ],
    [
      [".team-copy", ".comparison > div:first-child", "morph-primary"],
      [".solar", ".comparison > div:last-child", "morph-surface"],
    ],
    [
      [".comparison > div:first-child", ".cycle > div:first-child", "morph-card-a"],
      [".comparison-arrow", ".cycle > i:first-of-type", "morph-kicker"],
      [".comparison > div:last-child", ".cycle > div:last-child", "morph-card-b"],
    ],
    [
      [".cycle", ".macbook-3d-slot", "morph-surface"],
      [".cycle-keynote h2", ".product-heading h2", "morph-primary"],
      [".cycle-keynote .kicker", ".product-heading .kicker", "morph-kicker"],
    ],
    [
      [".macbook-3d-slot", ".macbook-3d-slot", "morph-surface"],
      [".product-heading", ".ai-copy", "morph-primary"],
    ],
    [
      [".macbook-3d-slot", ".macbook-3d-slot", "morph-surface"],
      [".ai-copy", ".product-demo-copy", "morph-primary"],
    ],
    [
      [".macbook-3d-slot", ".macbook-3d-slot", "morph-surface"],
      [".product-demo-copy", ".product-demo-copy", "morph-primary"],
      [".product-demo-rail", ".product-demo-rail", "morph-kicker"],
    ],
    [
      [".product-demo-copy h2", ".cards-copy h2", "morph-primary"],
      [".macbook-3d-slot", ".memory-cards", "morph-surface"],
      [".product-demo-copy .kicker", ".cards-copy .kicker", "morph-kicker"],
    ],
    [
      [".giant-dark", ".atlas-numbers", "morph-surface"],
      [".cards-copy h2", ".atlas-keynote h2", "morph-primary"],
      [".cards-copy .kicker", ".atlas-keynote .kicker", "morph-kicker"],
    ],
    [
      [".atlas-numbers", ".roadmap-list", "morph-surface"],
      [".atlas-keynote h2", ".roadmap-keynote h2", "morph-primary"],
      [".atlas-keynote .kicker", ".roadmap-keynote .kicker", "morph-kicker"],
    ],
    [
      [".roadmap-list", ".price", "morph-surface"],
      [".roadmap-keynote h2", ".price-keynote h2", "morph-primary"],
      [".roadmap-keynote .kicker", ".price-keynote .kicker", "morph-kicker"],
    ],
    [
      [".price", ".price", "morph-primary"],
      [".price-keynote h2", ".price-keynote h2", "morph-secondary"],
      [".price-keynote .kicker", ".price-keynote .kicker", "morph-kicker"],
    ],
    [
      [".price-keynote h2", ".closing-keynote h2", "morph-primary"],
      [".price-keynote .kicker", ".closing-keynote .kicker", "morph-kicker"],
      [".price-keynote > p", ".final-line", "morph-secondary"],
    ],
  ];

  let currentSlide = getInitialSlide();
  let timerStartedAt = Date.now();
  let touchStartX = null;
  let activeTeamMember = 0;
  let teamRotationTimer = null;
  let teamSwitchTimer = null;
  let teamOrbitFrame = null;
  let teamOrbitElapsed = 0;
  let teamOrbitStartedAt = 0;
  let activeViewTransition = null;
  let activeMagicMoveElements = [];
  let viewTransitionSequence = 0;
  let marketTransitionRunning = false;
  let marketCounterFrame = null;
  let countUpFrame = null;
  let countUpTimer = null;
  // Счёт стартует после того, как отыграет переход между слайдами.
  const COUNT_UP_DELAY = 1000;
  const counterMetrics = { slot: 0.62, decimal: 0.72, percent: 0.92 };
  const countUpTargets = Array.from(document.querySelectorAll("[data-count-to]"));

  function getInitialSlide() {
    const hashSlide = Number.parseInt(window.location.hash.replace("#", ""), 10);
    if (Number.isInteger(hashSlide) && hashSlide >= 1 && hashSlide <= slides.length) {
      return hashSlide - 1;
    }
    return 0;
  }

  function formatSlideNumber(value) {
    return String(value).padStart(2, "0");
  }

  function resizeStage() {
    const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.setProperty("--stage-scale", scale.toFixed(4));
  }

  function buildDots() {
    slides.forEach((slide, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.dataset.slide = String(index);
      dot.setAttribute("aria-label", `Перейти к слайду ${index + 1}`);
      dot.addEventListener("click", () => showSlide(index));
      dots.appendChild(dot);
    });
  }

  function updateDots() {
    Array.from(dots.children).forEach((dot, index) => {
      dot.classList.toggle("is-active", index === currentSlide);
      dot.setAttribute("aria-current", index === currentSlide ? "true" : "false");
    });
  }

  function restartMemberProgress() {
    memberRole.classList.remove("is-running");
    void memberRole.offsetWidth;
    memberRole.classList.add("is-running");
  }

  function activateTeamMember(index, options = {}) {
    const nextMember = ((index % teamMembers.length) + teamMembers.length) % teamMembers.length;
    const delay = options.immediate || reduceMotion ? 0 : 180;
    window.clearTimeout(teamSwitchTimer);
    memberRole.classList.add("is-switching");

    teamSwitchTimer = window.setTimeout(() => {
      activeTeamMember = nextMember;
      const member = teamMembers[activeTeamMember];
      memberNumber.textContent = formatSlideNumber(activeTeamMember + 1);
      memberName.textContent = member.name;
      memberDuty.textContent = member.duty;

      teamHandles.forEach((element) => {
        const isActive = Number(element.dataset.teamIndex) === activeTeamMember;
        element.classList.toggle("is-active", isActive);
        if (element.matches("button")) {
          element.setAttribute("aria-pressed", isActive ? "true" : "false");
        }
      });

      memberRole.classList.remove("is-switching");
      restartMemberProgress();
    }, delay);
  }

  function restartTeamRotation() {
    window.clearInterval(teamRotationTimer);
    teamRotationTimer = window.setInterval(() => {
      activateTeamMember(activeTeamMember + 1);
    }, 5000);
  }

  function positionTeamPlanets(elapsedMilliseconds) {
    const tilt = -6 * (Math.PI / 180);
    const tiltCosine = Math.cos(tilt);
    const tiltSine = Math.sin(tilt);

    teamPlanets.forEach((planet) => {
      const orbit = teamOrbits[Number(planet.dataset.orbitIndex)];
      if (!orbit) return;
      const duration = Number(planet.dataset.duration) || 24;
      const phase = Number(planet.dataset.phase) || 0;
      const angle = phase + (elapsedMilliseconds / 1000 / duration) * Math.PI * 2;
      const ellipseX = Math.cos(angle) * orbit.offsetWidth * 0.5;
      const ellipseY = Math.sin(angle) * orbit.offsetHeight * 0.5;
      const orbitX = ellipseX * tiltCosine - ellipseY * tiltSine;
      const orbitY = ellipseX * tiltSine + ellipseY * tiltCosine;
      const depth = (Math.sin(angle) + 1) * 0.5;

      planet.style.setProperty("--orbit-x", `${orbitX.toFixed(2)}px`);
      planet.style.setProperty("--orbit-y", `${orbitY.toFixed(2)}px`);
      planet.style.setProperty("--planet-depth-scale", (0.84 + depth * 0.22).toFixed(3));
      planet.style.setProperty("--planet-depth-opacity", (0.56 + depth * 0.44).toFixed(3));
      planet.style.zIndex = depth > 0.52 ? "12" : "6";
    });
  }

  function animateTeamOrbits(now) {
    positionTeamPlanets(teamOrbitElapsed + now - teamOrbitStartedAt);
    teamOrbitFrame = window.requestAnimationFrame(animateTeamOrbits);
  }

  function startTeamOrbitMotion() {
    if (reduceMotion) {
      positionTeamPlanets(teamOrbitElapsed);
      return;
    }
    if (teamOrbitFrame !== null) return;
    teamOrbitStartedAt = performance.now();
    teamOrbitFrame = window.requestAnimationFrame(animateTeamOrbits);
  }

  function stopTeamOrbitMotion() {
    if (teamOrbitFrame === null) return;
    teamOrbitElapsed += performance.now() - teamOrbitStartedAt;
    window.cancelAnimationFrame(teamOrbitFrame);
    teamOrbitFrame = null;
  }

  function startTeamRotation() {
    startTeamOrbitMotion();
    activateTeamMember(activeTeamMember, { immediate: true });
    restartTeamRotation();
  }

  function stopTeamRotation() {
    stopTeamOrbitMotion();
    window.clearInterval(teamRotationTimer);
    window.clearTimeout(teamSwitchTimer);
    memberRole.classList.remove("is-running", "is-switching");
  }

  function clearMagicMoveElements() {
    activeMagicMoveElements.forEach((element) => {
      element.style.removeProperty("view-transition-name");
    });
    activeMagicMoveElements = [];
  }

  function prepareMagicMove(previousIndex, nextIndex) {
    clearMagicMoveElements();
    if (Math.abs(nextIndex - previousIndex) !== 1) return [];

    const pairIndex = Math.min(previousIndex, nextIndex);
    const pairDefinitions = magicMovePairs[pairIndex] || [];
    const movingForward = nextIndex > previousIndex;
    const previousSlide = slides[previousIndex];
    const nextSlide = slides[nextIndex];

    return pairDefinitions.flatMap(([lowerSelector, upperSelector, name]) => {
      const previousSelector = movingForward ? lowerSelector : upperSelector;
      const nextSelector = movingForward ? upperSelector : lowerSelector;
      const previousElement = previousSlide.querySelector(previousSelector);
      const nextElement = nextSlide.querySelector(nextSelector);
      if (!previousElement || !nextElement) return [];

      previousElement.style.viewTransitionName = name;
      activeMagicMoveElements.push(previousElement, nextElement);
      return [{ previousElement, nextElement, name }];
    });
  }

  function setMarketNumberDirection(previousIndex, nextIndex) {
    const previousNumber = slides[previousIndex]?.querySelector(".giant-number[data-value]");
    const nextNumber = slides[nextIndex]?.querySelector(".giant-number[data-value]");
    const previousValue = Number.parseFloat(previousNumber?.dataset.value);
    const nextValue = Number.parseFloat(nextNumber?.dataset.value);

    if (!Number.isFinite(previousValue) || !Number.isFinite(nextValue)) {
      delete document.documentElement.dataset.marketNumberDirection;
      return;
    }

    document.documentElement.dataset.marketNumberDirection = nextValue >= previousValue ? "up" : "down";
  }

  function readMarketMetric(slide) {
    const element = slide?.querySelector(".giant-number[data-value]");
    if (!element) return null;
    const value = Number.parseFloat(element.dataset.value);
    if (!Number.isFinite(value)) return null;
    return {
      value,
      decimals: Number.parseInt(element.dataset.decimals || "0", 10),
      percent: element.dataset.percent === "true",
    };
  }

  function isMarketMetricTransition(previousIndex, nextIndex) {
    return Math.abs(nextIndex - previousIndex) === 1
      && Boolean(readMarketMetric(slides[previousIndex]))
      && Boolean(readMarketMetric(slides[nextIndex]));
  }

  function clamp01(value) {
    return Math.max(0, Math.min(1, value));
  }

  // Ширина слота цифры и ширины «,X» / «%» измеряются по реальному шрифту:
  // хардкод em-значений давал рассинхрон и горизонтальный сдвиг.
  function measureDigitSlotEm(referenceElement) {
    const styles = window.getComputedStyle(referenceElement);
    const probe = document.createElement("span");
    probe.style.cssText = "position:absolute;top:-9999px;left:-9999px;visibility:hidden;white-space:pre;letter-spacing:normal;font-size:1000px;";
    probe.style.fontFamily = styles.fontFamily;
    probe.style.fontWeight = styles.fontWeight;
    probe.style.fontStyle = styles.fontStyle;
    probe.style.fontVariantNumeric = styles.fontVariantNumeric;
    probe.style.fontFeatureSettings = styles.fontFeatureSettings;
    document.body.appendChild(probe);

    let widest = 0;
    for (const digit of "0123456789") {
      probe.textContent = digit;
      widest = Math.max(widest, probe.getBoundingClientRect().width);
    }
    probe.remove();
    return widest > 0 ? widest / 1000 : 0.62;
  }

  function getStageScale() {
    const raw = Number.parseFloat(window.getComputedStyle(stage).getPropertyValue("--stage-scale"));
    return Number.isFinite(raw) && raw > 0 ? raw : 1;
  }

  // Меряем субпиксельно (getBoundingClientRect, а не offsetWidth): целочисленное
  // округление ширины давало ошибку, которая каждый кадр падала на разные пиксели.
  function measureOptionalWidthEm(element, fontSizePx, fallback) {
    const inlineWidth = element.style.width;
    const inlineOpacity = element.style.opacity;
    const inlineTransform = element.style.transform;
    const inlineFilter = element.style.filter;
    element.style.width = "auto";
    element.style.transform = "none";
    element.style.filter = "none";
    element.style.opacity = "0";
    const measured = element.getBoundingClientRect().width / (getStageScale() * fontSizePx);
    element.style.width = inlineWidth;
    element.style.opacity = inlineOpacity;
    element.style.transform = inlineTransform;
    element.style.filter = inlineFilter;
    return measured > 0 ? measured : fallback;
  }

  function calibrateCounterMetrics() {
    const slotEm = measureDigitSlotEm(marketCounter);
    counterMetrics.slot = slotEm;
    document.documentElement.style.setProperty("--digit-slot", `${slotEm.toFixed(4)}em`);

    const fontSizePx = Number.parseFloat(window.getComputedStyle(marketCounter).fontSize) || 310;
    renderDigits(marketCounterMain, "0");
    renderDigits(marketCounterDecimal, ",0");
    // «%» тоже через слоты — иначе у счётчика и статичного числа разный бокс-модель.
    renderDigits(marketCounterPercent, "%");
    marketCounterDecimal.style.width = "";
    marketCounterPercent.style.width = "";
    counterMetrics.decimal = measureOptionalWidthEm(marketCounterDecimal, fontSizePx, 0.72);
    counterMetrics.percent = measureOptionalWidthEm(marketCounterPercent, fontSizePx, 0.92);
    // Ширина фиксируется один раз: во время анимации layout не меняется вообще.
    marketCounterDecimal.style.width = `${counterMetrics.decimal.toFixed(4)}em`;
    marketCounterPercent.style.width = `${counterMetrics.percent.toFixed(4)}em`;
  }

  // Статичные числа на слайдах используют ту же разметку слотов,
  // чтобы при передаче анимации счётчику не было скачка.
  function applyDigitSlotsToStaticNumbers() {
    document.querySelectorAll(".giant-number[data-value]").forEach((element) => {
      const source = element.dataset.display || element.textContent.trim();
      element.dataset.display = source;
      renderDigits(element, source);
    });
  }

  function easeInOutCubic(value) {
    return value < 0.5
      ? 4 * value * value * value
      : 1 - ((-2 * value + 2) ** 3) / 2;
  }

  function easeOutCubic(value) {
    return 1 - (1 - value) ** 3;
  }

  // Резервируем ширину под итоговое число разрядов: пока счёт идёт от 1,
  // левый край и подпись справа стоят на месте.
  function reserveCountUpWidth(element) {
    const digits = String(element.dataset.countTo || "").length || 1;
    const tracking = Math.abs(Number.parseFloat(
      window.getComputedStyle(element).getPropertyValue("--num-tracking"),
    )) || 0.075;
    element.style.minWidth = `${(digits * (counterMetrics.slot - tracking)).toFixed(4)}em`;
  }

  function runCountUp(slide) {
    window.cancelAnimationFrame(countUpFrame);
    window.clearTimeout(countUpTimer);
    countUpFrame = null;
    countUpTimer = null;

    const targets = countUpTargets.filter((element) => slide.contains(element));
    if (!targets.length) return;

    // Сразу ставим «1»: пока идёт переход, число просто стоит на старте,
    // а сам счёт целиком попадает в поле зрения.
    targets.forEach((element) => {
      reserveCountUpWidth(element);
      renderDigits(element, reduceMotion ? String(element.dataset.countTo) : "1");
    });
    if (reduceMotion) return;

    countUpTimer = window.setTimeout(() => startCountUpFrames(targets), COUNT_UP_DELAY);
  }

  function startCountUpFrames(targets) {
    const startedAt = performance.now();
    const frame = (now) => {
      const progress = clamp01((now - startedAt) / 1150);
      const easedProgress = easeOutCubic(progress);

      targets.forEach((element) => {
        const target = Number.parseInt(element.dataset.countTo, 10);
        if (!Number.isFinite(target)) return;
        renderDigits(element, String(Math.round(1 + (target - 1) * easedProgress)));
      });

      if (progress < 1) {
        countUpFrame = window.requestAnimationFrame(frame);
        return;
      }
      countUpFrame = null;
    };
    countUpFrame = window.requestAnimationFrame(frame);
  }

  function optionalPresence(fromVisible, toVisible, progress, timing) {
    if (fromVisible === toVisible) return fromVisible ? 1 : 0;
    const localProgress = clamp01((progress - timing.start) / (timing.end - timing.start));
    const easedProgress = easeInOutCubic(localProgress);
    return toVisible ? easedProgress : 1 - easedProgress;
  }

  // Ширина не трогается: часть «схлопывается» сдвигом по X, а не reflow-ом.
  function styleOptionalCounterPart(element, presence, shiftEm) {
    element.style.opacity = presence.toFixed(3);
    element.style.filter = presence >= 1 ? "none" : `blur(${((1 - presence) * 5).toFixed(2)}px)`;
    element.style.transform = `translate(${shiftEm.toFixed(4)}em, ${((1 - presence) * 0.11).toFixed(3)}em)`;
  }

  // Цифры рендерятся в слоты фиксированной ширины: ширина строки не зависит
  // от того, какие именно цифры показаны, поэтому счётчик не дёргается по горизонтали.
  function renderDigits(container, text) {
    // Исходная разметка — текстовый узел («10,3», «%»). Его нужно удалить,
    // иначе спаны-слоты добавятся рядом и значение отрисуется дважды.
    Array.from(container.childNodes).forEach((node) => {
      if (node.nodeType !== Node.ELEMENT_NODE) node.remove();
    });

    if (container.dataset.digits === text) return;
    container.dataset.digits = text;

    const characters = Array.from(text);
    while (container.childElementCount > characters.length) {
      container.lastElementChild.remove();
    }
    while (container.childElementCount < characters.length) {
      container.appendChild(document.createElement("span"));
    }

    characters.forEach((character, index) => {
      const cell = container.children[index];
      const isDigit = character >= "0" && character <= "9";
      cell.className = isDigit ? "num-slot" : "num-char";
      if (cell.textContent !== character) cell.textContent = character;
    });
  }

  function renderMarketCounter(value, decimalPresence, percentPresence) {
    // Единая основа округления: целая часть не «перепрыгивает» в момент,
    // когда десятичная часть скрывается.
    const tenths = Math.round(value * 10);
    renderDigits(marketCounterMain, String(Math.trunc(tenths / 10)));
    renderDigits(marketCounterDecimal, `,${Math.abs(tenths % 10)}`);

    // Скрытые части не удаляются из потока, а «съезжают»:
    // «%» подтягивается влево на схлопнувшуюся десятичную часть,
    // а вся строка компенсируется на половину освободившейся ширины,
    // чтобы число осталось оптически по центру. Один плавный transform
    // вместо двух встречных анимаций ширины — горизонтальных рывков нет.
    const decimalCollapse = (1 - decimalPresence) * counterMetrics.decimal;
    const percentCollapse = (1 - percentPresence) * counterMetrics.percent;
    styleOptionalCounterPart(marketCounterDecimal, decimalPresence, 0);
    styleOptionalCounterPart(marketCounterPercent, percentPresence, -decimalCollapse);
    marketCounterRow.style.transform = `translateX(${((decimalCollapse + percentCollapse) / 2).toFixed(4)}em)`;
  }

  function animateMarketCounter(fromMetric, toMetric, duration) {
    window.cancelAnimationFrame(marketCounterFrame);
    return new Promise((resolve) => {
      const startedAt = performance.now();
      const frame = (now) => {
        const progress = clamp01((now - startedAt) / duration);
        const easedProgress = easeInOutCubic(progress);
        const value = fromMetric.value + (toMetric.value - fromMetric.value) * easedProgress;
        const decimalPresence = optionalPresence(
          fromMetric.decimals > 0,
          toMetric.decimals > 0,
          progress,
          { start: 0.58, end: 0.94 },
        );
        const percentPresence = optionalPresence(
          fromMetric.percent,
          toMetric.percent,
          progress,
          { start: 0.54, end: 0.9 },
        );
        renderMarketCounter(value, decimalPresence, percentPresence);

        if (progress < 1) {
          marketCounterFrame = window.requestAnimationFrame(frame);
          return;
        }
        marketCounterFrame = null;
        resolve();
      };
      marketCounterFrame = window.requestAnimationFrame(frame);
    });
  }

  function animateMarketCopy(previousSlide, nextSlide, increasing) {
    const selectors = [
      ".stat-keynote .kicker",
      ".stat-copy h2",
      ".stat-copy p",
      ".source-line",
    ];
    const previousElements = selectors.map((selector) => previousSlide.querySelector(selector));
    const nextElements = selectors.map((selector) => nextSlide.querySelector(selector));
    const oldOffset = increasing ? -14 : 14;
    const newOffset = -oldOffset;
    const animations = [];

    previousElements.forEach((element, index) => {
      if (!element) return;
      animations.push(element.animate([
        { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
        { opacity: 0, transform: `translateY(${oldOffset}px)`, filter: "blur(3px)" },
      ], {
        duration: 520,
        delay: index * 35,
        easing: "cubic-bezier(0.65, 0, 0.35, 1)",
        fill: "both",
      }));
    });

    nextElements.forEach((element, index) => {
      if (!element) return;
      animations.push(element.animate([
        { opacity: 0, transform: `translateY(${newOffset}px)`, filter: "blur(3px)" },
        { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
      ], {
        duration: 680,
        delay: 310 + index * 70,
        easing: "cubic-bezier(0.22, 0.61, 0.36, 1)",
        fill: "both",
      }));
    });

    return animations;
  }

  async function runMarketMetricTransition(nextIndex, previousIndex, options) {
    if (marketTransitionRunning) return;
    const previousSlide = slides[previousIndex];
    const nextSlide = slides[nextIndex];
    const fromMetric = readMarketMetric(previousSlide);
    const toMetric = readMarketMetric(nextSlide);
    if (!fromMetric || !toMetric || typeof Element.prototype.animate !== "function") {
      commitSlide(nextIndex, previousIndex, options);
      return;
    }

    marketTransitionRunning = true;
    activeViewTransition?.skipTransition();
    clearMagicMoveElements();
    const increasing = toMetric.value >= fromMetric.value;
    const copyAnimations = animateMarketCopy(previousSlide, nextSlide, increasing);
    nextSlide.classList.add("is-market-next");
    stage.classList.add("is-market-counting");
    marketCounter.classList.add("is-visible");
    renderMarketCounter(fromMetric.value, fromMetric.decimals > 0 ? 1 : 0, fromMetric.percent ? 1 : 0);

    try {
      await Promise.all([
        animateMarketCounter(fromMetric, toMetric, 1280),
        ...copyAnimations.map((animation) => animation.finished.catch(() => {})),
      ]);
      commitSlide(nextIndex, previousIndex, options);
    } finally {
      copyAnimations.forEach((animation) => animation.cancel());
      nextSlide.classList.remove("is-market-next");
      stage.classList.remove("is-market-counting");
      marketCounter.classList.remove("is-visible");
      marketTransitionRunning = false;
    }
  }

  function commitSlide(nextSlide, previousSlide, options = {}) {
    currentSlide = nextSlide;
    stage.dataset.theme = slides[currentSlide].dataset.theme || "dark";

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === currentSlide);
      slide.classList.toggle("is-before", slideIndex < currentSlide);
      slide.classList.toggle("is-after", slideIndex > currentSlide);
      slide.setAttribute("aria-hidden", slideIndex === currentSlide ? "false" : "true");
    });

    window.dispatchEvent(new CustomEvent("realgo:slidechange", {
      detail: { index: currentSlide, slide: slides[currentSlide] },
    }));

    runCountUp(slides[currentSlide]);

    if (previousSlide === teamSlide.dataset.slide * 1 && currentSlide !== previousSlide) {
      stopTeamRotation();
    }
    if (currentSlide === teamSlide.dataset.slide * 1 && previousSlide !== currentSlide) {
      startTeamRotation();
    }

    const progress = (currentSlide + 1) / slides.length;
    progressBar.style.transform = `scaleX(${progress})`;
    slideCounter.textContent = `${formatSlideNumber(currentSlide + 1)} / ${formatSlideNumber(slides.length)}`;
    updateDots();

    if (!options.skipHash) {
      window.history.replaceState(null, "", `#${currentSlide + 1}`);
    }
  }

  function showSlide(index, options = {}) {
    const nextSlide = Math.max(0, Math.min(index, slides.length - 1));
    const previousSlide = currentSlide;
    const canAnimateMarketMetric = nextSlide !== previousSlide
      && !reduceMotion
      && !options.instant
      && isMarketMetricTransition(previousSlide, nextSlide);

    if (canAnimateMarketMetric) {
      runMarketMetricTransition(nextSlide, previousSlide, options);
      return;
    }

    const canAnimate = nextSlide !== previousSlide
      && !reduceMotion
      && !options.instant
      && typeof document.startViewTransition === "function";

    if (!canAnimate) {
      delete document.documentElement.dataset.marketNumberDirection;
      commitSlide(nextSlide, previousSlide, options);
      return;
    }

    const transitionSequence = ++viewTransitionSequence;
    activeViewTransition?.skipTransition();
    const movePairs = prepareMagicMove(previousSlide, nextSlide);
    setMarketNumberDirection(previousSlide, nextSlide);
    document.documentElement.dataset.slideDirection = nextSlide > previousSlide ? "forward" : "backward";
    document.documentElement.classList.add("is-slide-transitioning");

    try {
      activeViewTransition = document.startViewTransition(() => {
        movePairs.forEach(({ previousElement, nextElement, name }) => {
          previousElement.style.removeProperty("view-transition-name");
          nextElement.style.viewTransitionName = name;
        });
        commitSlide(nextSlide, previousSlide, options);
      });

      activeViewTransition.finished
        .catch(() => {})
        .finally(() => {
          if (transitionSequence !== viewTransitionSequence) return;
          clearMagicMoveElements();
          document.documentElement.classList.remove("is-slide-transitioning");
          delete document.documentElement.dataset.slideDirection;
          delete document.documentElement.dataset.marketNumberDirection;
          activeViewTransition = null;
        });
    } catch (error) {
      clearMagicMoveElements();
      document.documentElement.classList.remove("is-slide-transitioning");
      delete document.documentElement.dataset.slideDirection;
      delete document.documentElement.dataset.marketNumberDirection;
      activeViewTransition = null;
      commitSlide(nextSlide, previousSlide, options);
    }
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function previousSlide() {
    showSlide(currentSlide - 1);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  function toggleNotes() {
    stage.classList.toggle("notes-visible");
  }

  function toggleHelp(force) {
    const shouldShow = typeof force === "boolean" ? force : !help.classList.contains("is-visible");
    help.classList.toggle("is-visible", shouldShow);
    help.setAttribute("aria-hidden", shouldShow ? "false" : "true");
  }

  function updateTimer() {
    const elapsed = Math.max(0, Date.now() - timerStartedAt);
    const totalSeconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function isInteractiveTarget(target) {
    return target instanceof Element && Boolean(target.closest("a, button, video"));
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "?") {
      event.preventDefault();
      toggleHelp();
      return;
    }

    if (event.key === "Escape" && help.classList.contains("is-visible")) {
      toggleHelp(false);
      return;
    }

    if (["ArrowRight", "ArrowDown", "PageDown"].includes(event.key)) {
      event.preventDefault();
      nextSlide();
      return;
    }

    if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      previousSlide();
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      showSlide(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      showSlide(slides.length - 1);
      return;
    }

    if (event.code === "Space") {
      event.preventDefault();
      nextSlide();
      return;
    }

    if (event.key.toLowerCase() === "n") {
      event.preventDefault();
      toggleNotes();
      return;
    }

    if (event.key.toLowerCase() === "f") {
      event.preventDefault();
      toggleFullscreen();
      return;
    }

    if (event.key.toLowerCase() === "r") {
      timerStartedAt = Date.now();
      updateTimer();
    }
  });

  document.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action]");
    if (actionTarget) {
      const action = actionTarget.dataset.action;
      if (action === "next") nextSlide();
      if (action === "prev") previousSlide();
      return;
    }

    if (!isInteractiveTarget(event.target) && event.detail === 2) {
      toggleFullscreen();
    }
  });

  stage.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.clientX ?? null;
  }, { passive: true });

  stage.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const distance = touchEndX - touchStartX;
    touchStartX = null;
    if (Math.abs(distance) < 60) return;
    if (distance < 0) nextSlide();
    if (distance > 0) previousSlide();
  }, { passive: true });

  teamHandles.forEach((button) => {
    button.addEventListener("click", () => {
      activateTeamMember(Number(button.dataset.teamIndex));
      restartTeamRotation();
    });
  });

  window.addEventListener("resize", resizeStage);
  window.addEventListener("hashchange", () => {
    const hashSlide = getInitialSlide();
    if (hashSlide !== currentSlide) showSlide(hashSlide, { skipHash: true });
  });

  buildDots();
  calibrateCounterMetrics();
  applyDigitSlotsToStaticNumbers();
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      calibrateCounterMetrics();
      applyDigitSlotsToStaticNumbers();
      // Слот мог измениться после подмены фолбэка на Manrope — пересчитываем резерв.
      countUpTargets.forEach((element) => {
        if (element.style.minWidth) reserveCountUpWidth(element);
      });
    });
  }
  resizeStage();
  showSlide(currentSlide, { skipHash: true });
  if (slides[currentSlide] === teamSlide) {
    startTeamRotation();
  }
  updateTimer();
  window.setInterval(updateTimer, 1000);
})();
