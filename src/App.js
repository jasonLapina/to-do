import './App.scss';
import Form from './components/Form';
import TasksList from './components/TasksList';

function App() {
  return (
    <main className='container'>
      <h1>to do ✅</h1>
      <Form />
      <TasksList />
      <small className='small'>
        Left click to mark as completed. Right click to delete task
      </small>
    </main>
  );
}

export default App;
