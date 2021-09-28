import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import { App } from "./App";
import { Provider } from "./context/context";

ReactDOM.render(
    <Provider>
      <App />
    </Provider>,
  document.getElementById("root")
);
