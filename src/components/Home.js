import React, { Component } from 'react';
import '../App.css';
import Menu from './Menu';
import Products from './Products';
import Admin from './Admin';

class App extends Component {
constructor() {
  super();
  this.state = {}
}

  render() {
    return (
      <div className="App">
        <Menu />
        <Products />
      </div>
    );
  }
}

export default App;
