/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Card = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 20px;
`;


export default StyledCard;
