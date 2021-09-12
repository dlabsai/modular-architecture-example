import { store } from '../../AppModule/store/Store';
import { calculatorSlice } from '../store/CalculatorSlice';
import { FPUComponents } from '../typings';

function getCalories(fpuComponents: FPUComponents): number {
  const {
    fatsInGrams,
    isCalculationForPortion,
    proteinsInGrams,
    portionInGrams,
  } = fpuComponents;
  const caloriesFromFatsAndProteins = fatsInGrams * 9 + proteinsInGrams * 4;

  if (!isCalculationForPortion) {
    return caloriesFromFatsAndProteins;
  }

  return (caloriesFromFatsAndProteins * Number(portionInGrams)) / 100;
}

function getCalculatedFPU(fpuComponents: FPUComponents): number {
  const calories = getCalories(fpuComponents);
  const fpu = Math.round((calories / 100) * 100 + Number.EPSILON) / 100;
  return fpu;
}

function setResultToStore(result: number): void {
  const { setCalculationResult } = calculatorSlice.actions;
  const action = setCalculationResult(result);
  store.dispatch(action);
}

export function setFatsValue(value: string): void {
  const fatsInGrams = Number(value);
  if (Number.isNaN(fatsInGrams)) {
    return;
  }

  const { setFats } = calculatorSlice.actions;
  const action = setFats(fatsInGrams);
  store.dispatch(action);
}

export function setProteinsValue(value: string): void {
  const proteinsInGrams = Number(value);
  if (Number.isNaN(proteinsInGrams)) {
    return;
  }

  const { setProteins } = calculatorSlice.actions;
  const action = setProteins(proteinsInGrams);
  store.dispatch(action);
}

export function setPortionValue(value: string): void {
  const portionInGrams = Number(value);
  if (Number.isNaN(portionInGrams)) {
    return;
  }

  const { setPortion } = calculatorSlice.actions;
  const action = setPortion(portionInGrams);
  store.dispatch(action);
}

export function setIsForPortion(value: boolean): void {
  const { setCalculateForPortion } = calculatorSlice.actions;
  const action = setCalculateForPortion(value);
  store.dispatch(action);
}

export function calculateFPU(): void {
  const {
    fatsInGrams,
    proteinsInGrams,
    isCalculationForPortion,
    portionInGrams,
  } = store.getState();
  const fpuComponents: FPUComponents = {
    fatsInGrams,
    proteinsInGrams,
    portionInGrams,
    isCalculationForPortion,
  };
  const fpu = getCalculatedFPU(fpuComponents);
  setResultToStore(fpu);
}

export function resetCalculator(): void {
  const { resetCalculator } = calculatorSlice.actions;
  const action = resetCalculator();
  store.dispatch(action);
}
