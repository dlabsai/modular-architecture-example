import { RootState } from '@wbt/core/dist/modules/AppModule/store/Store';
import {
  setFatsValue,
  setProteinsValue,
  setPortionValue,
  setIsForPortion,
} from '@wbt/core/dist/modules/CalculatorModule/services/FatProteinService';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { TextNumberInput, Checkbox } from '../../../ui/Inputs';

export const CalculatorFields = () => {
  const { fatsInGrams, isCalculationForPortion, portionInGrams, proteinsInGrams } =
    useSelector((state: RootState) => state);

  return (
    <Fragment>
      <Checkbox
        id="portion"
        label="Calculate for portion"
        onChange={setIsForPortion}
        isChecked={isCalculationForPortion}
      />
      {isCalculationForPortion && (
        <TextNumberInput
          id="portion"
          label="Portion [g]"
          onChange={setPortionValue}
          value={portionInGrams}
          type="number"
        />
      )}
      <TextNumberInput
        id="proteins"
        label="Proteins [g]"
        onChange={setProteinsValue}
        value={proteinsInGrams}
        type="number"
      />
      <TextNumberInput
        id="fats"
        label="Fats [g]"
        onChange={setFatsValue}
        value={fatsInGrams}
        type="number"
      />
    </Fragment>
  );
};
