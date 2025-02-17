import {useState} from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  }

  const addTask = () => {
    const newTask = taskInput;
    if(newTask !== ''){
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
    else{
      alert('Please enter a task');
    }
  };

  const deleteTask = (indexToRemove: number) => {
    const newTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(newTasks);
  }

  return (
    
    <div>
      <h1>Task List</h1>
      { tasks.map((task, index) => {
          return <div key={index}>
            <input type="checkbox" />
            {task}
            <button onClick={() => {deleteTask(index)}}>Delete</button>
          </div>
        })
      }
      <input 
      type="text"
      value = {taskInput}
      onChange = {handleInputChange}
      placeholder = "Enter a task"
      />
      <button onClick = {addTask}>Add Task</button>
    </div>
  )
}

export default App;