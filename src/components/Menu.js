import React, { Component } from 'react';
import '../App.css';
import logo from '../resources/logo.png';

class Menu extends Component {
constructor() {
  super();
  this.state = {}
}

onClick = () => {
  console.log('clicked');
}


  render() {
    return (
      <div className="Menu">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <div className="topnav">
          <a className="active" href="#home">Products</a>
          <a href="#admin" className="cart">Admin</a>
          <a href="#cart" className="cart">CART (0)</a>
      </div>
      </div>
    );
  }
}

export default Menu;
