import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import * as actions from "./store/task/actions";
import configureStore from "./store/store";

const store = configureStore();

const App = (params) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const completeTask = (taskId) => {
    store.dispatch(actions.taskComplete(taskId));
  };
  const changeTitle = (taskId) => {
    store.dispatch(actions.titleChange(taskId));
  };
  const deleteTask = (taskId) => {
    store.dispatch(actions.taskDelete(taskId));
  };

  return (
    <>
      <h1>App</h1>

      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title} </p>
            <p>{`Completed: ${el.completed}`} </p>
            <button onClick={() => completeTask(el.id)}>Completed</button>
            <button onClick={() => changeTitle(el.id)}>Change title</button>
            <button onClick={() => deleteTask(el.id)}>Delete task</button>         
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
