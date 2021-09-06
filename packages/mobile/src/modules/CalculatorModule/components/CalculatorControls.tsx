import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {
  calculateFPU,
  resetCalculator,
} from '@wbt/core/dist/modules/CalculatorModule/services/FatProteinService';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
});

export const CalculatorControls = () => (
  <View style={styles.view}>
    <Button
      onPress={calculateFPU}
      title="Calculate"
      accessibilityLabel="Calculate FPU"
    />
    <Button
      onPress={resetCalculator}
      title="Reset"
      accessibilityLabel="Reset calculator"
    />
  </View>
);
