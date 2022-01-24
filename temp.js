import React ,{Component} from 'react'
import { CssBaseline } from '@mui/material';
import AppHeader from './components/AppHeader/AppHeader';
import { Fragment } from 'react';
import './App.css'

import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import useToken from './useToken';


class  App extends Component  {

  render(){

  const { token , setToken} = useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }
  return (
    <div className="wrapper">
    <Fragment>
      <CssBaseline />
      <AppHeader />
    </Fragment>

    <h1>Application</h1>
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/preferences">
          <Preferences />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  )};
}

export default App;
