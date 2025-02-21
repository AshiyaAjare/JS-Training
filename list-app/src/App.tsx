import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTaskInput(e.target.value);

  const addTask = () => {
    if (!taskInput.trim()) return alert("Please enter a task");
    if (tasks.includes(taskInput)) return alert("Task already exists!"); // Prevent duplicates
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const deleteTask = (taskToRemove: string) =>
    setTasks(tasks.filter((task) => task !== taskToRemove));

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <div key={task}>
          <input type="checkbox" />
          {task}
          <button onClick={() => deleteTask(task)}>Delete</button>
        </div>
      ))}
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default App;
