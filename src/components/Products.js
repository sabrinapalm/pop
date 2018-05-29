import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { connect } from 'react-redux';
import { fetchProducts, buyProduct } from '../actions/productActions'


class Products extends Component {
  constructor(){
    super();
    this.state = {
      selected: [],
    }
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  onClick = (product) => {
    let action = buyProduct(product);
    console.log(action);
    this.props.dispatch(action);
  }

render() {
  const productItems = this.props.products.map(product => (
    <div key={product.title}>
      <img src={product.photo} alt={product.title}/>
      <p><strong>{product.title}</strong></p>
      <p>PRICE: {product.price}:-</p>
      <button onClick={() => { this.onClick(product); }}>ADD TO CART</button>
    </div>
  ));
  return (
    <div>
      <div className="products">
       {productItems}
      </div>
    </div>
    );
  }
}

Products.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  products: state.products.items
});

export default connect(mapStateToProps, { fetchProducts, buyProduct })(Products);
