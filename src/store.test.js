import React from 'react';
import { shallow } from 'enzyme';
import { ContextTodoListProvider } from './store';

test('Mount provider ', () => {
  const providerWrapper = shallow(<ContextTodoListProvider />);
  expect(providerWrapper.find('[value]').length).toBe(1);
});
