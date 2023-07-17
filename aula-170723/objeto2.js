class Pessoa {
    nome;
    idade;
    email;
    cor;
}

let pessoa1 = new Pessoa();
pessoa1.nome = "Gabriel";
pessoa1.idade = 21;
pessoa1.email = "gabriel@exemplo.com";
pessoa1.cor = "Branco";

console.log(pessoa1);

const pessoa2 = {
    nome: "Taty",
    idade: 24,
    email: "aline@exemplo.com" 
}

console.log(pessoa2);

let objeto1 = { nome: "Bruna", curso: "JavaScript" };
let objeto2 = objeto1; // não é feito uma copia do objeto, e sim da referencia dele na memoria
objeto1.nome = "Bruna Muller";
console.log(objeto1);
console.log(objeto2);