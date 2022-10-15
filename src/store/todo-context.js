import { createContext, useReducer, useState } from 'react';

const TodoContext = createContext({
  tasks: [],
  onAdd: () => {},
  onRemove: () => {},
  onShow: () => {},
});

export const TodoContextProvider = (props) => {
  const [tasks, setTasks] = useState(['first', 'second']);
  const addTaskHandler = (e) => {
    e.preventDefault();
    const inputEl = e.target.querySelector('input');
    setTasks([inputEl.value, ...tasks]);
  };

  const removeTaskHandler = (e) => {
    e.preventDefault();
    const newList = tasks.pop(e.target.value);
    setTasks([newList]);
  };
  return (
    <TodoContext.Provider
      value={{
        tasks: tasks,
        onAdd: addTaskHandler,
        onRemove: removeTaskHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
