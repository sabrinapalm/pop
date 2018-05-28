import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

class Root extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="topnav">
            <a href="products">Products</a>
            <a href="admin" className="cart">Admin</a>
            <a href="cart" className="cart">CART (0)</a>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Root;
