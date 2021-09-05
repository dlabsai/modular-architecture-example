import React from 'react';
import {Text, View} from 'react-native';
import {Calculator} from '../components/Calculator';

export const FPUView = () => {
  return (
    <View>
      <Text>Calculate FPU (fat and protein)</Text>
      <Calculator />
    </View>
  );
};
