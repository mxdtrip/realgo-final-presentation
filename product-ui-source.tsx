import { useMemo } from "react";
import { createRoot, type Root } from "react-dom/client";

import { AssistantApp } from "@realgo-extension/assistant/AssistantApp";
import { ASSISTANT_STATE_KEY_PREFIX } from "@realgo-extension/lib/types";
import type {
  AssistantHintPayload, AssistantHintResult, AssistantPersistedState,
  AssistantTask, DetectedSubmission, ExtensionEventResult,
  ProblemCardsResult, SubmissionPayload,
} from "@realgo-extension/lib/types";
import { PopupApp } from "@realgo-extension/popup/PopupApp";

type DemoMode = "extension-intro" | "extension" | "agent" | "stages" | "rating";
const CAMERA_APPROACH_MS = 3800;
const FIRST_SHOT_HOLD_MS = 1800;
const CAMERA_SETTLED_MS = FIRST_SHOT_HOLD_MS + CAMERA_APPROACH_MS;
const COPY_REVEAL_DELAY_MS = CAMERA_SETTLED_MS + 120;
const EXTENSION_SCREEN_DELAY_MS = COPY_REVEAL_DELAY_MS + 900;
const PRODUCT_FOCUS_DELAY_MS = EXTENSION_SCREEN_DELAY_MS + 620;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const wait = (duration: number) => new Promise((resolve) => window.setTimeout(resolve, duration));
const storage = new Map<string, unknown>();
const storageListeners = new Set<(changes: Record<string, unknown>, area: string) => void>();

// Production AssistantApp expects chrome.storage. This in-memory implementation
// preserves its real persistence contract while keeping the keynote deterministic.
const chromeApi = (window as typeof window & { chrome?: Record<string, unknown> }).chrome ?? {};
chromeApi.storage = {
  local: {
    async get(key: string | null) {
      if (key === null) return Object.fromEntries(storage);
      return { [key]: storage.get(key) };
    },
    async set(values: Record<string, unknown>) {
      const changes: Record<string, unknown> = {};
      Object.entries(values).forEach(([key, value]) => {
        changes[key] = { oldValue: storage.get(key), newValue: value };
        storage.set(key, value);
      });
      storageListeners.forEach((listener) => listener(changes, "local"));
    },
    async remove(keys: string | string[]) {
      (Array.isArray(keys) ? keys : [keys]).forEach((key) => storage.delete(key));
    },
  },
  onChanged: {
    addListener(listener: (changes: Record<string, unknown>, area: string) => void) { storageListeners.add(listener); },
    removeListener(listener: (changes: Record<string, unknown>, area: string) => void) { storageListeners.delete(listener); },
  },
};
if (!(window as typeof window & { chrome?: Record<string, unknown> }).chrome) {
  (window as typeof window & { chrome?: Record<string, unknown> }).chrome = chromeApi;
}

const task: AssistantTask = {
  platform: "leetcode",
  taskTitle: "Longest Substring Without Repeating Characters",
  taskUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
  platformTaskSlug: "longest-substring-without-repeating-characters",
  difficulty: "Medium",
  tags: ["Hash Table", "String", "Sliding Window"],
  taskDescription: "Find the length of the longest substring without repeating characters.",
};
const taskKey = `${task.platform}:${task.platformTaskSlug}:${task.taskUrl}`;
const assistantStorageKey = ASSISTANT_STATE_KEY_PREFIX + taskKey;
const submission: DetectedSubmission = {
  eventId: "deck-demo-longest-substring", platform: "leetcode", taskTitle: task.taskTitle,
  taskUrl: task.taskUrl, platformTaskSlug: task.platformTaskSlug,
  tags: ["sliding window", "hash table"], difficulty: "medium",
  submitResult: "accepted", submittedAt: "2026-07-30T12:00:00.000Z",
};
const hints: AssistantHintResult[] = [
  {
    hint: "Не пересчитывай каждую подстроку заново. Двигай левую границу только тогда, когда очередной символ уже есть в текущем окне.",
    question: "Какую информацию о последней позиции символа нужно хранить?", stage: "nudge", problemKnown: true,
    patterns: [{ code: "variable_sliding_window", name: "Variable Sliding Window" }],
  },
  {
    hint: "Держи окно [left, right] без повторяющихся символов и словарь последних позиций. При повторе переноси left сразу за прошлое вхождение.",
    question: "Почему max защищает уже найденное окно?", stage: "approach", problemKnown: true,
    patterns: [{ code: "variable_sliding_window", name: "Variable Sliding Window" }],
  },
  {
    hint: "На каждом right обновляй left через max(left, last[c] + 1), затем last[c] = right и сравнивай ответ с right - left + 1.",
    question: "Какой инвариант выполняется перед обновлением максимальной длины?", stage: "reveal", problemKnown: true,
    patterns: [{ code: "variable_sliding_window", name: "Variable Sliding Window" }],
  },
];

