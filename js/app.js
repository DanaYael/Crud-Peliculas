import Pelicula from "./classPeliculas.js";

const modalContacto = new bootstrap.Modal(
  document.getElementById("contactModal")
);

const formulario = document.getElementById("contactForm");

const btnagregar = document.querySelector(".btn-success");

const btnGuardarPeli = document.querySelector(".btn-primary");

const buscar = document.querySelector(".btn-secondary");

const titulo = document.getElementById("titulo");

const director = document.getElementById("director");

const genero = document.getElementById("genero");

const anio = document.getElementById("anio");

const listaPeliculas = JSON.parse(localStorage.getItem("agendaKey")) || [];

function abrirmodalPelicula() {
  modalContacto.show();
}

function guardarenLocalStorage() {
  localStorage.setItem("agendaKey", JSON.stringify(listaPeliculas));
}

function limpiarFormulario() {
  formulario.reset();
}

function nuevaPelicula(e) {
  e.preventDefault();
  //crear el objeto
  const newPelicula = new Pelicula(
    titulo.value,
    director.value,
    genero.value,
    anio.value
  );
  //guardar el contacto nuevo en la lista de contactos
  listaPeliculas.push(newPelicula);
  //guardar en localstorage
  guardarenLocalStorage();
  limpiarFormulario();
  dibujarFila(nuevaPelicula, listaPeliculas.length);
  modalContacto.hide();
}

function dibujarFila(pelicula, fila) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML += `
  <tr>
              <th scope="row">${fila}</th>
              <td>${pelicula.titulo}</td>
              <td>${pelicula.director}</td>
              <td>${pelicula.genero}</td>
              <td>${pelicula.anio}</td>
              <td>
                <button class="btn btn-warning "onclick="btnEditar('${pelicula.id}')">
                  <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-danger" onclick="borrarPelicula('${pelicula.id}')">
                  <i class="bi bi-x-lg"></i>
                </button>
                <button class="btn btn-info" onclick="verDetalle('${pelicula.id}')"><i class="bi bi-eye"></i></button>
              </td>
            </tr>
`;
}

btnagregar.addEventListener("click", abrirmodalPelicula);
formulario.addEventListener("submit", nuevaPelicula);
