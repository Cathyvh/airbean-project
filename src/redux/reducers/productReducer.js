const initialState = {
  products: [],
  users:  {
      userName: "",
      passWord: "",
      accountId: ""
    },
  cart:{
      items: [],
      total: 0
  },
  open: false
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_USERS":
      return { ...state, users: payload };

    default:
      return state;
  }
};


export const openCart = (state= initialState, action)=>{
  switch(action.type){
    case 'OPEN_CART':
      return{...state, open: !state.open  }
      default:
      return state;
    
  }
}


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

