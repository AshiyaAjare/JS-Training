import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  if (!auth) return null; // Ensure auth is not null

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the TODO App</h1>
      <button
        onClick={() => {
          auth.login();
          navigate("/todo"); // Navigate to the protected route
        }}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Login to Continue
      </button>
    </div>
  );
}
