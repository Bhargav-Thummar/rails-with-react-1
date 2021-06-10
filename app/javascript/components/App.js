import React from "react"
import Navbar from './Navbar.js';
import '../../assets/stylesheets/navbar.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
