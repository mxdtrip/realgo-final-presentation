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

type DemoMode = "extension" | "agent" | "stages" | "rating";
const CAMERA_APPROACH_MS = 3800;
const FIRST_SHOT_HOLD_MS = 1800;
const PRODUCT_FOCUS_DELAY_MS = FIRST_SHOT_HOLD_MS + CAMERA_APPROACH_MS + 180;
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
let currentCard: HTMLElement | null = null;
let previousCardHeight: number | null = null;
let timers: number[] = [];
let pendingReadyHandler: (() => void) | null = null;

function clearDemo() {
  timers.forEach((timer) => window.clearTimeout(timer)); timers = [];
  if (pendingReadyHandler) {
    window.removeEventListener("realgo:macbookready", pendingReadyHandler);
    pendingReadyHandler = null;
  }
  if (currentCard?.offsetHeight) previousCardHeight = currentCard.offsetHeight;
  currentCard = null;
  currentSlide?.classList.remove("is-product-mounted", "is-product-screen", "is-product-focus");
  if (currentSlide) delete currentSlide.dataset.productTimelineStarted;
  currentRoot?.unmount(); currentRoot = null;
  currentSlide?.querySelector(".product-ui-stage")?.remove(); currentSlide = null;
}

function activateDemo() {
  const slide = document.querySelector<HTMLElement>(".slide.is-active.slide-macbook");
  if (!slide) { clearDemo(); return; }
  if (slide === currentSlide) return;
  clearDemo();
  const mode = (slide.querySelector<HTMLElement>(".macbook-3d-slot")?.dataset.macbookMode ?? "extension") as DemoMode;
  if (mode === "stages") storage.set(assistantStorageKey, storedStagesState()); else storage.delete(assistantStorageKey);
  const layer = document.createElement("div");
  layer.className = `product-ui-stage product-ui-stage--${mode}`;
  layer.setAttribute("aria-label", "Интерактивная демонстрация интерфейса расширения ReAlgo");
  layer.innerHTML = '<div class="product-focus-dim" aria-hidden="true"></div><div class="product-ui-card"><div class="product-ui-glint" aria-hidden="true"></div><div class="product-ui-root"></div></div>';
  const card = layer.querySelector<HTMLElement>(".product-ui-card")!;
  currentCard = card;
  slide.appendChild(layer);
  currentSlide = slide;
  currentRoot = createRoot(layer.querySelector(".product-ui-root")!);
  currentRoot.render(<ProductDemo mode={mode} />);
  slide.classList.add("is-product-mounted");

  if (previousCardHeight && mode !== "extension") {
    card.classList.add("is-height-transitioning");
    card.style.height = `${previousCardHeight}px`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (card !== currentCard) return;
      const targetHeight = card.querySelector<HTMLElement>(".product-ui-root")?.scrollHeight;
      if (!targetHeight) return;
      card.style.height = `${targetHeight}px`;
      timers.push(window.setTimeout(() => {
        if (card !== currentCard) return;
        card.classList.remove("is-height-transitioning");
        card.style.removeProperty("height");
      }, 920));
    }));
  }

  // Slides after the opening extension shot continue the same physical
  // window. Mount them directly in the already detached state so changing
  // the content never replays the lift from the MacBook display.
  if (mode !== "extension") {
    slide.classList.add("is-product-focus");
    window.dispatchEvent(new CustomEvent("realgo:productfocus", {
      detail: { slide, immediate: true },
    }));
    // Keep the replacement hidden for the single frame in which
    // CSS3DRenderer reparents it from the slide layer into the 3D scene.
    // This prevents a large flat-DOM flash before the settled matrix applies.
    requestAnimationFrame(() => {
      if (slide === currentSlide) slide.classList.add("is-product-screen");
    });
  }

  function startTimeline() {
    if (slide !== currentSlide || slide.dataset.productTimelineStarted === "true") return;
    slide.dataset.productTimelineStarted = "true";
    if (mode === "extension") {
      timers.push(window.setTimeout(() => slide.classList.add("is-product-screen"), FIRST_SHOT_HOLD_MS));
      timers.push(window.setTimeout(() => {
        slide.classList.add("is-product-focus");
        window.dispatchEvent(new CustomEvent("realgo:productfocus", { detail: { slide } }));
      }, PRODUCT_FOCUS_DELAY_MS));
    }
    // First complete the camera dolly with the panel rigidly attached to the
    // display. Only after the camera settles does the panel lift forward; UI
    // interactions wait until that second motion is complete as well.
    // CSS3DRenderer reparents the card into its camera layer. Keep a direct
    // reference so the timeline remains stable regardless of DOM ancestry.
    if (mode === "agent") timers.push(window.setTimeout(() => card.querySelector<HTMLButtonElement>(".realgo-agent-btn--hint")?.click(), 980));
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
