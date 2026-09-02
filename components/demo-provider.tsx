"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export const feedbackCategories = ["分かりにくい", "バグ報告", "改善アイデア", "よかった点"] as const;
export type FeedbackCategory = (typeof feedbackCategories)[number];
type FeedbackItem = { game: string; category: FeedbackCategory; rating: number; text: string; date: string };
const storageKey = "foundigame-demo";
const legacyStorageKey = "foundingame-demo";
type DemoState = {
  loggedIn: boolean;
  role: "player" | "creator";
  points: number;
  favorites: string[];
  allocations: Record<string, number>;
  feedback: FeedbackItem[];
  setLoggedIn: (value: boolean) => void;
  setRole: (value: "player" | "creator") => void;
  toggleFavorite: (slug: string) => void;
  support: (slug: string, amount: number) => boolean;
  addFeedback: (item: FeedbackItem) => void;
};

const defaultState: {
  loggedIn: boolean;
  role: "player" | "creator";
  points: number;
  favorites: string[];
  allocations: Record<string, number>;
  feedback: FeedbackItem[];
} = {
  loggedIn: true,
  role: "player" as const,
  points: 720,
  favorites: ["pixel-hearth"],
  allocations: { "pixel-hearth": 180 },
  feedback: [],
};

const DemoContext = createContext<DemoState | null>(null);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey) ?? window.localStorage.getItem(legacyStorageKey);
    if (saved) {
      try { setState({ ...defaultState, ...JSON.parse(saved) }); } catch { /* use defaults */ }
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) window.localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, loaded]);

  const toggleFavorite = useCallback((slug: string) => {
    setState((old) => ({ ...old, favorites: old.favorites.includes(slug) ? old.favorites.filter((x) => x !== slug) : [...old.favorites, slug] }));
  }, []);

  const support = useCallback((slug: string, amount: number) => {
    if (state.points < amount) return false;
    setState((old) => {
      if (old.points < amount) return old;
      return { ...old, points: old.points - amount, allocations: { ...old.allocations, [slug]: (old.allocations[slug] ?? 0) + amount } };
    });
    return true;
  }, [state.points]);

  const value = useMemo<DemoState>(() => ({
    ...state,
    setLoggedIn: (loggedIn) => setState((old) => ({ ...old, loggedIn })),
    setRole: (role) => setState((old) => ({ ...old, role })),
    toggleFavorite,
    support,
    addFeedback: (item) => setState((old) => ({ ...old, feedback: [item, ...old.feedback] })),
  }), [state, toggleFavorite, support]);

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) throw new Error("useDemo must be used inside DemoProvider");
  return context;
}
