import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import VisualSearch from "./pages/visualSearch/VisualSearch";
import { trackPromise } from "react-promise-tracker";
import Detail from "./pages/detail/Detail";
import Slide from "./component/priceSlider/PriceSlider";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/search" component={VisualSearch} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/slide" component={Slide} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
