import React, { Component } from 'react';
import '../App.css';

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
  }

  console.log(product)

}


  render() {
    return (
      <div className="Admin">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">Product title</label>
          <input type="text" id="title" autoComplete="off" name="title" placeholder="Name of product" onChange={this.onChange}/>

          <label htmlFor="price">Product price</label>
          <input type="text" id="price" autoComplete="off" name="price" placeholder="Price of product" onChange={this.onChange}/>

          <label htmlFor="picture">Product photo</label>
          <input type="text" id="photo" autoComplete="off" name="photo" placeholder="Product photo URL" onChange={this.onChange}/>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Admin;
