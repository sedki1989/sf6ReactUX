import React, {useState} from "react";

export default function AddTodo({addToDo}) {
  let [newToDo, setNewTodo] = useState('');
  let handleClick = (e) => {
    e.preventDefault();
    addToDo(newToDo);
  }
  return (
    <div className="mb-4">
      <h1 className="text-grey-darkest">Todo List</h1>
      <div className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
          value={newToDo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500"
                onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}