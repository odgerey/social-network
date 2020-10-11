import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Navbar from '../Navbar';
import Chat from './Chat'


export default () => (
  <BrowserRouter>
  <div>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={ Home }/>
    <Route path="/login" exact component= { Login }/>
    <Route path="/chat" exact component= { Chat }/>
    </Switch>
  </div>
  </BrowserRouter>
)