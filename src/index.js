import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandPage from './LandPage';
import LoginPage from './LoginPage'; // 导入 LoginPage 组件

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <LandPage />
      </Route>
      <Route path="/LoginPage">
        <LoginPage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();