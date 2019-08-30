import React from 'react';
import { shallow } from 'enzyme';
import { ContextTodoListProvider, ContextTodoListConsumer } from './store';

test('Mount provider ', () => {
  const providerWrapper = shallow(<ContextTodoListProvider />);
  expect(providerWrapper.find('[value]').length).toBe(1);
});


test('Mount consumer', () => {
  const consumerWrapper = shallow(<ContextTodoListConsumer />);
  expect(consumerWrapper.find('[data-test="todoListConsumer"]').length).toBe(1);
});
