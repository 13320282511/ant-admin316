import React from "react";
import {IndexRoute, Route, Router} from "dva/router";
import login from './routes/login/login';
import Home from './routes/Home';
import Layout from './routes/Layout/index'
function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="login">
        <IndexRoute component={login} />
      </Route>
      <Route path="/" component={Layout}></Route>
    </Router>
  );
}
export default RouterConfig;
