import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components'
import Header from './Header';

test('Header is styled', () => {
  const wrapper = mount(<Header  />);
  expect(wrapper).toHaveStyleRule('text-align', 'center');
});
