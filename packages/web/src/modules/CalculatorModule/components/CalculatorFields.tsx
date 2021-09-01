import { Fragment } from 'react';

export const CalculatorFields = () => {
  return (
    <Fragment>
      <div>
        <label htmlFor="proteins">Proteins [g]</label>
        <input
          type="number"
          id="proteins"
          name="proteins"
          defaultValue={0}
        ></input>
      </div>
      <div>
        <label htmlFor="fats">Fats [g]</label>
        <input type="number" id="fats" name="fats" defaultValue={0}></input>
      </div>
    </Fragment>
  );
};
