import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  margin-top: 3px;
`;

interface Props {
  id: string;
  label: string;
  value: number | string;
  onChange: (value: string) => void;
  type?: 'number' | 'text';
}

export const TextNumberInput: FC<Props> = ({
  id,
  label,
  onChange: handleOnChange,
  value,
  type = 'text',
}) => (
  <Container>
    <label htmlFor={id}>{label}</label>
    <StyledInput
      type={type}
      id={id}
      value={value}
      onChange={({ target }) => {
        handleOnChange(target.value);
      }}
    ></StyledInput>
  </Container>
);
