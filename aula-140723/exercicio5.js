//Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.

function elevarAoQuadrado(array) {
    const arrayElevadoAoQuadrado = array.map(numero => numero ** 2);
    return arrayElevadoAoQuadrado;
}
const numeros = [1, 2, 3, 4, 5];
const resultado = elevarAoQuadrado(numeros);
console.log(resultado); // Output: [1, 4, 9, 16, 25]
