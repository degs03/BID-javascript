# BID-javascript
## Pruebas
## En el siguiente repositorio se ven algunas pruebas con :
- Fat Arrows
- desestructuracion 
- clases y herencia
```javascript
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
```
