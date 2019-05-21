import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import * as keys from "./storage/storageKey";

window.todoStorage = {
  uid: 0,
  fetchTodos: function() {
    try {
      const serializedState = localStorage.getItem(keys.KEY_MEIRI_TODOS);
      if (serializedState === null) {
        return undefined;
      }

      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  },
  saveTodos: function(todos) {
    try {
      const serializedTodos = JSON.stringify(todos);
      localStorage.setItem(keys.KEY_MEIRI_TODOS, serializedTodos);
    } catch (err) {
      // ignore write errors
    }
  },
  fetchTodoLogs: function() {
    try {
      const logs = localStorage.getItem(keys.KEY_MEIRI_LOGS);
      if (logs === null) {
        return {};
      }

      return JSON.parse(logs);
    } catch (err) {
      return undefined;
    }
  },
  saveTodoLogs: function(logs) {
    try {
      localStorage.setItem(keys.KEY_MEIRI_LOGS, JSON.stringify(logs));
    } catch (err) {
      // ignore write erros
    }
  },
  saveCurrentDate: function(dateString) {
    try {
      localStorage.setItem(keys.KEY_MEIRI_CURRENT_DATE, dateString);
    } catch (err) {
      // ignore write errors
    }
  },
  fetchCurrentDate: function() {
    try {
      return localStorage.getItem(keys.KEY_MEIRI_CURRENT_DATE);
    } catch (err) {
      return undefined;
    }
  }
};

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
