const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const num3 = parseFloat(prompt("Ingrese el tercer número:"));


// Identificar el número mayor
const mayor = Math.max(num1, num2, num3);

// Identificar el número menor
const menor = Math.min(num1, num2, num3);

// Determinar el centro (excluyendo mayor y menor), se excluyen con la finalidad de que el centro sea el número que no es ni el mayor ni el menor
if (num1 !== mayor && num1 !== menor) {
        centro = num1;
    } else if (num2 !== mayor && num2 !== menor) {
        centro = num2;
    } else {
        centro = num3;
    }

// Manejar casos donde hay números repetidos
if (num1 === num2 || num1 === num3 || num2 === num3) {  // Linea de codigo consultada con la finalidad de que si hay números repetidos, se maneje el caso

        // Si hay dos números iguales, el centro es el repetido
        if (num1 === num2) { // Linea compara si num1 es igual a num2 para asignar el valor a centro
            centro = num1;
        } else if (num1 === num3) { // Linea compara si num1 es igual a num3 para asignar el valor a centro
            centro = num1;
        } else {
            centro = num2; // Linea compara si num2 es igual a num3 para asignar el valor a centro
        }
    }

// Mostrar el orden de los números
console.log(`Orden de los números: ${menor}, ${centro}, ${mayor}`);
