import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import Panel from "./components/panel";
import { Header } from "./components/header";
import "./style/global.css";
import "./style/animations.css";

function App() {
  return (
    <Provider store={store}>
      <div className="main-wrapper">
        <Header />
        <Panel />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
