import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import { App } from "./App";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <SpeechProvider appId="94b3f41a-8abe-4179-af8e-7ed856959f27" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
