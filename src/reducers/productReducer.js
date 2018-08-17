import {
  GET_PODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS_BY_NAME,
  DESTROY_PREDICTIONS
} from '../actions/types';

const initialState = {
  products: [],
  product: {},
  predictions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload
      };
    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        predictions: action.payload
      };
    case DESTROY_PREDICTIONS:
      return {
        ...state,
        predictions: []
      };
    default:
      return state;
  }
}
