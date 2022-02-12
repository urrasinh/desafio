// Ejercicio Nro 1
// Ingreso de datos del usuario y cambio de dato a Int
var numero1 = prompt("Ingrese el primer número: ");
numero1 = parseInt(numero1);
var numero2 = prompt("Ingrese el segundo número: ");
numero2 = parseInt(numero2);
// Operaciones aritméticas
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;
const modulo = numero1 % numero2;
// Escribir en el documento los resultados correspondientes
document.write(`El resultado de sumar ${numero1} y ${numero2} es ${suma}<br>`);
document.write(`El resultado de restar ${numero1} y ${numero2} es ${resta}<br>`);
document.write(`El resultado de multiplicar ${numero1} y ${numero2} es ${multiplicacion}<br>`);
document.write(`El resultado de dividir ${numero1} y ${numero2} es ${division}<br>`);
document.write(`El resultado de modulo ${numero1} y ${numero2} es ${modulo}<br>`);

