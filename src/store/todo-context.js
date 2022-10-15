import { createContext, useReducer, useState } from 'react';

const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [tasks, setTasks] = useState(['first', 'second']);
  const addTaskHandler = (e) => {
    e.preventDefault();
    const inputEl = e.target.querySelector('input');
    setTasks([...tasks, inputEl.value]);
    // RESETS INPUT FIELD AFTER SUBMISSION //
    inputEl.value = '';
  };
  const completeTaskHandler = () => {
    console.log(`task completed `);
  };
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
