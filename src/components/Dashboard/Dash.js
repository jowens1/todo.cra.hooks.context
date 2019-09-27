import React, { useState } from 'react';
import Dashboard from './Dashboard';
import DashCard from './components/DashCard/DashCard';
import * as constants from '../../common/constants';

const Dash = () => {
  const [items] = useState(constants.DASHBOARD_ITEMS);
  const cards = () => items.map(item => <DashCard {...item} />);

  return (
    <Dashboard>
      {cards()}
    </Dashboard>
  );
};

export default Dash;
