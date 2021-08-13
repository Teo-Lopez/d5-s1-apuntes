
//========================================================================


//DOM

//Seleccionar partes del html

//con getElement
document.getElementById("submit-button")
document.getElementsByClassName(".grey-background")

//by id
document.querySelector("#submit-button")
//by class
document.querySelector(".grey-background")
//by tag
document.querySelector("div")
//funciona como el css, la ul dentro de la nav
document.querySelector("nav ul")
//seleccionar varios
document.querySelectorAll("div")

//guardar estos elementos para un uso posterior
const paragraph = document.querySelector(".important-text")
paragraph.textContent = "Remplazo el texto"
paragraph.textContent += ", añado más texto"
paragraph.innerHTML = "<strong>Remplazo el html</strong>"
paragraph.innerHTML += "<i>, añado más html</i>"

//modificando estilos
paragraph.style.color = "blue"
//modificando clases
paragraph.classList.add(".text-grey")
paragraph.classList.remove(".green-text")

//eventos

const cancelButton = document.getElementById("cancel-button")
cancelButton.addEventListener("click", function () {
  console.log("Cancelando operación")
})

//capturing the event (capturing the "click")
const text = document.getElementById("clickable-text")
text.addEventListener("click", function (event) {
  event.currentTarget //Esto es el elemento clickado
  event.currentTarget.textContent = "Sustituyo el texto clickado"
})

//Crear elementos

//mediante nodos
const div = document.createElement("div")
//dandole texto al div
div.innerText = "texto nuevo"
//enganchandolo a otro div
const divWrapper = document.querySelector(".div-wrapper")
divWrapper.appendChild(div)

//mediante innerHTML
const newHtml = "<div>texto nuevo</div>"
const divWrapper = document.querySelector(".div-wrapper")
divWrapper.innerHTML += newHtml // += añade
divWrapper.innerHTML = newHtml // = sustituye lo existente

