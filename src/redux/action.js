

export const setUsers = (users) => {
    return {
        type: "SET_USERS",
        payload: users
    }
}

// export function addUser(values, callback) {

//   return dispatch => { //return function
//     return axios.post(`http://localhost:5000/api/accounts/`,values,{headers}) //return post request response
//     .then((users) => { //pass data in as a parameter, call the callback, dispatch the action. 
//         callback();
//       dispatch({
//         type: ADD_USER,
//         payload: users
//       })
//     })
//   }
// }


export const setProducts = (products) => {
    return {
        type: "SET_PRODUCTS",
        payload: products
    }
}


export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}
export const openCart = (open) => {
  return{
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
