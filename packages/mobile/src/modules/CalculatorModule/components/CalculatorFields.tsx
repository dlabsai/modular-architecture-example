import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@wbt/core/dist/modules/AppModule/store/Store';
import {
  setFats,
  setProteins,
} from '@wbt/core/dist/modules/CalculatorModule/services/FatProteinService';
import { Input } from '../../../ui';

export const CalculatorFields = () => {
  const proteinsInGrams = useSelector(
    (state: RootState) => state.proteinsInGrams
  );
  const fatsInGrams = useSelector((state: RootState) => state.fatsInGrams);

  return (
    <Fragment>
      <Input
        label="Proteins [g]"
        onChange={setProteins}
        value={proteinsInGrams}
        keyboardType="numeric"
      />
      <Input
        label="Fats [g]"
        onChange={setFats}
        value={fatsInGrams}
        keyboardType="numeric"
      />
    </Fragment>
  );
};
