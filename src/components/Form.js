import classes from '../scss/Form.module.scss';
import { useContext, useRef, useState } from 'react';
import TodoContext from '../store/todo-context';
const Form = () => {
  const ctx = useContext(TodoContext);
  const inputRef = useRef();
  const changeHandler = () => {
    setInputValue(inputRef.current.value);
  };
  const [inputValue, setInputValue] = useState('');
  return (
    <form onSubmit={ctx.onAdd} className={classes.form}>
      <input
        onChange={changeHandler}
        value={inputValue}
        ref={inputRef}
        type='text'
        placeholder='Enter task here'
      />
    </form>
  );
};

export default Form;
