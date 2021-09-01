import React from 'react';
import { calculateWBT } from '@wbt/core/dist/modules/CalculatorModule/services/FatProteinService';
import { CalculatorControls } from './CalculatorControls';
import { CalculatorFields } from './CalculatorFields';
import { CalculatorResult } from './CalculatorResults';

export const Calculator = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /** I know, I know... Please don't hit me. This is only for the PoC purpose. */
    // @ts-expect-error
    const fats = event.target.fats.value;
    // @ts-expect-error
    const proteins = event.target.proteins.value;
    calculateWBT(fats, proteins);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CalculatorFields />
        <CalculatorControls />
      </form>
      <CalculatorResult />
    </div>
  );
};
