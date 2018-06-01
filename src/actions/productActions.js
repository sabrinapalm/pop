import { ADD_PRODUCT, FETCH_PRODUCTS, BUY_PRODUCT } from './types';
import firebase from '../globals/firebase';


//Fetch products from database
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


//Add product to database
export const addProduct = (product) => dispatch => {
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


//Add products to basket
export const buyProduct = (product) => dispatch => {
  console.log('BUY PRODUCT ACTION CALLED')
  dispatch({
    type: BUY_PRODUCT,
    payload: product
  })
};
