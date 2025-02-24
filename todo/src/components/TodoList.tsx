interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
  }
  
  const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }: TodoListProps) => {
    return (
      <div className="max-w-2xl mx-auto">
        {todos.map(todo => (
          <div key={todo.id} className="flex justify-between items-center bg-white shadow-md p-4 mb-2 rounded-lg">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2"
            />
            <span className={`flex-1 ${todo.completed ? "line-through text-gray-500" : ""}`}>
              {todo.text}
            </span>
            <button onClick={() => {
              const newText = prompt("Edit todo:", todo.text);
              if (newText) editTodo(todo.id, newText);
            }} className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2">
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg">
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default TodoList;
  