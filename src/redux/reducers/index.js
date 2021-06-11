import { combineReducers } from "redux";
import { productReducer, addProductReducer, openCart, userReducer} from "./productReducer";
import {reducer as formReducer} from 'redux-form'


const reducers = combineReducers({
  allProducts: productReducer,
  addProduct: addProductReducer,
  openCart: openCart,
  userReducer: userReducer,
  form: formReducer
});

export default reducers;