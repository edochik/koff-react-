import ReactDOM from "react-dom/client";
// import React from "react";
import App from "./App.jsx";
import "normalize.css";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);