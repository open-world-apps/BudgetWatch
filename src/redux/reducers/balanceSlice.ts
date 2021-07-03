import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface BalanceState {
  remaining: number;
  target: number;
}

const initialState: BalanceState = {
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
  },
  extraReducers: builder => {},
});

export const {
  incrementByAmount,
  decrementByAmount,
  increaseTarget,
  decreaseTarget,
} = balanceSlice.actions;

export default balanceSlice.reducer;
