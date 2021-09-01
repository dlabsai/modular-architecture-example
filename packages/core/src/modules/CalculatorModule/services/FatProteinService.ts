import { store } from '../../AppModule/store/Store';
import { calculatorSlice } from '../store/CalculatorSlice';

function getCalculatedWBT(fatsInGrams: number, proteinsInGrams: number) {
  const caloriesFromFatsAndCalories = fatsInGrams * 9 + proteinsInGrams * 4;
  const wbt =
    Math.round((caloriesFromFatsAndCalories / 100) * 100 + Number.EPSILON) /
    100;
  return wbt;
}

export function calculateWBT(fatsInGrams: number, proteinsInGrams: number) {
  const wbt = getCalculatedWBT(fatsInGrams, proteinsInGrams);
  const { setWBT } = calculatorSlice.actions;
  store.dispatch(setWBT(wbt));
}

export function resetCalculator() {
  const { resetWBT } = calculatorSlice.actions;
  store.dispatch(resetWBT());
}
