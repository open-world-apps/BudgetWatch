import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";

type Percentage = number;

export interface BudgetState {
   remainingBudget: number;
   targetBudget: number | Percentage;
   measurement: string;
}

const initialState: BudgetState = {
   remainingBudget: 0,
   targetBudget: 0,
   measurement: 'fixed',
};

const budgetSlice = createSlice({
   name: 'budget',
   initialState,
   reducers: {
      incrementByAmount: (state, action: PayloadAction<number>) => {
         state.remainingBudget += action.payload;
      },
      decrementByAmount: (state, action: PayloadAction<number>) => {
         state.remainingBudget -= action.payload;
      },
   },
   extraReducers: builder => {},
});

export const { incrementByAmount, decrementByAmount } = budgetSlice.actions;

export default budgetSlice.reducer;
