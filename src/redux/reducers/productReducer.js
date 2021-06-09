const initialState = {
  products: [],

  cart:{
      items: [],
      total: 0
  }

};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload };

    default:
      return state;
  }
};
export const addProductReducer = (state= initialState.cart, action ) =>{
  switch(action.type){
    case 'ADD_PRODUCT':{
            //let addedProduct = state.products.find(products => state.products.title === action.payload)
            
             return{
                ...state,
                 items: [...state.items, action.payload],
                 total: state.total + action.payload.price

                  }
    }
        default: {
        return state;
    }
  }
}
export const totalReducer = (state= initialState.cart, action ) =>{
  switch(action.type){
    case 'CALC_TOTAL':{
             return{
                ...state,
                 total: state.total + action.payload

                  }
    }
        default: {
        return state;
    }
  }
}

