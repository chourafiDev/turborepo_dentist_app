import { StateCreator } from "zustand";

type ThemeState = {
  isSidebarOpen: boolean;
};

type ThemeAction = {
  toggleSidebar: () => void;
};

export type ThemeSlice = ThemeState & ThemeAction;

const initialState: ThemeState = {
  isSidebarOpen: true,
};

export const createThemeSlice: StateCreator<
  ThemeSlice,
  [["zustand/immer", never]],
  [],
  ThemeSlice
> = (set) => ({
  ...initialState,
  toggleSidebar: () =>
    set((state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    }),
});
