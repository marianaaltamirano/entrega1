class Reserva{
    constructor(nombre, cantidad, telefono) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.telefono = telefono;
        this.disponibilidad = true;
    }
}

// --arreglo--
let ocupacion = [];

// ocupacion.push(new Reserva(
//     nombre= prompt("ingrese nombre"),
//     cantidad= prompt("ingrese cantidad de personas"),
//     telefono= prompt("ingrese telefono de contacto")
// ));

ocupacion.push(new Reserva("mariana", 10, 3544411637));
ocupacion.push(new Reserva("pedro", 3, 3514253869));
ocupacion.push(new Reserva("carolina", 5, 3519685742));
// ocupacion.push(new Reserva("maria", 20, 3519685742));

// --mostrar las reservas--
ocupacion.forEach((datos) => {
  console.log(datos);
})

// -- cancelar reserva--
// ocupacion.splice(1, 1);
// console.log(ocupacion);

// --mostrar listado--
// for (const lista of ocupacion) {
//     console.log(lista.nombre);
//     console.log(lista.cantidad);
// }

// --cantidad total reservada--
const total = ocupacion.reduce((ac, el) => ac + el.cantidad, 0);
console.log("total");
console.log(total);
    
// --cantidad que queda disponible--
const disponible = ocupacion.reduce((ac, el) => ac - el.cantidad, 30);
console.log("disponible");
console.log(disponible);

// --confirmacion reserva-- si no hay disponibilidad borra el ultimo elemento
function contador(total,disponible) {
  if (disponible >= 0) {
    console.log("reserva ok");
  } else if (disponible<0) {
    console.log("no hay disponibilidad");
    ocupacion.pop(); 
    console.log(ocupacion);
  }
}

console.log(contador(total, disponible));
