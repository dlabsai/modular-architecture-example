import React from 'react';
import { RootState } from '@wbt/core/dist/modules/AppModule/store/Store';
import { StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  result: {
    fontSize: 16,
  },
});

export const CalculatorResult = () => {
  const result = useSelector((state: RootState) => state.result);
  if (result === 0) {
    return null;
  }
  return <Text style={styles.result}>Result: {result}</Text>;
};