function storedStagesState(): AssistantPersistedState {
  return {
    messages: [
      { role: "user", content: "Дай мягкий намёк, без решения." }, { role: "assistant", content: hints[0].hint },
      { role: "user", content: "Можно конкретнее — всё ещё без полного решения." }, { role: "assistant", content: hints[1].hint },
      { role: "user", content: "Покажи последний уровень разбора." }, { role: "assistant", content: hints[2].hint },
    ],
    hintLevel: 3, hintsUsed: 3, cooldownEndAt: null, patterns: hints[2].patterns,
    problemKnown: true, patternUsed: false, savedAt: Date.now(),
  };
}

function ProductDemo({ mode }: { mode: DemoMode }) {
  const fetchCards = useMemo(() => {
    let ticks = 0;
    return async (): Promise<ProblemCardsResult> => {
      await wait(180); ticks += 1;
      return ticks < 2 ? { status: "generating", cardsCount: 0 } : { status: "ready", cardsCount: 3 };
    };
  }, []);
  async function saveSubmission(_payload: SubmissionPayload): Promise<ExtensionEventResult> {
    await wait(620);
    return { accepted: true, duplicate: false, problemId: 42, status: "recorded", nextReviewAt: null };
  }
  async function askAssistant(payload: AssistantHintPayload, onDelta: (text: string) => void): Promise<AssistantHintResult> {
    const result = hints[Math.max(0, Math.min(hints.length - 1, payload.hintLevel - 1))];
    const words = result.hint.split(" "); await wait(260);
    for (let index = 0; index < words.length; index += 3) {
      onDelta(words.slice(index, index + 3).join(" ") + (index + 3 < words.length ? " " : ""));
      await wait(82);
    }
    return result;
  }
  if (mode === "rating") {
    return <PopupApp submission={submission} onSave={saveSubmission} onFetchCards={fetchCards} onClose={() => undefined} onReview={() => undefined} />;
  }
  return <AssistantApp task={task} onAsk={askAssistant} variant="panel" />;
}

let currentRoot: Root | null = null;
let currentSlide: HTMLElement | null = null;
let currentMode: DemoMode | null = null;
let currentCard: HTMLElement | null = null;
let currentLayer: HTMLElement | null = null;
let timers: number[] = [];
let pendingReadyHandler: (() => void) | null = null;

function clearTimeline() {
  timers.forEach((timer) => window.clearTimeout(timer)); timers = [];
  if (pendingReadyHandler) {
    window.removeEventListener("realgo:macbookready", pendingReadyHandler);
    pendingReadyHandler = null;
  }
}

function clearDemo() {
  clearTimeline();
  currentSlide?.classList.remove("is-product-mounted", "is-product-screen", "is-product-focus", "is-camera-settled");
  if (currentSlide) delete currentSlide.dataset.productTimelineStarted;
  currentRoot?.unmount(); currentRoot = null;
  currentCard?.remove(); currentCard = null;
  currentLayer?.remove(); currentLayer = null;
  currentSlide = null;
  currentMode = null;
}

