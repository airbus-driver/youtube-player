import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
`;

const IconButton = ({ icon, ...props }) => {
  return (
    <StyledButton {...props}>
      <FontAwesomeIcon icon={icon} />
    </StyledButton>
  )
}

export default IconButton;
