import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid() , message:"Hasan",isChecked:false}],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo:(state,action)=>{
      const todo = { id: nanoid() , message:action.payload,isChecked:false}
      state.todos.push(todo)
    }
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
