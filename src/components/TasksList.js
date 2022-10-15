import { useContext } from 'react';
import TodoContext from '../store/todo-context';
import classes from '../scss/TasksList.module.scss';

const TasksList = () => {
  const ctx = useContext(TodoContext);

  //////ADD STRIKETHROUGH TO TASK

  return (
    <ul className={classes.tasks}>
      {ctx.tasks.map((task, i) => {
        const style = task.completed ? classes.completed : '';
        return (
          <li
            className={style}
            onClick={ctx.onComplete}
            onContextMenu={ctx.onRemove}
            key={i}
          >
            {task.text}
          </li>
        );
      })}
    </ul>
  );
};

export default TasksList;
