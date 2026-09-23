class Mascota {
    constructor(nombre, tipo, color) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.color = color;
    }

    saludar() {
        return "Hola, me llamo " + this.nombre + " y soy un " + this.tipo + " de color " + this.color;
    }
}

const mascota1 = new Mascota("Jason", "perro", "negro");
const mascota2 = new Mascota("Chop", "perro", "amarillo y negro");
const mascota3 = new Mascota("Curly", "perro", "blanco");
const mascota4 = new Mascota("Wilson", "gato", "naranja");

const espacioParaSaludos = document.getElementById("mascotas");

espacioParaSaludos.innerHTML += mascota1.saludar() + "<br>";
espacioParaSaludos.innerHTML += mascota2.saludar() + "<br>";
espacioParaSaludos.innerHTML += mascota3.saludar() + "<br>";
espacioParaSaludos.innerHTML += mascota4.saludar() + "<br>";