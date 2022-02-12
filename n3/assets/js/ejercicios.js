// Ejercicio Nro 3
// Ingreso de datos del usuario y cambio de dato a Int
var diasIngresados = prompt("Ingrese la cantidad de días: ");
diasIngresados = parseInt(diasIngresados);
//operacion año
const año = Math.floor(diasIngresados / 365);
//operacion semana
const semana = Math.floor((diasIngresados % 365) / 7);
//operacion día
const dia = Math.floor((diasIngresados % 365) % 7);
//mostrar resulatado por consola
document.write(`Los ${diasIngresados} dias ingresados corresponden a ${año} años, ${semana} semanas y ${dia} días.`)
