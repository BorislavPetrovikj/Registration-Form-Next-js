import { create } from 'zustand';

interface FormState {
  step: number;
  firstName: string;
  lastName: string;
  setStep: (step: number) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  reset: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  step: 1,
  firstName: '',
  lastName: '',
  setStep: (step) => set({ step }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  reset: () => set({ step: 1, firstName: '', lastName: '' }),
})); 