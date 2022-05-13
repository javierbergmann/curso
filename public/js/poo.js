class Animal{
    constructor(vNombre, vRaza){
        this.nombre= vNombre;
        this.raza= vRaza;
    }

    canta(){
        return `${this.nombre} puede cantar`;
    }

    salta(){
        return `${this.nombre} puede cantar`;
    }
}

let perro = new Animal("Mish", "GATO");
console.log(perro);