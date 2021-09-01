import { Draft, PayloadAction } from '@reduxjs/toolkit';
import initialState from '../constants/InitialCalculatorState';

export const reducers = {
  setWBT: (
    state: Draft<typeof initialState>,
    action: PayloadAction<number>
  ): void => {
    state.result = action.payload;
  },
  resetWBT: (state: Draft<typeof initialState>): void => {
    state.result = 0;
  },
};