function activateDemo(event?: Event) {
  const slide = document.querySelector<HTMLElement>(".slide.is-active.slide-macbook");
  if (!slide) { clearDemo(); return; }
  const eventDetail = (event as CustomEvent<{ logicalSlide?: HTMLElement }> | undefined)?.detail;
  const logicalSlide = eventDetail?.logicalSlide instanceof HTMLElement ? eventDetail.logicalSlide : null;
  const requestedMode = logicalSlide?.querySelector<HTMLElement>(".macbook-3d-slot")?.dataset.macbookMode
    ?? document.getElementById("stage")?.dataset.productMode
    ?? slide.querySelector<HTMLElement>(".macbook-3d-slot")?.dataset.macbookMode
    ?? "extension";
  const mode = requestedMode as DemoMode;
  if (slide === currentSlide && mode === currentMode) return;
  clearTimeline();
  const continuesProductSequence = Boolean(currentSlide && currentCard && currentLayer && currentRoot);
  const reusesCurrentSlide = slide === currentSlide;
  const previousMode = currentMode ?? undefined;
  const previousHeight = currentCard?.offsetHeight ?? null;
  currentSlide?.classList.remove("is-product-screen", "is-product-focus");
  if (!reusesCurrentSlide) currentSlide?.classList.remove("is-product-mounted", "is-camera-settled");
  if (currentSlide) delete currentSlide.dataset.productTimelineStarted;

  if (mode === "stages") storage.set(assistantStorageKey, storedStagesState()); else storage.delete(assistantStorageKey);

  if (!continuesProductSequence) {
    currentLayer = document.createElement("div");
    currentLayer.setAttribute("aria-label", "Интерактивная демонстрация интерфейса расширения ReAlgo");
    currentLayer.innerHTML = '<div class="product-focus-dim" aria-hidden="true"></div><div class="product-ui-card"><div class="product-ui-glint" aria-hidden="true"></div><div class="product-ui-root"></div></div>';
    currentCard = currentLayer.querySelector<HTMLElement>(".product-ui-card")!;
    currentRoot = createRoot(currentLayer.querySelector(".product-ui-root")!);
  }

  const layer = currentLayer!;
  const card = currentCard!;
  layer.className = `product-ui-stage product-ui-stage--${mode}`;
  slide.appendChild(layer);
  currentSlide = slide;
  currentMode = mode;
  currentRoot!.render(<ProductDemo mode={mode} />);
  slide.classList.add("is-product-mounted");

  if (continuesProductSequence && previousHeight) {
    card.classList.add("is-height-transitioning");
    card.style.height = `${previousHeight}px`;
    // createRoot commits concurrently. Give React one paint to replace the
    // inner state, then measure its intrinsic height and animate the existing
    // outer shell to it. A nested rAF could still observe the previous tree.
    requestAnimationFrame(() => {
      timers.push(window.setTimeout(() => {
        if (card !== currentCard) return;
        const targetHeight = card.querySelector<HTMLElement>(".product-ui-root")?.scrollHeight;
        if (!targetHeight) {
          card.classList.remove("is-height-transitioning");
          card.style.removeProperty("height");
          return;
        }
        card.style.height = `${targetHeight}px`;
        timers.push(window.setTimeout(() => {
          if (card !== currentCard) return;
          card.classList.remove("is-height-transitioning");
          card.style.removeProperty("height");
        }, 920));
      }, 50));
    });
  }

  // Once the window has detached from the display, keep that exact DOM node
  // and CSS3D object alive for every adjacent product slide. Only React state
  // and intrinsic height change; opacity and the lift animation never reset.
  if (continuesProductSequence) {
    slide.classList.add("is-camera-settled");
    if (mode !== "extension-intro" && !(mode === "extension" && previousMode === "extension-intro")) {
      slide.classList.add("is-product-focus");
      slide.classList.add("is-product-screen");
      window.dispatchEvent(new CustomEvent("realgo:productfocus", {
        detail: { slide, immediate: true },
      }));
    }
  }

  function startTimeline() {
    if (slide !== currentSlide || slide.dataset.productTimelineStarted === "true") return;
    slide.dataset.productTimelineStarted = "true";
    if (mode === "extension-intro") {
      if (reduceMotion) slide.classList.add("is-camera-settled");
      else timers.push(window.setTimeout(() => slide.classList.add("is-camera-settled"), COPY_REVEAL_DELAY_MS));
    } else if (mode === "extension" && continuesProductSequence && previousMode === "extension-intro") {
      const revealPanel = () => {
        slide.classList.add("is-product-screen");
        timers.push(window.setTimeout(() => {
          slide.classList.add("is-product-focus");
          window.dispatchEvent(new CustomEvent("realgo:productfocus", { detail: { slide, immediate: reduceMotion } }));
        }, reduceMotion ? 0 : 620));
      };
      if (reduceMotion) revealPanel();
      else timers.push(window.setTimeout(revealPanel, 180));
    } else if (mode === "extension") {
      if (reduceMotion) {
        slide.classList.add("is-camera-settled", "is-product-screen", "is-product-focus");
        window.dispatchEvent(new CustomEvent("realgo:productfocus", { detail: { slide, immediate: true } }));
        return;
      }
      timers.push(window.setTimeout(() => slide.classList.add("is-camera-settled"), COPY_REVEAL_DELAY_MS));
      timers.push(window.setTimeout(() => slide.classList.add("is-product-screen"), EXTENSION_SCREEN_DELAY_MS));
      timers.push(window.setTimeout(() => {
        slide.classList.add("is-product-focus");
        window.dispatchEvent(new CustomEvent("realgo:productfocus", { detail: { slide } }));
      }, PRODUCT_FOCUS_DELAY_MS));
    } else if (!continuesProductSequence) {
      const revealProduct = () => {
        slide.classList.add("is-camera-settled", "is-product-screen", "is-product-focus");
        window.dispatchEvent(new CustomEvent("realgo:productfocus", { detail: { slide, immediate: reduceMotion } }));
      };
      if (reduceMotion) revealProduct();
      else timers.push(window.setTimeout(revealProduct, CAMERA_APPROACH_MS + 120));
    }
    // First complete the camera dolly with the panel rigidly attached to the
    // display. Only after the camera settles does the panel lift forward; UI
    // interactions wait until that second motion is complete as well.
    // CSS3DRenderer reparents the card into its camera layer. Keep a direct
    // reference so the timeline remains stable regardless of DOM ancestry.
    if (mode === "agent") {
      const hintDelay = continuesProductSequence || reduceMotion ? 980 : CAMERA_APPROACH_MS + 1100;
      timers.push(window.setTimeout(() => card.querySelector<HTMLButtonElement>(".realgo-agent-btn--hint")?.click(), hintDelay));
    }
  }

  if (document.getElementById("stage")?.classList.contains("has-macbook-3d")) {
    requestAnimationFrame(startTimeline);
  } else {
    pendingReadyHandler = () => {
      pendingReadyHandler = null;
      requestAnimationFrame(startTimeline);
    };
    window.addEventListener("realgo:macbookready", pendingReadyHandler, { once: true });
  }
}

window.addEventListener("realgo:slidechange", activateDemo);
window.addEventListener("DOMContentLoaded", activateDemo, { once: true });
if (document.readyState !== "loading") activateDemo();
