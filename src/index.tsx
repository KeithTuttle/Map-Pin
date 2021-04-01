import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import Register from './pages/register';
import Contact from './pages/contact';
import Login from './pages/login';

import './index.css';
import App from './App';

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render (
  <Router basename = {process.env.PUBLIC_URL}>
    <React.Fragment>
      <Route exact path="/" render={() => (
        <Redirect to = "/home"/>
      )}/>
      <Route path = '/home' component={Home}/>
      <Route path = '/login' component={Login}/>
      <Route path = '/register' component={Register}/>
      <Route path = '/about' component={About}/>
      <Route path = '/contact' component={Contact}/>
   
    </React.Fragment>
  </Router>

 , document.getElementById('root'));
