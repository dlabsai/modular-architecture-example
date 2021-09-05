import {RootState} from '@wbt/core/dist/modules/AppModule/store/Store';
import {
  setFats,
  setProteins,
} from '@wbt/core/dist/modules/CalculatorModule/services/FatProteinService';
import React, {Fragment} from 'react';
import {Text, TextInput} from 'react-native';
import {useSelector} from 'react-redux';

export const CalculatorFields = () => {
  const proteinsInGrams = useSelector(
    (state: RootState) => state.proteinsInGrams,
  );
  const fatsInGrams = useSelector((state: RootState) => state.fatsInGrams);
  return (
    <Fragment>
      <Text>Proteins [g]</Text>
      <TextInput
        /* style={styles.input} */
        onChangeText={value => setProteins(value)}
        value={proteinsInGrams.toString()}
        placeholder="Proteins in grams"
        keyboardType="numeric"
      />
      <Text>Fats [g]</Text>
      <TextInput
        /* style={styles.input} */
        onChangeText={value => setFats(value)}
        value={fatsInGrams.toString()}
        placeholder="Fats in grams"
        keyboardType="numeric"
      />
    </Fragment>
  );
};
