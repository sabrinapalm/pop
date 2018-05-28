import { ADD_PRODUCT, FETCH_PRODUCTS, BUY_PRODUCT } from './types';
import firebase from '../globals/firebase';

export const fetchProducts = () => dispatch => {
  console.log('FETCH PRODUCTS ACTION CALLED')
  firebase.database().ref('products').once('value').then((snapshot) => {
    let products = Object.values(snapshot.val());
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products
    })
  })
};

export const createProduct = (product) => dispatch => {
  console.log('CREATE PRODUCT ACTION CALLED')
  firebase.database().ref('products/').push({
    title: product.title,
    price: product.price,
    photo: product.photo,
  })
  dispatch({
    type: ADD_PRODUCT,
    payload: product
  })
};


export const buyProduct = (selected) => dispatch => {
  let arr = [];
  arr.push(selected);
  console.log(arr);
  dispatch({
    type: BUY_PRODUCT,
    payload: arr
  })
};
