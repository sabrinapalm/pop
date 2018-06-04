import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';

class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: this.props.selected.length,
      total: 0,
    }
  }

  render() {
    const { selected } = this.props;
    const selectedItems = selected.map(s => (
      <p key={s.title}><a>{s.title}</a> <span className="price">{s.price}:-</span></p>
    ));


    return (
      <div>
        <div className="container">
          <h4>YOUR SHOPPING CART <span className="price"> <b>{this.state.items}</b></span></h4>
          {selectedItems}
            <hr />
            <p>Total <span className="price"><b>{this.state.total}:-</b></span></p>
          <button className="checkoutButton">CHECKOUT</button>

        </div>


        <div className="container">
        <h4>HISTORY</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  selected: state.products.selected,
});

export default connect(mapStateToProps)(Cart);
