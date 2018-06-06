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

  componentDidMount() {
    this.getTotal();
  }

  getTotal = () => {
    const { selected } = this.props;
    let sum = 0;
    for (let i = 0; i < selected.length; i++) {
      sum = sum + selected[i].price;
    }
    this.setState({total: sum})
  }


  render() {
    const { selected, history } = this.props;
    const selectedItems = selected.map(s => (
      <p key={s.title + Math.floor((Math.random() * 1000000) + 1)}><a>{s.title}</a> <span className="price">{s.price}:-</span></p>
    ));

    const selectedHistory = history.map(h => (
      <p key={h + Math.floor((Math.random() * 1000000) + 1)}>{h}</p>
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
        {selectedHistory}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  selected: state.products.selected,
  history: state.products.history,
});

export default connect(mapStateToProps)(Cart);
