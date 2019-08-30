import React from 'react';
import { shallow } from 'enzyme';
import * as TodoContext from '../../store';
import Todo from './Todo';

const contextValues = { dispatch: jest.fn() };

const todoWithItems = {
  items: [
    {
      stuff: 'things',
      id: '1',
    },
    {
      stuff: 'things',
      id: '2',
    },
  ],
};

const todoWithoutItems = {
  items: [],
};

const setup = todo => shallow(<Todo {...todo} />);

jest
  .spyOn(TodoContext, 'useTodoListContext')
  .mockImplementation(() => contextValues);

describe('Todo', () => {
  describe('todoItems', () => {
    const wrapperWithItems = setup(todoWithItems);
    const wrapperWithoutItems = setup(todoWithoutItems);

    test('todoItems renders with items', () => {
      expect(wrapperWithItems.find('[className="item"]').length).toBe(1);
    });

    test('itemsContainer renders', () => {
      expect(wrapperWithItems.find('[className="itemsContainer"]').length).toBe(1);
    });

    test('itemsTop rends', () => {
      expect(wrapperWithItems.find('[className="item itemTop"]'));
    });

    test('todo does not render without items', () => {
      expect(wrapperWithoutItems.find('[className="item itemTop"]').length).toBe(0);
    });
  });
});
