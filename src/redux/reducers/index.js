import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, addProductReducer} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  addProduct: addProductReducer
});

export default reducers;