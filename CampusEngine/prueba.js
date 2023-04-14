import dinamic from "./js/dinamic.js";

dinamic.showServicios();

const modal = document.querySelector(".modal")
const boton = document.querySelector(".cta")
const cerrar = document.querySelector(".close")

boton.addEventListener("click", (e)=>{
    modal.style.display = "block";
})

cerrar.addEventListener("click", (e)=>{
    modal.style.display = "none"
})