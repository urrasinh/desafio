
// Ejercicio Nro 4
//ingreso de datos del usuario y cambio de dato a Int
var numero1 = prompt("Ingrese el primer número: ");
numero1 = parseInt(numero1);
var numero2 = prompt("Ingrese el primer número: ");
numero2 = parseInt(numero2);
var numero3 = prompt("Ingrese el primer número: ");
numero3 = parseInt(numero3);
var numero4 = prompt("Ingrese el primer número: ");
numero4 = parseInt(numero4);
var numero5 = prompt("Ingrese el primer número: ");
numero5 = parseInt(numero5);
//operaciones aritméticas
const sumar = numero1 + numero2 + numero3 + numero4 + numero5;
const promedio = sumar / 5;
//mostrar resultados por consola
document.write(`la suma de todos los números es ${sumar}<br>`);
document.write(`El promedio de los número ingresados es ${promedio}`);