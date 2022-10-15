import { createContext } from 'react';

const TodoContext = createContext({
  tasks: [],
  onAdd: () => {},
  onComplete: () => {},
  onRemove: () => {},
});

export const TodoContextProvider = (props) => {
  const addTaskHandler = () => {
    console.log(`task added `);
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
        tasks: ['first task', `second task`, `third task`],
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
