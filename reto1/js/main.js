class Persona {
    constructor(nombre, edad, DNI, peso, altura) {
        this.sexo = "h";

        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.peso = peso;
        this.altura = altura;
    }

    nombre = "";
    edad = 0;
    peso = 0;
    altura = 0;

    generarDNI() {
        this.DNI = Math.floor(Math.random() * 99999999)
        let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        let letraDNI = letrasDNI[this.DNI % 23];
        this.DNI = this.DNI + letraDNI;
    }
}

let persona1 = new Persona("Alex", 25, 0, 70, 175)

persona1.generarDNI();
console.log(persona1)