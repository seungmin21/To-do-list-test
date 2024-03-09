// TodoList.js
import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';

const TodoList = () => {
  const { state, dispatch } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          id: Math.floor(Math.random() * 1000),
          text: inputValue,
          completed: false,
        },
      });
      setInputValue('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add new todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                dispatch({
                  type: 'TOGGLE_TODO',
                  payload: todo.id,
                })
              }
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({
                  type: 'REMOVE_TODO',
                  payload: todo.id,
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
