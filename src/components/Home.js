import React, { Component } from 'react';
import '../App.css';
import logo from '../resources/logo.png';
import bb8 from '../resources/bb8.jpg';
import bb9e from '../resources/bb9e.jpg';
import r2d2 from '../resources/r2d2.jpg';
import yoda from '../resources/yoda.jpg';
import darthvader from '../resources/darthvader.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div className="topnav">
            <a className="active" href="#home">Products</a>
            <a href="#admin" className="cart">Admin</a>
            <a href="#cart" className="cart">CART</a>
          </div>
        <div>
          <div className="products">
            <div>
              <img src={bb8} alt="bb8"/>
              <p><strong>BB-8 Vinyl Bobblehead</strong></p>
              <p>PRICE: 200:-</p> <button>ADD TO CART</button>
            </div>
            <div>
              <img src={bb9e} alt="bb9e"/>
              <p><strong>BB-9E Vinyl Bobblehead</strong></p>
              <p>PRICE: 200:-</p> <button>ADD TO CART</button>
            </div>
            <div>
              <img src={r2d2} alt="r2d2"/>
              <p><strong>R2-D2 Vinyl</strong></p>
              <p>PRICE: 200:-</p> <button>ADD TO CART</button>
            </div>
            <div>
              <img src={yoda} alt="yoda"/>
              <p><strong>Yoda Vinyl Bobble-Head</strong></p>
              <p>PRICE: 200:-</p> <button>ADD TO CART</button>
            </div>
            <div>
              <img src={darthvader} alt="darthvader"/>
              <p><strong>Darth Vader Vinyl Bobble-Head</strong></p>
              <p>PRICE: 200:-</p> <button>ADD TO CART</button>
            </div>
          </div>
          <div className="products">
            <div>
              <img src={bb8} alt="bb8"/>
              <p><strong>BB-8 Vinyl Bobblehead</strong></p>
              <p>PRICE: 200:-</p> <button>ADD TO CART</button>
            </div>
            <div>
              <img src={bb9e} alt="bb9e"/>
              <p><strong>BB-9E Vinyl Bobblehead</strong></p>
              <p>PRICE: 200:-</p> <button>ADD TO CART</button>
            </div>
            <div>
              <img src={r2d2} alt="r2d2"/>
              <p><strong>R2-D2 Vinyl</strong></p>
              <p>PRICE: 200:-</p> <button>ADD TO CART</button>
            </div>
            <div>
              <img src={yoda} alt="yoda"/>
              <p><strong>Yoda Vinyl Bobble-Head</strong></p>
              <p>PRICE: 200:-</p> <button>ADD TO CART</button>
            </div>
            <div>
              <img src={darthvader} alt="darthvader"/>
              <p><strong>Darth Vader Vinyl Bobble-Head</strong></p>
              <p>PRICE: 200:-</p> <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
