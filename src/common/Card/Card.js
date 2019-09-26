import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
display: flex;
justify-content: center;
flex-flow: column;
width: 200px;
height: 200px;
margin: 0 auto;
border: 2px solid #000;
border-radius: 20px;
background: #eee;

h2 {
  font-size: 30px;
}
`;

const Card = props => (
  <StyledCard>
    <h2>{props.title}</h2>
  </StyledCard>
);

export default Card;
