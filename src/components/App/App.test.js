import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = () => shallow(<App />);

describe('App container', () => {
  const wrapper = setup();

  test('renders Header container', () => {
    expect(wrapper.find('Memo(Header)').length).toBe(1);
  });

  test('renders Todos container', () => {
    expect(wrapper.find('Memo(Todos)').length).toBe(1);
  });
});
