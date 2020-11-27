import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from './components/user/LandingPage/LandingPage'
import LoginPage from './components/user/LoginPage/LoginPage'
import RegisterPage from './components/user/RegisterPage/RegisterPage'
import AdminPage from './admin/pages/AdminPage/AdminPage'
import Auth from './hoc/auth'

function App() {
  return (
    <Router>
    <div>
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/admin" component={Auth(AdminPage, null)} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
