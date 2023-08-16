import React from "react";
import "./App.css";
import Router from "./Router";
import { Provider } from "react-redux";
import Store from "./Components/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="main-page">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
