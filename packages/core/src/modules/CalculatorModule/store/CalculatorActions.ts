import { Draft, PayloadAction } from '@reduxjs/toolkit';
import initialState from '../constants/InitialCalculatorState';

export function setCalculationResult(
  state: Draft<typeof initialState>,
  action: PayloadAction<number>
): void {
  state.result = action.payload;
}

export function setFats(
  state: Draft<typeof initialState>,
  action: PayloadAction<number>
) {
  state.fatsInGrams = action.payload;
}

export function setProteins(
  state: Draft<typeof initialState>,
  action: PayloadAction<number>
) {
  state.proteinsInGrams = action.payload;
}

export function resetCalculator(state: Draft<typeof initialState>): void {
  state.fatsInGrams = 0;
  state.proteinsInGrams = 0;
  state.result = 0;
}
