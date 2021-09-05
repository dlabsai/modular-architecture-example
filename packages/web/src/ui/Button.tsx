import { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 0 5px;
`;

interface Props {
  children: string;
  onClick?: () => void;
  type?: 'submit' | 'button';
}

export const Button: FC<Props> = ({
  children,
  type = 'button',
  onClick: handleOnClick,
}) => {
  return (
    <StyledButton onClick={handleOnClick} type={type}>
      {children}
    </StyledButton>
  );
};
