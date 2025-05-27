//* 1 ex de lógica: 
console.log("ola mundo!")

let nome1 = "Kaue"
let idade2 = 22
let cidade = "São Paulo"
console.log("Meu nome é " + nome1 + ", tenho " + idade2 + " anos, e moro em " + cidade)
console.log(`Meu nome é ${nome1}, tenho ${idade2} anos, e moro em ${cidade}`)

//* 2 ex de logica:
let numero1 = 20
let numero2 = 5

let soma = numero1 + numero2
let multiplicacao = numero1 * numero2 
let subtracao = numero1 - numero2
let divisao = numero1 / numero2 

console.log(soma, multiplicacao, subtracao, divisao)

let nome = "Kaue"
let idade = 22
console.log(typeof nome)
console.log(typeof idade)

//* 3 ex de logica 
let idade1 = 35
if ( idade1 >= 18 ) {
    console.log("se for maior de 18 anos pode dirigir");
}
else {
    console.log( "voce não pode dirigir ainda")
}

let numero = 7

function verificarParOuImpar(numero) {
if ( numero / 2) {
    console.log("O numero é par")
}
else {
    console.log("O numero é impar")
}
}
verificarParOuImpar()

//* 4 ex de logica 
let numero3 = 1

while (numero3 <=10 ){
    console.log(numero3)
    numero3++
}
console.log("\n")

let numero7 = 3 

while (numero7 <=30){
    if (numero7 % 3 === 0 ){
        console.log(numero7)
    }
        numero7++
}

//* ex 5 de logica 
let numeroG = 20
let numeroA = 10


function calcular(){
    return numeroG + numeroA
}
console.log(calcular())



function calcular2(numeroSoma1, numeroSoma2){
    return numeroSoma1 + numeroSoma2
}

console.log(calcular2(1221, 2240))

let nomeK = "Kaue"

function saudar (nome){
    return " ola " + nome
}
console.log(saudar(nomeK))

//* ex 6 de logica 

const nomes = ['kaue', 'danilo', 'Felipe', 'Martin', 'Luis'];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

const numeros = [4 + 10 + 65 + 876 + 1]
const soma9 = numeros 

console.log( " a soma é:", soma9)
let soma10 = 0
for ( let i = 0; i < numeros.length; i++) {
    soma10 = soma10 + numeros[i]
}




//* ex 7 de logica

class Pessoa {
    nome;
    idade;
    profissao; 

    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

//método 1
let kaue = new Pessoa 
kaue.nome = " Kaue "
kaue.idade = 22
kaue.profissao = " programador"

//método 2
kaue = new Pessoa(" Kaue ", 22, " programador")

console.log(kaue)


console.log(kaue.nome, kaue.idade, kaue.profissao)

for (let propriedade in kaue){
    console.log(kaue[propriedade])
}

console.log(kaue["nome"])
console.log(kaue.nome)



