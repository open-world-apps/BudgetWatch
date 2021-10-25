import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import BalanceReducer from '../reducers/accountSlice';
import BudgetReducer from '../reducers/budgetSlice';
import SetupReducer from '../reducers/setupModalSlice';

const store = configureStore({
  reducer: {
    account: BalanceReducer,
    budget: BudgetReducer,
    setup: SetupReducer,
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
