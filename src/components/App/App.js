import React from 'react';
import Header from '../Header/Header';
import Dash from '../Dashboard/Dash';
import { ContextTodoListProvider } from '../../store';

const App = () => (
  <ContextTodoListProvider>
    <div>
      <Header />
      <Dash />
    </div>
  </ContextTodoListProvider>
);

export default App;
