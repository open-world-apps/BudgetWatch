import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface BalanceState {
   accounts: number;
   activeAccount: string;
   remaining: number;
   target: number;
}

const initialState: BalanceState = {
   accounts: 0, // How many accounts the user has stored.
   activeAccount: '',
   remaining: 0,
   target: 0,
};

const balanceSlice = createSlice({
   name: 'balance',
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
} = balanceSlice.actions;

export default balanceSlice.reducer;
