import React, { Component } from 'react';
import '../App.css';

class Cart extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <h4>YOUR SHOPPING CART <span className="price"> <b>(4)</b></span></h4>
          <p><a>Boba Fett Vinyl Bobblehead</a> <span className="price">199:- </span></p>
          <p><a>BB-9E Vinyl Bobblehead</a> <span className="price">149:-</span></p>
          <p><a>R2-D2 Vinyl</a> <span className="price">249:-</span></p>
          <p><a>Yoda Vinyl Bobblehead</a> <span className="price">199:-</span></p>
          <hr />
          <p>Total <span className="price"><b>796:-</b></span></p>
          <button className="checkoutButton">CHECKOUT</button>
        </div>
        <div className="container">
        <h4>HISTORY</h4>
        </div>
      </div>
    );
  }
}

export default Cart;
