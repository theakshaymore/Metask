import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import AddTask from "./core/AddTask";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/task" exact component={AddTask}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
