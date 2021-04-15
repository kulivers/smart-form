import CloudinaryFileUploader from "./just playground/CloudinaryPlayground";
import Step3 from "./components/Step3";
import MyStep3 from "./components/MyStep3";
import Playground from "./just playground/CssDisplayPlayground";
import Telephone from "./components/component-parts/Telephone";
///////////////////////////////DELETE UPPER////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { DataProvider } from "./DataContext";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
