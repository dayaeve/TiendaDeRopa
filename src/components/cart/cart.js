import subTotal from "./subtotal.js"

function cart() {
  const ul = document.getElementById('cart_list')
  const itemsCart = JSON.parse(localStorage.getItem('cart')) || []

  subTotal()

  ul.innerHTML = ''

  for (const product of itemsCart) {
    const li = document.createElement('li')
    li.classList.add('section__li--cart')

    li.innerHTML = `
    
      <img src=${product.image} alt=${product.name} class='section__img--cart'>

      <div class='section__div--cart'>
      
        <h3 class='section__h3--cart'>${product.name}</h3>
        <h4 class='section__h4--cart' >$${product.price}.00</h4>
        <p class='section__p--cart'>Talla: ${product.size}</p>

        <div class='section__div--buttonsCart'>

          <div class='section__div--modifed'>
            <button class='decrement'>-</button>
            <h4 class='quantity'>${product.quantity}</h4>
            <button class='increment'>+</button>
          </div>

          <button class='remove'>
            <i class='bx bxs-trash' style='color:#737171'  ></i>
          </button>

        </div>

      </div>

    `

    ul.appendChild(li)

    const increment = li.querySelector('.increment')
    const decrement = li.querySelector('.decrement')
    const remove = li.querySelector('.remove')

    increment.addEventListener('click', () => {
      product.quantity++
      localStorage.setItem('cart', JSON.stringify(itemsCart))
      cart()
    })

    decrement.addEventListener('click', () => {
      if (product.quantity > 0) product.quantity--

      if (product.quantity === 0) {
        const index = itemsCart.indexOf(product)
        if (index !== -1) {
          itemsCart.splice(index, 1)
        }
      }
      localStorage.setItem('cart', JSON.stringify(itemsCart))
      cart()
    })


    remove.addEventListener('click', () => {

      const index = itemsCart.indexOf(product)
      if (index !== -1) {
        itemsCart.splice(index, 1)
      }

      localStorage.setItem('cart', JSON.stringify(itemsCart))
      cart()
    })


  }

}

export default cart