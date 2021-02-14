import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/ui/Header";
import LandingPage from "../src/pages/LandingPage.js";
import SignUp from "../src/pages/SignUp";
import SignIn from "../src/pages/SignIn";

import theme from "./components/ui/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
