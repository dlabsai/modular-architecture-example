import React from 'react';
import { Container, Header } from '../../../ui';
import { Calculator } from '../components/Calculator';

export const FPUView = () => {
  return (
    <Container>
      <Header>Calculate FPU (fat and protein)</Header>
      <Calculator />
    </Container>
  );
};
