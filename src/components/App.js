import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Header from "./component-parts/Header";
import StepsContainer from "./component-parts/StepsContainer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <StepsContainer>
            <Route exact path="/" component={Step1}>
              <Redirect to="/step3" />
            </Route>
            <Route path="/step1" component={Step1} />
            <Route path="/Step2" component={Step2} />
            <Route path="/Step3" component={Step3} />
          </StepsContainer>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
