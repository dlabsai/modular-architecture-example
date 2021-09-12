import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 10px;
`;

const StyledInput = styled.input`
  margin-left: 0;
`;

interface Props {
  id: string;
  label: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

export const Checkbox: FC<Props> = ({
  id,
  label,
  onChange: handleOnChange,
  isChecked
}) => (
  <Container>
    <StyledInput
      type="checkbox"
      id={id}
      checked={isChecked}
      onChange={({ target }) => {
        handleOnChange(target.checked);
      }}
    ></StyledInput>
    <label htmlFor={id}>{label}</label>
  </Container>
);
