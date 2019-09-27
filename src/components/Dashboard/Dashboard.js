/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Dashboard = ({ className, children }) => (
  <div className={className}>
    <div className={className}>
      {children}
    </div>
  </div>
);

const StyledDashboard = styled(Dashboard)`
  display: flex;
  justify-content: center;

  div {
    padding: 15px;
  }
`;

export default StyledDashboard;
