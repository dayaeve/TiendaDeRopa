function back() {

  const back = document.querySelector('#back')

  back.innerHTML = `
    <a href="../../../index.html" class='main__a--back'>
      <i class='bx bx-arrow-back'></i> <span> Academlo - Tienda oficial</span>
    </a>
  `
  // el main de class lo saco del HTML
  // Aqui pongo el link de la pagina a donde yo quiero volver. En este casi seria el index.html

}
export default back