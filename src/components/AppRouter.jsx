import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { authService } from '../services';
import Dashboard from './dashboard/Dashboard';
import Header from './Header/Header';

function AppRouter() {
  if (!authService.validateUserToken()) {
    return (window.location.href = '/login');
  }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/logs' component={null /** LOGS Site */} />
        <Route exact path='/tags' component={null /** TAGS Site */} />
        <Route exact path='/bluetooth' component={null /** BLUETOOTH Site */} />
        <Route exact path='/errors' component={null /** ERROR Site */} />
      </Switch>
    </>
  );
}

export default AppRouter;
