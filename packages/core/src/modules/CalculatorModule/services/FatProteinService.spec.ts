import { store } from '../../AppModule/store/Store';
import {
  calculateFPU,
  resetCalculator,
  setFatsValue,
  setIsForPortion,
  setPortionValue,
  setProteinsValue,
} from './FatProteinService';

describe('CalculatorModule/FatProteinService', () => {
  beforeEach(() => {
    resetCalculator();
  });

  it('calculate FPU based on protein and fat intake and set it in the store', () => {
    const fatsInGrams = '13';
    const proteinsInGrams = '7';

    setFatsValue(fatsInGrams);
    setProteinsValue(proteinsInGrams);
    const initialValue = store.getState().result;
    calculateFPU();
    const newValue = store.getState().result;

    expect(typeof initialValue).toBe('number');
    expect(initialValue).toEqual(0);
    expect(typeof newValue).toBe('number');
    expect(newValue).toEqual(1.45);
  });

  it('calculate FPU based on protein, fat intake and portion size and set it in the store', () => {
    const fatsInGrams = '13';
    const proteinsInGrams = '7';
    const portionInGrams = '110';

    setFatsValue(fatsInGrams);
    setProteinsValue(proteinsInGrams);
    setPortionValue(portionInGrams);
    setIsForPortion(true);
    const initialValue = store.getState().result;
    calculateFPU();
    const newValue = store.getState().result;

    expect(typeof initialValue).toBe('number');
    expect(initialValue).toEqual(0);
    expect(typeof newValue).toBe('number');
    expect(newValue).toEqual(1.6);
  });

  it('reset FPU value to 0 in the store', () => {
    const fatsInGrams = '13';
    const proteinsInGrams = '7';

    setFatsValue(fatsInGrams);
    setProteinsValue(proteinsInGrams);
    calculateFPU();
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
    setFatsValue(fatsInGrams);
    setProteinsValue(proteinsInGrams);
    const updatedFats = store.getState().fatsInGrams;
    const updatedProteins = store.getState().proteinsInGrams;

    expect(initialFats).toEqual(0);
    expect(initialProteins).toEqual(0);
    expect(updatedFats).toEqual(13);
    expect(updatedProteins).toEqual(7);
  });

  it('not set fats and proteins basend on a string that cannot be casted to number', () => {
    const invalidNumber = 'invalid number';

    const initialFats = store.getState().fatsInGrams;
    const initialProteins = store.getState().fatsInGrams;
    const initialPortion = store.getState().portionInGrams;
    setFatsValue(invalidNumber);
    setProteinsValue(invalidNumber);
    setPortionValue(invalidNumber);
    const updatedFats = store.getState().fatsInGrams;
    const updatedProteins = store.getState().proteinsInGrams;
    const updatedPortion = store.getState().portionInGrams;

    expect(initialFats).toEqual(0);
    expect(initialProteins).toEqual(0);
    expect(initialPortion).toEqual(0);
    expect(updatedFats).toEqual(0);
    expect(updatedProteins).toEqual(0);
    expect(updatedPortion).toEqual(0);
  });
});
