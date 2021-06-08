// import { applyMiddleware, createStore } from 'redux'
// import rootReducer from '../redux/rootReducer'
// import thunk from 'redux-thunk'





// const store = createStore(rootReducer(applyMiddleware(thunk)))
// store.subscribe(() => console.log(store.getState()))
// export default store

import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;