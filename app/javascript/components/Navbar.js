import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import logo from '../../assets/images/logo192.png';
import '../../assets/stylesheets/navbar.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';

class Navbar extends React.Component {
  render(){
    return(
      <Router>
        <div className="row Navbar align-items-center">
          <div className="logo col-md-6">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-md-6 navlinks d-flex justify-content-center flex-md-wrap">
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
            {/* <a href="/about">About Us</a> */}
            <Link to="/about">About Us</Link>
            {/* <a href="/contact">Contact Us</a> */}
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
      </Router>
    )
  }
}

export default Navbar;