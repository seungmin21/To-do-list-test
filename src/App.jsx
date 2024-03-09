import './App.css';
import React from 'react';
import { AppProvider } from './AppContext';
import TodoList from './TodoList';

function App() {
  return (
    <AppProvider>
      <div>
        <h1>To Do List</h1>
        <TodoList />
      </div>
    </AppProvider>
  );
}

export default App;
