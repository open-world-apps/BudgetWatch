import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import BalanceReducer from '../reducers/balanceSlice';
import BudgetReducer from '../reducers/budgetSlice';

export const store = configureStore({
   reducer: {
      balance: BalanceReducer,
      budget: BudgetReducer,
   }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
