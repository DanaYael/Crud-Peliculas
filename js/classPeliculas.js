export default class Pelicula {
  #id;
  #titulo;
  #director;
  #anio;
  #genero;

  constructor(id, titulo, director, anio, genero) {
    this.#id = crypto.randomUUID();
    this.#titulo = titulo;
    this.#director = director;
    this.#genero = genero;
    this.#anio = anio;
  }
  //agregar los get
  get id() {
    return this.#id;
  }
  get titulo() {
    return this.#titulo;
  }
  get director() {
    return this.#director;
  }
  get genero() {
    return this.#genero;
  }
  get anio() {
    return this.#anio;
  }

  //  set
  set titulo(value) {
    this.#titulo = value;
  }
  set director(value) {
    this.#director = value;
  }
  set genero(value) {
    this.#genero = value;
  }
  set anio(value) {
    this.#anio = value;
  }

  //metodo para que funcione JSON.stringify

  toJSON() {
    return {
      id: this.id,
      titulo: this.#titulo,
      director: this.#director,
      genero: this.#genero,
      anio: this.anio,
    };
  }
}
