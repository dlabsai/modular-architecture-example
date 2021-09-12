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
): void {
  state.fatsInGrams = action.payload;
}

export function setProteins(
  state: Draft<typeof initialState>,
  action: PayloadAction<number>
): void {
  state.proteinsInGrams = action.payload;
}

export function setPortion(
  state: Draft<typeof initialState>,
  action: PayloadAction<number>
): void {
  state.portionInGrams = action.payload;
}

export function setCalculateForPortion(
  state: Draft<typeof initialState>,
  action: PayloadAction<boolean>
): void {
  state.isCalculationForPortion = action.payload;
}

export function resetCalculator(state: Draft<typeof initialState>): void {
  state.fatsInGrams = 0;
  state.proteinsInGrams = 0;
  state.portionInGrams = 0;
  state.result = 0;
}
