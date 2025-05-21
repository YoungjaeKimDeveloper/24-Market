import { create } from "zustand";

const useBearStore = create((set) => ({
  // Data
  data: [],
  // Statement
  isLoading: false,
  // isLoaded: false,
  // Messages
  successMessage: "",
  errorMessage: "",

  // Actions
  
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
