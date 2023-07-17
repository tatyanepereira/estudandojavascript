// Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.
let num = 0;
if(num > 0) {
    console.log("Positivo");
}
else if(num < 0) {
    console.log("Negativo");
}
else {
    console.log("Zero");
}

// Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.
let idade = 600;
if(idade < 0 || idade > 150) {
    console.log("Valor de idade inválido!");
}
else if(idade >= 18) {
    console.log("Você é maior de idade!");
}
else {
    console.log("Você é menor de idade!");
}

// Escreva um programa que receba três números e determine qual deles é o maior.
let a = 50;
let b = 50;
let c = 120;
if(a > b && a > c) {
    console.log("Maior numero é: " + a);
}
else if(b > a && b > c) {
    console.log("Maior numero é: " + b);
}
else if(c > a && c > b) {
    console.log("Maior numero é: " + c);
}
else {
    console.log("O maior numero esta duplicado");
}

// Crie um programa que receba dois números e verifique se seu produto é par ou ímpar.
let num1 = 15;
let num2 = 3;
let produto = num1 * num2;
if(produto % 2 == 0) {
    console.log(produto + " é Par");
}
else {
    console.log(produto + " é Ímpar");
}

// Escreva um programa que receba o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.
let dia = "hoje";
if(dia == "segunda-feira" || dia == "terca-feira" || dia == "quarta-feira" || dia == "quinta-feira" || dia == "sexta-feira") {
    console.log(dia + " é dia útil");
}
else if(dia == "domingo" || dia == "sabado") {
    console.log(dia + " é final de semana");
}
else {
    console.log("Digite o dia da semana com letras minusculas sem acentos!");
}

// Faça um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).
let diaNum = 0;
switch(diaNum) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break;
    case 4:
        console.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-Feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido. O numero deve ser 1 - 7.");
}