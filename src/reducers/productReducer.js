import { ADD_PRODUCT, FETCH_PRODUCTS, BUY_PRODUCT } from '../actions/types';

const initialState = {
  selected: [],
  items: [],
  item: {},
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
    case BUY_PRODUCT:
    return {
      ...state,
      selected: [...state.selected, action.payload]
    }
    default:
      return state;
  }
}
