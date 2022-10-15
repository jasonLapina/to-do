import { useContext } from 'react';
import TodoContext from '../store/todo-context';
import classes from '../scss/TasksList.module.scss';

const TasksList = () => {
  const ctx = useContext(TodoContext);

  return (
    <ul className={classes.tasks}>
      {ctx.tasks.map((task, i) => {
        return <li key={i}>{task}</li>;
      })}
    </ul>
  );
};

export default TasksList;
