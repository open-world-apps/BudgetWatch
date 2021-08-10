import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Percentage = number;

export interface BudgetState {
  budgets: number;
  measurement: string;
  balance: number;
  target: number | Percentage;
  activeBudget: string;
}

const initialState: BudgetState = {
  activeBudget: '',
  balance: 0,
  budgets: 0, // How many budgets the user has stored.
  measurement: 'fixed',
  target: 0,
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload;
    },
    incrementBudgets: state => {
      state.budgets++;
    },
    decrementBudgets: state => {
      state.budgets--;
    },
    increaseTarget: (state, action: PayloadAction<number>) => {
      state.target += action.payload;
    },
    decreaseTarget: (state, action: PayloadAction<number>) => {
      state.target -= action.payload;
    },
    setActiveBudget: (state, action: PayloadAction<string>) => {
      state.activeBudget = action.payload;
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
  setActiveBudget,
} = budgetSlice.actions;

export default budgetSlice.reducer;
