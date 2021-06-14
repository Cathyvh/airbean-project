export async function postLogin(data) {
  try {
    const response = await fetch('http://localhost:5000/api/accounts', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

export async function getOrders(accountId) {
  try {
    const response = await fetch(`http://localhost:5000/api/order/${accountId}`)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
