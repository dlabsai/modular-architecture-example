import { store } from '../../AppModule/store/Store';
import {
  calculateWBT,
  resetCalculator,
  setFats,
  setProteins,
} from './FatProteinService';

describe('CalculatorModule/FatProteinService', () => {
  beforeEach(() => {
    resetCalculator();
  });

  it('calculate WBT based on protein and fat intake and set it in the store', () => {
    const fatsInGrams = '13';
    const proteinsInGrams = '7';

    setFats(fatsInGrams);
    setProteins(proteinsInGrams);
    const initialValue = store.getState().result;
    calculateWBT();
    const newValue = store.getState().result;

    expect(typeof initialValue).toBe('number');
    expect(initialValue).toEqual(0);
    expect(typeof newValue).toBe('number');
    expect(newValue).toEqual(1.45);
  });

  it('reset WBT value to 0 in the store', () => {
    const fatsInGrams = '13';
    const proteinsInGrams = '7';

    setFats(fatsInGrams);
    setProteins(proteinsInGrams);
    calculateWBT();
    const initialValue = store.getState().result;
    resetCalculator();
    const newValue = store.getState().result;

    expect(typeof initialValue).toBe('number');
    expect(initialValue).toEqual(1.45);
    expect(typeof newValue).toBe('number');
    expect(newValue).toEqual(0);
  });

  it('set fats and proteins basend on a string that can be casted to number', () => {
    const fatsInGrams = '13';
    const proteinsInGrams = '7';

    const initialFats = store.getState().fatsInGrams;
    const initialProteins = store.getState().fatsInGrams;
    setFats(fatsInGrams);
    setProteins(proteinsInGrams);
    const updatedFats = store.getState().fatsInGrams;
    const updatedProteins = store.getState().proteinsInGrams;

    expect(initialFats).toEqual(0);
    expect(initialProteins).toEqual(0);
    expect(updatedFats).toEqual(13);
    expect(updatedProteins).toEqual(7);
  });

  it('not set fats and proteins basend on a string that cannot be casted to number', () => {
    const fatsInGrams = 'invalid number';
    const proteinsInGrams = 'invalid number also';

    const initialFats = store.getState().fatsInGrams;
    const initialProteins = store.getState().fatsInGrams;
    setFats(fatsInGrams);
    setProteins(proteinsInGrams);
    const updatedFats = store.getState().fatsInGrams;
    const updatedProteins = store.getState().proteinsInGrams;

    expect(initialFats).toEqual(0);
    expect(initialProteins).toEqual(0);
    expect(updatedFats).toEqual(0);
    expect(updatedProteins).toEqual(0);
  });
});
