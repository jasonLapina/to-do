import { createContext, useReducer, useState } from 'react';

const TodoContext = createContext({
  tasks: [],
  onAdd: () => {},
  onRemove: () => {},
  onComplete: () => {},
  onShow: () => {},
});

export const TodoContextProvider = (props) => {
  const [tasks, setTasks] = useState(['first', 'second']);
  const addTaskHandler = (e) => {
    e.preventDefault();
    const inputEl = e.target.querySelector('input');
    setTasks([inputEl.value, ...tasks]);
  };
  const completeTaskHandler = (e) => {};
  const removeTaskHandler = () => {
    console.log(`task removed `);
  };
  return (
    <TodoContext.Provider
      value={{
        tasks: tasks,
        onAdd: addTaskHandler,
        onComplete: completeTaskHandler,
        onRemove: removeTaskHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
