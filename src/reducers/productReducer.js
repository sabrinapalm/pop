import { ADD_PRODUCT, FETCH_PRODUCTS } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      };
      case ADD_PRODUCT:
        return {
          ...state,
          item: action.payload
        };
    default:
      return state;
  }
}
