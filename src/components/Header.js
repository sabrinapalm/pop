import React, { Component } from 'react';
import '../App.css';
import logo from '../resources/logo.png';

class Header extends Component {
constructor() {
  super();
  this.state = {}
}

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
      </div>
    );
  }
}

export default Header;
