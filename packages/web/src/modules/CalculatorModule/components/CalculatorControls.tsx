import styled from 'styled-components';
import { resetCalculator } from '@wbt/core/dist/modules/CalculatorModule/services/FatProteinService';
import { Button } from '../../../ui';

const Container = styled.div`
  margin: 0 -5px;
`;

export const CalculatorControls = () => {
  return (
    <Container>
      <Button type="submit">Calculate</Button>
      <Button type="button" onClick={resetCalculator}>
        Reset
      </Button>
    </Container>
  );
};
