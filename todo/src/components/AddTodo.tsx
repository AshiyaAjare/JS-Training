import { useState } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        className="border p-2 rounded-lg w-1/2"
        placeholder="Enter a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
