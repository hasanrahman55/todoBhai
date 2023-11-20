import { Provider } from "react-redux";
import { store } from "./app/store";
import TodoForm from "./components/TodoForm";


function App() {
 

  return (
   <Provider store={store}>
    <TodoForm/>
   </Provider>
  );
}

export default App;
