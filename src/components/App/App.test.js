import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = () => shallow(<App />);

describe('App container', () => {
  const wrapper = setup();

  test('renders Header', () => {
    expect(wrapper.find('Memo(ConnectedHeader)').length).toBe(1);
  });
});
