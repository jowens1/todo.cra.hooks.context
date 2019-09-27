import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components'
import Button from './Button';

describe('Button', () => {
  test('should have styles applied', () => {
    const wrapper = mount(<Button />);
    expect(wrapper).toHaveStyleRule('width', '20%');
  })
});
