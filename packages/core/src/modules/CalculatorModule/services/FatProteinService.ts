import { store } from '../../AppModule/store/Store';
import { calculatorSlice } from '../store/CalculatorSlice';

function getCalculatedFPU(
  fatsInGrams: number,
  proteinsInGrams: number
): number {
  const caloriesFromFatsAndCalories = fatsInGrams * 9 + proteinsInGrams * 4;
  const wbt =
    Math.round((caloriesFromFatsAndCalories / 100) * 100 + Number.EPSILON) /
    100;
  return wbt;
}

function setResultToStore(result: number): void {
  const { setCalculationResult } = calculatorSlice.actions;
  const action = setCalculationResult(result);
  store.dispatch(action);
}

export function setFats(value: string): void {
  const fatsInGrams = Number(value);
  if (Number.isNaN(fatsInGrams)) {
    return;
  }

  const { setFats } = calculatorSlice.actions;
  const action = setFats(fatsInGrams);
  store.dispatch(action);
}

export function setProteins(value: string): void {
  const proteinsInGrams = Number(value);
  if (Number.isNaN(proteinsInGrams)) {
    return;
  }

  const { setProteins } = calculatorSlice.actions;
  const action = setProteins(proteinsInGrams);
  store.dispatch(action);
}

export function calculateFPU(): void {
  const { fatsInGrams, proteinsInGrams } = store.getState();
  const wbt = getCalculatedFPU(fatsInGrams, proteinsInGrams);
  setResultToStore(wbt);
}

export function resetCalculator(): void {
  const { resetCalculator } = calculatorSlice.actions;
  const action = resetCalculator();
  store.dispatch(action);
}
