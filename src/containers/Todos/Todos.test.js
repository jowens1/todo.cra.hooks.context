import React from 'react';
import { shallow } from 'enzyme';
import Todos from './Todos';
import * as TodoContext from '../../store';

const setup = props => shallow(<Todos {...props} />);
const contextValues = { dispatch: jest.fn() };

jest
  .spyOn(TodoContext, 'useTodoListContext')
  .mockImplementation(() => contextValues);

describe('Todos', () => {
  const newProps = {
    handleClick: jest.fn(),
  };
  const wrapper = setup(newProps);
  test('Todos renders', () => {

  });
});
