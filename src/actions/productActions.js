import {
  GET_PODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_BY_ID,
  DESTROY_PREDICTIONS
} from './types';
import axios from 'axios';

export const getProducts = () => async dispatch => {
  const res = await axios.get('https://cors-anywhere.herokuapp.com/https://www.datakick.org/api/items');
  dispatch({
    type: GET_PODUCTS,
    payload: res.data
  });
};

export const getProductById = id => async dispatch => {
  const res = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://www.datakick.org/api/items/${id}`
  );
  dispatch({
    type: GET_PRODUCT_BY_ID,
    payload: res.data
  });
};

export const getProductsByName = name => async dispatch => {
  const res = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://www.datakick.org/api/items?query=${name}`
  );
  dispatch({
    type: GET_PRODUCTS_BY_NAME,
    payload: res.data
  });
};

export const destroyPredictions = name => dispatch => {
  dispatch({
    type: DESTROY_PREDICTIONS
  });
};

