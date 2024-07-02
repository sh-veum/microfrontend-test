// src/stores/useDebugStore.ts
import create from "zustand";

interface DebugState {
  debug: boolean;
  toggleDebug: () => void;
}

export const useDebugStore = create<DebugState>((set) => ({
  debug: false,
  toggleDebug: () => set((state) => ({ debug: !state.debug })),
}));
