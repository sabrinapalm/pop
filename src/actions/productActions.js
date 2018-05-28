import { ADD_PRODUCT, FETCH_PRODUCTS } from './types';
import firebase from '../globals/firebase';

export const fetchProducts = () => dispatch => {
  firebase.database().ref('products').once('value').then((snapshot) => {
    let products = Object.values(snapshot.val());
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products
    })
  })
}
