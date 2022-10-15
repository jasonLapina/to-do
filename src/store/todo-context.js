import { click } from '@testing-library/user-event/dist/click';
import { createContext, useReducer, useState } from 'react';

const TodoContext = createContext({
  tasks: [],
  onAdd: () => {},
  onRemove: () => {},
  onComplete: () => {},
  onShow: () => {},
});

export const TodoContextProvider = (props) => {
  const tasksLocal = JSON.parse(localStorage.getItem('tasks'));

  /////////// UPDATE LOCAL STORAGE AND TASKS ARRAY //////////
  const updateLS = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  const [tasks, setTasks] = useState(tasksLocal ? tasksLocal : []);

  /////ADD TASK
  const addTaskHandler = (e) => {
    e.preventDefault();
    const inputEl = e.target.querySelector('input');
    if (inputEl.value.trim().length == 0) return;
    const updatedTasks = [{ text: inputEl.value, completed: false }, ...tasks];
    updateLS(updatedTasks);
  };

  /////REMOVE TASK
  const removeTaskHandler = (e) => {
    e.preventDefault();
    const text = e.target.innerHTML;
    const updatedTasks = tasks.filter((entry) => entry.text !== text);
    updateLS(updatedTasks);
  };

  const completeTaskHandler = (e) => {
    const text = e.target.innerHTML;
    const index = tasks.map((entry) => entry.text).indexOf(text);
    tasks[index].completed = !tasks[index].completed;

    const updatedTasks = [...tasks];
    updateLS(updatedTasks);
  };
  return (
    <TodoContext.Provider
      value={{
        tasks: tasks,
        onAdd: addTaskHandler,
        onRemove: removeTaskHandler,
        onComplete: completeTaskHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
