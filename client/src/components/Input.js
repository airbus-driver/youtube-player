import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
`;

const Input = ({ ...props }) => {
  return (
    <StyledInput {...props} />
  );
};

export default Input;
