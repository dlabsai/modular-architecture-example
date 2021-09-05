import { store } from '../../AppModule/store/Store';
import { calculatorSlice } from '../store/CalculatorSlice';

function getCalculatedWBT(fatsInGrams: number, proteinsInGrams: number) {
  const caloriesFromFatsAndCalories = fatsInGrams * 9 + proteinsInGrams * 4;
  const wbt =
    Math.round((caloriesFromFatsAndCalories / 100) * 100 + Number.EPSILON) /
    100;
  return wbt;
}

function setResultToStore(result: number) {
  const { setCalculationResult } = calculatorSlice.actions;
  const action = setCalculationResult(result);
  store.dispatch(action);
}

export function setFats(value: string) {
  const fatsInGrams = Number(value);
  if (Number.isNaN(fatsInGrams)) {
    return;
  }

  const { setFats } = calculatorSlice.actions;
  const action = setFats(fatsInGrams);
  store.dispatch(action);
}

export function setProteins(value: string) {
  const proteinsInGrams = Number(value);
  if (Number.isNaN(proteinsInGrams)) {
    return;
  }

  const { setProteins } = calculatorSlice.actions;
  const action = setProteins(proteinsInGrams);
  store.dispatch(action);
}

export function calculateWBT() {
  const { fatsInGrams, proteinsInGrams } = store.getState();
  const wbt = getCalculatedWBT(fatsInGrams, proteinsInGrams);
  setResultToStore(wbt);
}

export function resetCalculator() {
  const { resetCalculator } = calculatorSlice.actions;
  const action = resetCalculator();
  store.dispatch(action);
}
