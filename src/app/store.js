import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feactures/todoSlice'


// export const store = configureStore({
//     reducer: {todoReducer}

// })
export const store = configureStore({
    reducer: {todo: todoReducer,},
  })


