import { Provider } from "react-redux";
import { store } from "./app/store";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";


function App() {
 

  return (
   <Provider store={store}>
    <TodoForm/>
    <Todos/>
   </Provider>
  );
}

export default App;
