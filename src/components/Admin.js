import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProduct } from '../actions/productActions';

class Admin extends Component {
constructor() {
  super();
  this.state = {
    title: '',
    price: '',
    photo: '',
  }
  this.onChange = this.onChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
}

onChange(event) {
  this.setState({ [event.target.name]: event.target.value });
}

onSubmit(event) {
  event.preventDefault();
    const product = {
      title: this.state.title,
      price: this.state.price,
      photo: this.state.photo,
    };

  //CALL ACTION
  this.props.addProduct(product);
}



  render() {
    return (
      <div className="Admin">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">Product title</label>
          <input type="text" id="title" autoComplete="off" name="title" placeholder="Name of product" required onChange={this.onChange}/>

          <label htmlFor="price">Product price</label>
          <input type="number" id="price" autoComplete="off" name="price" placeholder="Price of product" required onChange={this.onChange}/>

          <label htmlFor="picture">Product photo</label>
          <input type="text" id="photo" autoComplete="off" name="photo" placeholder="Product photo URL" required onChange={this.onChange}/>

          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

Admin.propTypes = {
  createProduct: PropTypes.func.isRequired
}

export default connect(null, { addProduct })(Admin);
