import React from 'react';
import { mount } from 'enzyme';
import * as TodoContext from '../../store';
import Todo from './Todo';

const setup = todo => mount(
  <TodoContext.TodoListStore.Provider value={{ dispatch: jest.fn() }}>
    <Todo {...todo} />
  </TodoContext.TodoListStore.Provider>,
);

const todoWithItems = {
  items: [
    {
      name: 'stuff',
      id: '1',
    },
    {
      name: 'things',
      id: '2',
    },
  ],
  input: 'test',
};

const todoWithoutItems = {
  items: [],
};

describe('Todo', () => {
  describe('With Items', () => {
    const wrapperWithItems = setup({ ...todoWithItems });
    afterAll(() => {
      jest.clearAllMocks();
      wrapperWithItems.unmount();
    });

    test('should get context with items', () => {
      expect(wrapperWithItems.find('.itemsContainer').children().length).toBe(2);
    });

    test('Input thingy', () => {
      const eventObj = { target: { value: 'changed' } };
      wrapperWithItems.find('input[type="text"]').simulate('change', eventObj);
      expect(wrapperWithItems.find('input[type="text"]').prop('value')).toEqual('changed');
    });
  });
});
