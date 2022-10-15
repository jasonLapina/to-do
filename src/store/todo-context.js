import { createContext, useReducer, useState } from 'react';

const TodoContext = createContext({
  tasks: [],
  onAdd: () => {},
  onRemove: () => {},
  onShow: () => {},
});

export const TodoContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  /////ADD TASK
  const addTaskHandler = (e) => {
    e.preventDefault();
    const inputEl = e.target.querySelector('input');
    setTasks([inputEl.value, ...tasks]);
  };
  /////REMOVE TASK
  const removeTaskHandler = (e) => {
    e.preventDefault();
    if (tasks.length === 1) {
      setTasks([]);
    } else {
      const target = e.target.innerHTML;
      const index = tasks.indexOf(target);
      const newTasks = tasks.splice(index, 1);
      setTasks(newTasks);
    }
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
