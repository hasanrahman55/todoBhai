import { Provider } from "react-redux";
import { store } from "./app/store";

import Task from "./compinents/Task";
import TaskList from "./compinents/TaskList";


function App() {
 

  return (
   <Provider store={store}>
  <Task/>
  <TaskList/>
   </Provider>
  );
}

export default App;
