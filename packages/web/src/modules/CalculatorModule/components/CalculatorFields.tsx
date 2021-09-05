import { RootState } from '@wbt/core/dist/modules/AppModule/store/Store';
import {
  setFats,
  setProteins,
} from '@wbt/core/dist/modules/CalculatorModule/services/FatProteinService';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '../../../ui';

export const CalculatorFields = () => {
  const proteinsInGrams = useSelector(
    (state: RootState) => state.proteinsInGrams
  );
  const fatsInGrams = useSelector((state: RootState) => state.fatsInGrams);

  return (
    <Fragment>
      <Input
        id="proteins"
        label="Proteins [g]"
        onChange={setProteins}
        value={proteinsInGrams}
        type="number"
      />
      <Input
        id="fats"
        label="Fats [g]"
        onChange={setFats}
        value={fatsInGrams}
        type="number"
      />
    </Fragment>
  );
};
