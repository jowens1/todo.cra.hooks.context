import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

test('header renders', () => {
  const header = shallow(<Header />);
  expect(header.find('h1').text()).toBe('Todo App');
});
