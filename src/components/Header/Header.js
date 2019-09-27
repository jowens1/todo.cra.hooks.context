/* eslint-disable react/prop-types */
import React, { memo, useState } from 'react';
import styled from 'styled-components';

const HOCHeader = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

const StyledHeader = styled(HOCHeader)`
  text-align: center;
`;

const DumbHeader = ({ title }) => (
  <StyledHeader>
    <h1>{title}</h1>
  </StyledHeader>
);

const ConnectedHeader = () => {
  const [header] = useState('React Hooks Playground App');

  return (
    <DumbHeader title={header} />
  );
};

export default memo(ConnectedHeader);
