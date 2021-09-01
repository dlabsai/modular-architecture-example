import { createSlice } from '@reduxjs/toolkit';

import initialState from '../constants/InitialCalculatorState';
import { reducers } from './CalculatorReducers';

const SLICE_NAME = 'CALCULATOR_MODULE';

export const calculatorSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
});
