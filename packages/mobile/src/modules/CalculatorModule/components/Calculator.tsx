import React from 'react';
import { View } from 'react-native';

import { CalculatorControls } from './CalculatorControls';
import { CalculatorFields } from './CalculatorFields';
import { CalculatorResult } from './CalculatorResult';

export const Calculator = () => {
  return (
    <View>
      <CalculatorFields />
      <CalculatorControls />
      <CalculatorResult />
    </View>
  );
};
