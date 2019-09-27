import React from 'react';
import Card from '../../common/Card/Card';

const props = [{
  id: 0,
  title: 'Todos',
}, {
  id: 1,
  title: 'Notes',
}];

const buildCards = cards => cards.map(card => <Card {...card} />);

const Dashboard = () => (
  <div>
    {buildCards(props)}
  </div>
);
export default Dashboard;
