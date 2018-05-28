import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { connect } from 'react-redux';
import { fetchProducts, buyProduct } from '../actions/productActions'


class Products extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  onClick = (title, price, photo) => {
    let product = {
      title,
      price,
      photo,
    }
    this.props.buyProduct(product);
  }

render() {
  const productItems = this.props.products.map(product => (
    <div key={product.title}>
      <img src={product.photo} alt={product.title}/>
      <p><strong>{product.title}</strong></p>
      <p>PRICE: {product.price}:-</p>
      <button onClick={() => { this.onClick(product.title, product.price, product.photo); }}>ADD TO CART</button>
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
  products: state.products.items,
  product: state.products.selected,
});

export default connect(mapStateToProps, { fetchProducts, buyProduct })(Products);
