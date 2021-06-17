const initialState = {
  products: [],
  currentUser: {},
  userDatabase: {},
  cart: {
    items: [],
    total: 0
  },
  orders: {
    id: 0,
    eta: 0,
    orderTotal: 0
  },
  open: false,
};



export const openCart = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_CART':
      return { ...state, open: !state.open }
    default:
      return state;

  }
}


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

export const orderReducer = (state = initialState.orders, action) => {
  switch (action.type) {

    case "SET_ORDER":
      return {
        ...state,
        id: state.id = action.payload.id,
        eta: state.eta = action.payload.eta,
        orderTotal: state.orderTotal + action.payload.total
      }
    default:
      return state;
  }
};

export const addProductReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      }
    }

    case "RESET_CART":
      return {
        ...state,
        items: [],
        total: 0

      }

    default: {
      return state;
    }
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

