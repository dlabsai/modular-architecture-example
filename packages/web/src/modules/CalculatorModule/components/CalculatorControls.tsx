import { Fragment } from 'react';
import { resetCalculator } from '@wbt/core/dist/modules/CalculatorModule/services/FatProteinService';

export const CalculatorControls = () => {
  return (
    <Fragment>
      <button type="submit">calculate</button>
      <button type="button" onClick={resetCalculator}>
        Reset
      </button>
    </Fragment>
  );
};
