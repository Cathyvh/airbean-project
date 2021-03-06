import { combineReducers } from "redux";
import { productReducer, addProductReducer, openCart, userReducer, currentUserReducer, orderReducer } from "./AllReducers";
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
  allProducts: productReducer,
  addProduct: addProductReducer,
  openCart: openCart,
  userReducer: userReducer,
  currentUserReducer: currentUserReducer,
  form: formReducer,
  orderReducer: orderReducer,

});

export default reducers;