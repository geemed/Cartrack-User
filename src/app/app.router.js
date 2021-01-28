import React from "react";
import { Router, Route } from "react-router-dom";

import History from "./app.history";
import User from "app-component/user/user";

const Routes = () => {
  return (
    <Router history={History}>
      <Route path="/">
        <User />
      </Route>
    </Router>
  )
}

export default Routes;