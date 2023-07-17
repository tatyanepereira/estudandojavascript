//Crie uma função que receba um vetor de números e retorne a média dos elementos.


function calcularMedia(vetor) {
    if (vetor.length === 0) {
    return undefined;
    }
    const soma = vetor.reduce((acumulador, numero) => acumulador + numero);
    const media = soma / vetor.length;
    return media;
}

const numeros = [10, 50, 88, 20, 30];
const media = calcularMedia(numeros);
console.log(media); // Output: 9.2
