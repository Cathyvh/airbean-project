

export const setUser = (values) => {
  return {
    type: "SET_USER",
    payload: values
  }
}


export const addId = (id) => {
  return {
    type: "ADD_ID",
    payload: id
  }
}



export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products
  }
}

export const setOrder = (values) => {
  return {
    type: "SET_ORDER",
    payload: values
  }
}

export const getId = (userName) => {
  return {
    type: "GET_ID",
    payload: userName
  }
}


export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product
  }
}
export const openCart = (open) => {
  return {
    type: "OPEN_CART",
    payload: open

  }
}



export const selectedProduct = (product) => {
  return {
    type: "SELECTED_PRODUCT",
    payload: product
  }
}

export const removeSelectedProduct = (product) => {
  return {
    type: "REMOVE_SELECTED_PRODUCT",
  }
}
