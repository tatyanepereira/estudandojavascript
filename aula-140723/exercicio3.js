//Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.

function encontrarMaiorNumero(vetor) {
    if (vetor.length === 0) {
        return undefined;
    }
    let maior = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
        maior = vetor[i];
        }
    }
    return maior;
}
const numeros = [10, 5, 45, 20, 3];
const maiorValor = encontrarMaiorNumero(numeros);
console.log(maiorValor); // Output: 20
