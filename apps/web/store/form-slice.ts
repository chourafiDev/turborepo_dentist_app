import { StateCreator } from "zustand";

type FormState = {
  currentStep: number;
  formData: Record<string, any>;
};

type FormAction = {
  setCurrentStep: (type: string) => void;
  handleSetFormData: (data: Record<string, any>) => void;
  reset: () => void;
};

export type FormSlice = FormState & FormAction;

const initialState: FormState = {
  currentStep: 1,
  formData: {},
};

export const createFormSlice: StateCreator<
  FormSlice,
  [["zustand/immer", never]],
  [],
  FormSlice
> = (set) => ({
  ...initialState,
  setCurrentStep: (type) =>
    set((state) => {
      if (type === "inc") {
        state.currentStep += 1;
      } else {
        state.currentStep -= 1;
      }
    }),
  handleSetFormData: (data) =>
    set((state) => {
      state.formData = { ...state.formData, ...data };
    }),
  reset: () => set(() => ({ ...initialState })),
});
