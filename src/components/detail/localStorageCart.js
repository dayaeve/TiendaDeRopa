function localStorageCart(size, buttons, productId, name, price, image) {

  if (!size) {
    //Si el size no esta definido quiero hacer algo
    console.error('No size assigned ❌ ');
    throw new Error('No size assigned ❌ ')
    //Este throw lanza un error en la consola de la web
  }

  //obtener el carrito del localStorage y en caso que no exista vamos a crear uno
  const carGet = localStorage.getItem('cart') //null
  const arrayCart = JSON.parse(carGet) || []

  /**
   [
    {size:'s', productId:1, name:'', price:'', image:'', quantity:4},
    {size:'m', productId:1, name:'', price:'', image:'', quantity:2},
    {size:'s', productId:18, name:'', price:'', image:'', quantity:1},
    {size:'l', productId:12, name:'', price:'', image:'', quantity:1}
  ]
  */


  const matched = arrayCart.find((product) => product.productId === productId && product.size === size) // me retorna el find el producto que cumpla con la condicion que estableci, o me devolvera undefined. 

  if (matched) {

    //si el producto esta en el carrito, aumentare la cantidad
    matched.quantity++
  } else {
    //si el producto no esta en el carro, lo creare. Recordar que estoy descriminando por id y talla de ropa

    arrayCart.push({ size, productId, name, price, image, quantity: 1 })

    //{ size:size, productId:productId, name:name, price:price, image:image, quantity: 1 }
  }


  //Guardar el carrito actualizado en localStorage
  const arrayJSON = JSON.stringify(arrayCart)
  localStorage.setItem('cart', arrayJSON)

  buttons.forEach((btn) => {
    btn.classList.remove('div__button--active')
  })

}

export default localStorageCart