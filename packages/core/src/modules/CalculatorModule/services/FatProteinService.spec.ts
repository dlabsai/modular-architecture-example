import { store } from '../../AppModule/store/Store';
import { calculateWBT, resetCalculator } from './FatProteinService';

describe('CalculatorModule/FatProteinService', () => {
  it('calculate WBT based on protein and fat intake and set it in the store', () => {
    const fatsInGrams = 13;
    const proteinsInGrams = 7;
    const initialValue = store.getState().result;

    store.dispatch(() => calculateWBT(fatsInGrams, proteinsInGrams));
    const newValue = store.getState().result;

    expect(typeof initialValue).toBe('number');
    expect(initialValue).toEqual(0);
    expect(typeof newValue).toBe('number');
    expect(newValue).toEqual(1.45);
  });

  it('reset WBT value to 0 in the store', () => {
    const fatsInGrams = 13;
    const proteinsInGrams = 7;

    store.dispatch(() => calculateWBT(fatsInGrams, proteinsInGrams));
    const initialValue = store.getState().result;
    store.dispatch(resetCalculator);
    const newValue = store.getState().result;

    expect(typeof initialValue).toBe('number');
    expect(initialValue).toEqual(1.45);
    expect(typeof newValue).toBe('number');
    expect(newValue).toEqual(0);
  });
});
