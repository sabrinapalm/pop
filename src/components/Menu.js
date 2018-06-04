import React, { Component } from 'react';
import Products from '../components/Products';
import Admin from '../components/Admin';
import Cart from '../components/Cart';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';
import { connect } from 'react-redux';
import '../App.css';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }

  goToProducts = () => {
    this.setState({
      value: 0
    })
  }

  goToAdmin = () => {
    this.setState({
      value: 1
    })
  }

  goToCart = () => {
    this.setState({
      value: 2
    })
  }

  render() {
    const { value } = this.state;
    const { selected } = this.props;
    return (
      <div className="Menu">
          <div className="topnav">
            <a value={value} onClick={this.goToProducts}>Products</a>
            <a value={value} onClick={this.goToAdmin}className="cart">Admin</a>
            <a value={value} onClick={this.goToCart}className="cart"><FaShoppingCart /> ({selected.length})</a>
          </div>
            {value === 0 && <Products />}
            {value === 1 && <Admin />}
            {value === 2 && <Cart />}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.products.selected,
});

export default connect(mapStateToProps)(Menu);
