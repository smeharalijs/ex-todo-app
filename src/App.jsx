import { useState, useRef } from "react";

function App() {
  const userInput = useRef();
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    console.log(userInput.current.value);
    todo.push(userInput.current.value);
    setTodo([...todo]);
    console.log(todo);
    userInput.current.value = "";
  };

  const deleteTodo = (index) => {
    console.log("todo deleted", index);
    todo.splice(index, 1);
    setTodo([...todo]);
  };

  const editTodo = (index) => {
    const updatedValue = prompt("enter value here");
    console.log("todo edit", index);
    todo.splice(index, 1, updatedValue);
    setTodo([...todo]);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">React Todo App</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter todo"
            ref={userInput}
            className="border border-gray-300 p-2 mr-2 rounded"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Todo
          </button>
        </div>
        <ul className="list-disc pl-96 ">
          {todo.map((item, index) => (
            <li key={index} className="mb-2 flex items-center">
              <span className="mr-4">{item}</span>
              <button
                onClick={() => editTodo(index)}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
