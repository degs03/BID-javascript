class Ninja {
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(`nombre: ${this.nombre}`);
    }
    showStats(){
        console.log(`Nombre: ${this.nombre} \nFuerza: ${this.fuerza}\nVelocidad: ${this.velocidad}\nSalud: ${this.salud} `);
    }
    drinkSake(){
        this.salud+=10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja{
    constructor (nombre){
        super(nombre);
        this.salud = 200;
        this.fuerza = 10;
        this.velocidad = 10;
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."); 
    }
    showStats(){
        console.log(`Nombre: ${this.nombre} \nFuerza: ${this.fuerza}\nVelocidad: ${this.velocidad}\nSalud: ${this.salud}\nSabiduria: ${this.sabiduria}`);
    }
    
}
const superSensei = new Sensei("Manchi");
superSensei.speakWisdom();
superSensei.showStats();
