const subTotal = () => {

  const subTotal = document.getElementById('sub_total')
  const itemsCart = JSON.parse(localStorage.getItem('cart')) || []

  let total = 0

  itemsCart.map((product) => {
    let subTotal = product.quantity * product.price
    total += subTotal
  })

  console.log(total);
  subTotal.innerHTML = `$${total.toFixed(2)}`

}

export default subTotal