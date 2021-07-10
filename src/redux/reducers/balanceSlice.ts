import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface BalanceState {
   remaining: number;
   target: number;
   accounts: number;
}

const initialState: BalanceState = {
   remaining: 0,
   target: 0,
   accounts: 0, // How many accounts the user has stored.
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
} = balanceSlice.actions;

export default balanceSlice.reducer;
