import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feactures/todoSlice";
const Task = () => {
    const dispatch = useDispatch();

    const [input,setInput]  =useState('') 

    // const inputRef = useRef(null);
  
    function addNewTask() {
    //   const task = inputRef.current.value.trim();
      if (input !== "") {
        dispatch(addTodo(input));
      setInput('')
      }
    }
  
    return (
      <div className="task-component">
        <div className="add-task">
          <input
            type="text"
            placeholder="Add task here..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            // ref={inputRef}
            className="taskInput"
          />
          <button onClick={addNewTask}>Add task</button>
        </div>
      </div>
    );
  };
  
  export default Task;