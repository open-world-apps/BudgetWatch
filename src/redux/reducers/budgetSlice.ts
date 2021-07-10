import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Percentage = number;

export interface BudgetState {
   remaining: number;
   target: number | Percentage;
   measurement: string;
   budgets: number;
}

const initialState: BudgetState = {
   remaining: 0,
   target: 0,
   measurement: 'fixed',
   budgets: 0, // How many budgets the user has stored.
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
      incrementBudgets: (state, action: PayloadAction<number>) => {
        state.budgets++;
      },
      decrementBudgets: (state, action: PayloadAction<number>) => {
        state.budgets--;
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
   incrementBudgets,
   decrementBudgets,
   increaseTarget,
   decreaseTarget,
} = budgetSlice.actions;

export default budgetSlice.reducer;
