//Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.


const palavras = ['Olá', 'mundo', 'do', 'JavaScript'];
function concatenarPalavras(vetor) {
    return vetor.reduce(function(acumulador, palavra) {
    return acumulador + palavra;
    }, '');
}

resultado = concatenarPalavras(palavras);
console.log(resultado); // Output: "OlámundodoJavaScript"

