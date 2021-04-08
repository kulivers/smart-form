import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Header from "./Header";

const App = () => {
  return (
    <div className = 'App'>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/Step2" component={Step2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
