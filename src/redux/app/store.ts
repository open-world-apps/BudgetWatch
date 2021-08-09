import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import BalanceReducer from '../reducers/accountSlice';
import BudgetReducer from '../reducers/budgetSlice';

const store = configureStore({
  reducer: {
    account: BalanceReducer,
    budget: BudgetReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
