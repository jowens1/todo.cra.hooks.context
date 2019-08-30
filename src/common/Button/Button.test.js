import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';


const setup = props => shallow(<Button {...props} />);
const newProps = {
  handleClick: jest.fn(),
  name: 'Test',
  type: 'test',
};

describe('Button', () => {
  const wrapper = setup(newProps);

  test('Name renders', () => {
    expect(wrapper.find('[type="test"]').text()).toBe('Test');
  });

  test('Button clicks', () => {
    wrapper.find('[type="test"]').simulate('click');
    expect(newProps.handleClick.mock.calls.length).toBe(1);
  });
});
