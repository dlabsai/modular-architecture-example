import { configureStore } from '@reduxjs/toolkit';
import { calculatorSlice } from '../../CalculatorModule/store/CalculatorSlice';

export const store = configureStore({
  reducer: calculatorSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
