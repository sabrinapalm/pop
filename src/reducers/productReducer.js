import { ADD_PRODUCT, FETCH_PRODUCTS, BUY_PRODUCT } from '../actions/types';

const initialState = {
  selected: [],
  items: [],
  item: {},
  history: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
    return {
      ...state,
      items: action.payload,
      history: [...state.history, action.type]
    };
    case ADD_PRODUCT:
    return {
      ...state,
      item: action.payload,
      history: [...state.history, action.type]
    };
    case BUY_PRODUCT:
    return {
      ...state,
      selected: [...state.selected, action.payload],
      history: [...state.history, action.type]
    }
    default:
      return state;
  }
}
