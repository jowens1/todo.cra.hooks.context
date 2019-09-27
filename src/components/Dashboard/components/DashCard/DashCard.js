import React from 'react';
import styled from 'styled-components';
import StyledCard from '../../../../common/Card/Card';

const StyledDashCard = styled(StyledCard)`
    width: 300px;
    height: 300px;
    background: #eee;

    h2 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
      }
`;

const DashCard = props => (
  <StyledDashCard>
    <h2>{props.title}</h2>
  </StyledDashCard>
);

export default DashCard;
