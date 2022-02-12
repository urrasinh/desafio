
//Ejercicio Nro 2
// Ingreso de datos del usuario y cambio dato tipo float
var C = prompt("Ingrese temperatura en grados celcius: ");
C = parseFloat(C);
// Convertidor celcius a kelvin
const K = C + 273.15;
// Convertidor a fahrenheit
const F = (C * 9 / 5) + 32;
// Muestra por consola
document.write(`${C} grados celcius son ${K} grados Kelvin <br>`);
document.write(`${C} grados celcius son ${F} grados Fahrenheit <br>`);
30