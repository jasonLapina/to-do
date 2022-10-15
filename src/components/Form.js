import classes from '../scss/Form.module.scss';

const Form = () => {
  return (
    <form className={classes.form}>
      <input type='text' placeholder='Enter task here' />
    </form>
  );
};

export default Form;
