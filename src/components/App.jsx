import React from 'react';
import './App.css';
import '../style/_index.css';
import { Switch, Route } from 'react-router-dom';
import AppRouter from './AppRouter';
import Login from './login/Login';

function App() {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route component={AppRouter} />
    </Switch>
  );
}

export default App;
