class soccerPlayer {
nome;
idade;
tipo;
ataque;

constructor (nome, idade, tipo, ataque){
this.nome = nome;
this.idade = idade;
this.tipo = tipo;
this.ataque = ataque;
}
}

let player = new soccerPlayer
player.nome= "Neymar";
player.idade= 33;
player.tipo= "jogador de futebol";
player.ataque="paradinha";

console.log(`O ${player.tipo} ${player.nome} de ${player.idade} anos, atacou usando a ${player.ataque}.`)


        
      


    