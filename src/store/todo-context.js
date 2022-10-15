import { createContext, useReducer, useState } from 'react';

const TodoContext = createContext({
  tasks: [],
  onAdd: () => {},
  onRemove: () => {},
  onShow: () => {},
});

export const TodoContextProvider = (props) => {
  const tasksLocal = JSON.parse(localStorage.getItem('tasks'));
  /// update local storage and tasks array ///
  const updateLS = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  const [tasks, setTasks] = useState(tasksLocal ? tasksLocal : []);

  /////ADD TASK
  const addTaskHandler = (e) => {
    e.preventDefault();
    const inputEl = e.target.querySelector('input');
    const updatedTasks = [inputEl.value, ...tasks];
    updateLS(updatedTasks);
  };
  /////REMOVE TASK
  const removeTaskHandler = (e) => {
    e.preventDefault();
    if (tasks.length === 1) {
      setTasks([]);
    } else {
      const target = e.target.innerHTML;
      const updatedTasks = tasks.filter((task) => task != target);
      updateLS(updatedTasks);
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
