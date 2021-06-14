import { combineReducers } from "redux";
import { productReducer, addProductReducer, openCart, userReducer, currentUserReducer, } from "./productReducer";
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
  allProducts: productReducer,
  addProduct: addProductReducer,
  openCart: openCart,
  userReducer: userReducer,
  currentUserReducer: currentUserReducer,
  form: formReducer,
});

export default reducers;