import { create } from "zustand";
import { createFormSlice } from "./form-slice";
import { createThemeSlice } from "./theme-slice";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { store } from "@/types/store";

export const useStore = create<store>()(
  devtools(
    immer((...a) => ({
      ...createFormSlice(...a),
      ...createThemeSlice(...a),
    }))
  )
);
