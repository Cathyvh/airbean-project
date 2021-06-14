const initialState = {
  products: [],
  currentUser: {},
  userDatabase: {},
  cart: {
    items: [],
    total: 0
  },
  orders: [],
  open: false,
};

// export const userReducer = (state = initialState.Login, action) => {
//   switch (action.type) {
//     case "SET_USERS":
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };


export const openCart = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_CART':
      return { ...state, open: !state.open }
    default:
      return state;

  }
}

// export const idReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "GET_ID":
//       state.map(user => {
//         if (userDatabase.userName !== action.payload) return ; 

//         });
//       return { ...state.currentUser, currentUser: payload }

//     default:
//       return state;
//   }
// };


export const currentUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...state.currentUser, currentUser: payload }

    default:
      return state;
  }
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case "SET_USERS":
      return { ...state.userDatabase, userDatabase: payload }


    default:
      return state;
  }
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case "ADD_ORDER":
      return { ...state.userDatabase, userDatabase: payload }


    default:
      return state;
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
export const addProductReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      //let addedProduct = state.products.find(products => state.products.title === action.payload)

      return {
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
export const totalReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case 'CALC_TOTAL': {
      return {
        ...state,
        total: state.total + action.payload

      }
    }
    default: {
      return state;
    }
  }
}

