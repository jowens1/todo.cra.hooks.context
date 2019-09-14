import React from 'react';
import { mount } from 'enzyme';
import { TodoListStore } from '../../store';
import Todo from './Todo';

const setup = todo => mount(
  <TodoListStore.Provider value={{ dispatch: jest.fn() }}>
    <Todo {...todo} />
  </TodoListStore.Provider>,
);

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');
useStateSpy.mockImplementation(init => [init, setState]);


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
      wrapperWithItems.find('input[type="text"]').simulate('change', setState('test'));
      expect(setState).toHaveBeenCalledWith('test');
    });
  });
});
