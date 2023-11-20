import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id:1, message:"Hasan"}],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoItem:(state,action)=>{
      const todo = { id: nanoid() , message:action.payload}
      state.todos.push(todo)
    }
  },
});

export const {addTodoItem} = todoSlice.actions;

export default todoSlice.reducer;
