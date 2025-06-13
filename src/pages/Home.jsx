import { useState } from "react";
import NewTask from "../components/NewTask";
import ToDoItem from "../components/ToDoItem";
import Spinner from "../components/Spinner";

import { toast } from "react-toastify";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const addTask = async (task) => {
    setLoading(true);
    setTodos((prevTodos) => [...prevTodos, task]);
    await delay();
    setLoading(false);
    toast.success("Successfully Add!");
  };

  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  const DeleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== id));
    toast.success("Successfully Delete!");
  };

  const EditTask = (task, id) => {
    setTodos((prevTodos) => prevTodos.map((t, i) => (i === id ? task : t)));
    toast.success("Successfully Update!");
  };

  return (
    <div className="min-h-screen p-4">
      <NewTask addTask={addTask} />

      {loading ? (
        <Spinner />
      ) : (
        todos.length > 0 && (
          <ul className="bg-gray-200 rounded-md shadow-sm p-4 mt-4">
            {todos.map((todo, i) => (
              <ToDoItem
                key={i}
                id={i}
                todo={todo}
                DeleteTask={DeleteTask}
                EditTask={EditTask}
              />
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default Home;
