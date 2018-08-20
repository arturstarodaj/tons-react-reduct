import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS_BY_NAME,
  DESTROY_PREDICTIONS,
  SEARCH_PRODUCTS_BY_NAME
} from '../actions/types';

const initialState = {
  products: [],
  product: {},
  predictions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
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
    case SEARCH_PRODUCTS_BY_NAME:
      return {
        ...state,
        predictions: [],
        products: action.payload
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
