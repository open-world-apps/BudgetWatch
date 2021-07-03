import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

type Percentage = number;

export interface BudgetState {
  remaining: number;
  target: number | Percentage;
  measurement: string;
}

const initialState: BudgetState = {
  remaining: 0,
  target: 0,
  measurement: 'fixed',
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.remaining += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.remaining -= action.payload;
    },
    increaseTarget: (state, action: PayloadAction<number>) => {
      state.target += action.payload;
    },
    decreaseTarget: (state, action: PayloadAction<number>) => {
      state.target -= action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {
  incrementByAmount,
  decrementByAmount,
  increaseTarget,
  decreaseTarget,
} = budgetSlice.actions;

export default budgetSlice.reducer;
