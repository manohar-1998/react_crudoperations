import React from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./Home";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router,Link,Route,Switch } from "react-router-dom";
import Add from "./components/manipulation/add";
import Edit from "./components/manipulation/Edit";
import Signup from "./Users/Signup";
import Signin from "./Users/Signin";

// var setDefaultBrowser = require('set-default-browser');
// setDefaultBrowser("chrome");

function App() {
//  {
//     email:"pohulabs@gmail.com";
//     Password:"pohulabs"
// }
  return (
    <Router>
    <div className="App">
      <Navbar/> 
      <Switch>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/signin" component={Signin} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/manipulation/add' component={Add} />
      <Route exact path='/manipulation/Edit/:id ' component={Edit} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
