import React from 'react';
import { mount } from 'enzyme';
import { TodoListStore } from '../../store';
import Todo from './Todo';

const setup = todo => mount(
  <TodoListStore.Provider value={{ dispatch: jest.fn() }}>
    <Todo {...todo} />
  </TodoListStore.Provider>,
);


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
      wrapperWithItems.unmount();
    });
    test('should get context with items', () => {
      expect(wrapperWithItems.find('.itemsContainer').children().length).toBe(2);
    });
  });

  // describe('todoItems', () => {
  //   test('todoItems renders with items', () => {
  //     expect(wrapperWithItems.find('[className="item"]').length).toBe(1);
  //   });

  //   test('itemsContainer renders', () => {
  //     expect(wrapperWithItems.find('[className="itemsContainer"]').length).toBe(1);
  //   });

  //   test('itemsTop rends', () => {
  //     expect(wrapperWithItems.find('[className="item itemTop"]'));
  //   });

  //   test('todo does not render without items', () => {
  //     expect(wrapperWithoutItems.find('[className="item itemTop"]').length).toBe(0);
  //   });
  // });
});
