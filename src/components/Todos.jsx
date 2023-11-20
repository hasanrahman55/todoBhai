import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <>
     <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.message}</div>
        
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
