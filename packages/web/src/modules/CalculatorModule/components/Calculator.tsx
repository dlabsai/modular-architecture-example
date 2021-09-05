import React, { Fragment } from 'react';
import { calculateWBT } from '@wbt/core/dist/modules/CalculatorModule/services/FatProteinService';
import { CalculatorControls } from './CalculatorControls';
import { CalculatorFields } from './CalculatorFields';
import { CalculatorResult } from './CalculatorResult';

export const Calculator = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    calculateWBT();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <CalculatorFields />
        <CalculatorControls />
      </form>
      <CalculatorResult />
    </Fragment>
  );
};
