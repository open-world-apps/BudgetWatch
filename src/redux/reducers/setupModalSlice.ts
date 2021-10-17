import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  step: number;
}

const initialState: ModalState = {
  step: 1,
};

const setupModalSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {
    incrementStep: state => {
      state.step++;
    },
    decrementStep: state => {
      state.step--;
    },
  },
});

export const { incrementStep, decrementStep } = setupModalSlice.actions;

export default setupModalSlice.reducer;
