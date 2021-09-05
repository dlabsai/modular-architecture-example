import React, {Fragment} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  calculateWBT,
  resetCalculator,
} from '@wbt/core/dist/modules/CalculatorModule/services/FatProteinService';
export const CalculatorControls = () => (
  <Fragment>
    <TouchableOpacity
      onPress={() => {
        calculateWBT();
      }}>
      <Text>Calculate</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        resetCalculator();
      }}>
      <Text>Reset</Text>
    </TouchableOpacity>
  </Fragment>
);
