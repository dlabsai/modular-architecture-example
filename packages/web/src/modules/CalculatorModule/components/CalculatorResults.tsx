import { RootState } from '@wbt/core/dist/modules/AppModule/store/Store';
import { useSelector } from 'react-redux';

export const CalculatorResult = () => {
  const result = useSelector((state: RootState) => state.result);
  if (result === 0) {
    return null;
  }
  return <p>Result: {result}</p>;
};
