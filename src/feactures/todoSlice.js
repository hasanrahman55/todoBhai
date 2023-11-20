import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
  },
  reducers:{
    addTodo:(state,action)=>{
        const todo ={
            id:Date.now(),
            text:action.payload
        }

        state.tasks.push(todo)

    },

    deleteTodo: (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      },
  }
});


export const {addTodo,deleteTodo}=todoSlice.actions;

export default  todoSlice.reducer