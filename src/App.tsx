import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import RegisterUser from "./components/register-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/user" exact component={RegisterUser} />
    </Router>
  );
}

export default App;
