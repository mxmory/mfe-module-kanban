import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_kanban-dev-root');

  if (devRoot) {
    console.log('Isolated mount')
    mount(devRoot);
  }
}

export { mount };