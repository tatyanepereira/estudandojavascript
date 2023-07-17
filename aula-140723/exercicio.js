//Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.

function somarElementos(vetor) {
    let soma = 0;
    vetor.forEach(function(elemento) {
        soma += elemento;
    });
    return soma;
}
const numeros = [1, 2, 3, 4, 5];
const resultado = somarElementos(numeros);
console.log(resultado);


//Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.

//function concatenarPalavras(vetor) {
//    return vetor.reduce(function(acumulador, palavra) {
//    return acumulador + palavra;
//    }, '');
//}
//const palavras = ['Olá', 'mundo', 'do', 'JavaScript'];
//resultado = concatenarPalavras(palavras);
//console.log(resultado); // Output: "OlámundodoJavaScript"




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

const numeros = [10, 5, 8, 20, 3];
const maiorValor = encontrarMaiorNumero(numeros);
console.log(maiorValor); // Output: 20


//Crie uma função que receba um vetor de números e retorne a média dos elementos.

//Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.

//Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.

//Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.

//Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array.