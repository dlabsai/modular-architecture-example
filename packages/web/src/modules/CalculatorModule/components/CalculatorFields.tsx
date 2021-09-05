import { RootState } from '@wbt/core/dist/modules/AppModule/store/Store';
import {
  setFats,
  setProteins,
} from '@wbt/core/dist/modules/CalculatorModule/services/FatProteinService';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

export const CalculatorFields = () => {
  const proteinsInGrams = useSelector(
    (state: RootState) => state.proteinsInGrams
  );
  const fatsInGrams = useSelector((state: RootState) => state.fatsInGrams);

  return (
    <Fragment>
      <div>
        <label htmlFor="proteins">Proteins [g]</label>
        <input
          type="number"
          id="proteins"
          name="proteins"
          value={proteinsInGrams}
          onChange={({ target }) => {
            setProteins(target.value);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor="fats">Fats [g]</label>
        <input
          type="number"
          id="fats"
          name="fats"
          value={fatsInGrams}
          onChange={({ target }) => {
            setFats(target.value);
          }}
        ></input>
      </div>
    </Fragment>
  );
};
