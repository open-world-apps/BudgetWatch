import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface BalanceState {
  accounts: number;
  activeAccount: string;
  balance: number;
  target: number;
}

const initialState: BalanceState = {
  accounts: 0, // How many accounts the user has stored.
  activeAccount: '',
  balance: 0,
  target: 0,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload;
    },
    increaseTarget: (state, action: PayloadAction<number>) => {
      state.target += action.payload;
    },
    decreaseTarget: (state, action: PayloadAction<number>) => {
      state.target -= action.payload;
    },
    incrementAccounts: (state, action: PayloadAction<number>) => {
      state.accounts++;
    },
    decrementAccounts: (state, action: PayloadAction<number>) => {
      state.accounts--;
    },
    setActiveAccount: (state, action: PayloadAction<string>) => {
      state.activeAccount = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {
  incrementByAmount,
  decrementByAmount,
  increaseTarget,
  decreaseTarget,
  incrementAccounts,
  decrementAccounts,
  setActiveAccount,
} = accountSlice.actions;

export default accountSlice.reducer;
