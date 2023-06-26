const hamburger = document.querySelector(".menu__img");
const menu = document.querySelector(".menu__navegacion");

// EVENTO PARA LLAMAR AL MENU CON LA CLASE "SPREAD"
hamburger.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

// EVENTO QUE AL HACER CLICK YA SE EN UN ELEMENTO "a href"
// DEL MENU O HACER CLICK EN OTRO ELEMENTO QUE NO SE DENTRO DEL MENU
// ESTE SE CIERRA AUTOMANTICAMENTE
window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != hamburger
  ) {
    menu.classList.toggle("spread");
  }
});

const imagenes = document.querySelectorAll(".portafolio__img");
const imagenesLight = document.querySelector(".light__agregar");
const contenedorLight = document.querySelector(".light");
const hamburguer1 = document.querySelector(".menu__img");

// SE DECLARA UN CICLO DENTRO UN EVENTO QUE BUSCA LA RUTA DE LA IMAGEN PARA SER LLAMADA
imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
  });
});

// EVENTO QUE MUESTRA LA IMAGEN EN GRANDE AL USUARIO AL HACER CLICK EN UNA DE ELLAS
contenedorLight.addEventListener("click", (e) => {
  if (e.target !== imagenesLight) {
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImagen");
    hamburguer1.style.opacity = "1";
  }
});
const aparecerImagen = (imagen) => {
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle("show");
  imagenesLight.classList.toggle("showImagen");
  hamburguer1.style.opacity = "0";
};
