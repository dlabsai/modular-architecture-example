import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@wbt/core/dist/modules/AppModule/store/Store';
import {
  setFatsValue,
  setIsForPortion,
  setPortionValue,
  setProteinsValue,
} from '@wbt/core/dist/modules/CalculatorModule/services/FatProteinService';
import { Checkbox, TextInput } from '../../../ui/Inputs';

export const CalculatorFields = () => {
  const {
    fatsInGrams,
    isCalculationForPortion,
    portionInGrams,
    proteinsInGrams,
  } = useSelector((state: RootState) => state);

  return (
    <Fragment>
      <Checkbox
        label="Calculate for portion"
        onChange={setIsForPortion}
        isChecked={isCalculationForPortion}
      />
      {isCalculationForPortion && (
        <TextInput
          label="Portion [g]"
          onChange={setPortionValue}
          value={portionInGrams}
          keyboardType="numeric"
        />
      )}
      <TextInput
        label="Proteins [g]"
        onChange={setProteinsValue}
        value={proteinsInGrams}
        keyboardType="numeric"
      />
      <TextInput
        label="Fats [g]"
        onChange={setFatsValue}
        value={fatsInGrams}
        keyboardType="numeric"
      />
    </Fragment>
  );
};
