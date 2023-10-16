import cart from "../cart/cart.js"
import localStorageCart from "./localStorageCart.js"

function detail() {

  const params = window.location.search
  // Creo una variable para acceder al parametro en este caso '?id=5'

  //obtencion del id
  const productId = Number(params.split('=')[1]) //  el que estoy tomando es'?id=5'. El split me retorna un array y tengo del parentesis pongo desde donde quiero separar y ahi pongo ('=') y como resultado en la consola de la web da ['?id, '5'] entonces como necesito el 5 pongo en la posicion [1] y ahi retorna 5. Despues como me esta retorna en string y lo necesito en numero agrego ParseInt o Number

  const sectionDetail = document.querySelector('#section_detail') // Este section_detail lo saco del detail.html 

  const ul = document.createElement('ul')
  // Me creo un ul que me voy a estar incoporando en el section como muestra en mi detail.html y luego creo sectionDetail.appendhild('ul') como muestra en la parte de abajo.Despues anado clases.
  ul.classList.add('section__ul')
  ul.classList.add('ul')

  const li = document.createElement('li')
  // Me creo un li que me voy a estar incoporando en el section como muestra en mi  detail.html y luego creo ul.appendChild('li') como muestra en la parte de abajo. Despues anado clases.
  li.classList.add('ul__li--detail')

  async function productApi() {
    // Aqui creo la funcion que va a hacer el llamado al Api y despues pongo productApi() como muestra abajo que es donde se va estar ejecutando 

    const url = 'https://ecommercebackend.fundamentos-29.repl.co/'
    //link de la Api

    const res = await fetch(url)
    try {
      const data = await res.json()
      //console.log(data);
      //json lo convierte en objeto

      for (const product of data) {
        //console.log(product);
        //Creo un for para iterar de objeto a array
        if (product.id === productId) {
          console.log(product);
          li.innerHTML +=
            `
            <div class="ul__div--li">
              <h1 class="ul__h1--div">${product.name}</h1>
              <h2 class="ul__h2--div">$${product.price}.00</h2>
              <p class="ul__p--div">Colores</p>
              <img src=${product.image} alt=${product.name} class="ul__img--div">
        
        
              <div class="ul__div--div">
                <h3 class="ul__h3--div">Tallas</h3>
                <h4 class="ul__h4--div">Guía de tallas</h4>
              </div>
        
              <div class="ul__div--buttons div">
                <button class="div__button--sizes "> S </button>
                <button class="div__button--sizes"> M </button>
                <button class="div__button--sizes"> L </button>
                <button class="div__button--sizes"> XL </button>
                <button class="div__button--sizes"> 2XL </button>
                <button class="div__button--sizes"> 3XL </button>
              </div>
        
              <button class="ul__button--div">
                Añadir al carrito
              </button>
      
          </div>
      
          <figure class="ul__figure">
            <img src=${product.image} alt=${product.name} class="ul__img--figure">
          </figure>
          
          `
          const divButtonSizes = document.querySelectorAll('.div__button--sizes')
          //Aqui selecciono a la clase que es div__button--sizes y para seleccionar todos los sizes uso querySelectorAll. A cada uno le tengo que anadir un elemeto ya que es iterable
          //console.log(divButtonSizes); //6 elementos que tienen esa clase

          let size = null
          //Para tener el contenido para saber que boton es decir que size estoy seleccionando entonces creo una varible.

          divButtonSizes.forEach((button) => {
            // El forEach es un metodo que me permita iterar por cada uno
           // console.log(button);

            button.addEventListener(('click'), function () {
              // a cada uno le voy a agregar un eventlistener

              divButtonSizes.forEach((btn) => {
                btn.classList.remove('div__button--active')
              })
              //Primero elimino y despues agrego para que este funcione debo crear otro forEach para que funcione el remove.Asi va a iterar todos los botones 

              button.classList.add('div__button--active')
              //Aqui agrego el elemento que quiero que active y se ponga de color y luego crear el remove de arriba para que quite y ponga.
              size = button.textContent
              // guardo el textcontent el la variable size. El contenido son los sizes. Es decir que voy a redefinirla.
              console.log(size);

            })

          })

          const ulButtonDiv = document.querySelector('.ul__button--div')
          //saco la clase del detail.js. Este es para que el boton de Anadir al carrito escuche el click.

          ulButtonDiv.addEventListener(('click'), () => {
            //Creo un file de localStorageCart dentro de detail
            localStorageCart(size, divButtonSizes, productId, product.name, product.price, product.image)
            size = null
            cart()

            const cartDisplay = document.querySelector('#menu_cart')
            cartDisplay.classList.add('main__section--cartActive')
          })








        }

      }


    } catch (error) {
      console.log(error);
    }

  }



  sectionDetail.appendChild(ul)
  // Este section lo pongo para que me lo cree el ul en el detail.html
  ul.appendChild(li)
  // Al ul lo pongo en la section y dentro del ul le pongo el li

  productApi()
}

export default detail