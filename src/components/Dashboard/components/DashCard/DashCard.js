import React from 'react';
import PropTypes from 'prop-types';
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

const DashCard = ({ title }) => (
  <StyledDashCard>
    <h2>{title}</h2>
  </StyledDashCard>
);

DashCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DashCard;
