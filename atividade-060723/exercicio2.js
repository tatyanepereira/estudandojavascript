
  // Solicita a idade da pessoa
  //Escreva um programa em javascript que receba três números e determine qual deles é o maior

let idade = 20;

  // Verifica se a idade é um número válido
    if (!isNaN(idade)) {
    // Converte a idade para um número inteiro
    idade = parseInt(idade);
    // Verifica se a idade é maior ou igual a 18
    if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }
    } else {
    console.log("Idade inválida. Por favor, digite um número.");
}
