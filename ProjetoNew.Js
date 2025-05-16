let nome="Danilo_apelao"
let xp= 5000
let nivel;

function calcular(){
    if(xp<1000){
        nivel = "Ferro"
    }
    else if (xp>1001 && xp<2000){
        nivel = "Bronze"
    }

    else {
        nivel = "Radiante"
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
    console.log("O Herói de nome" + nome + " está no nível de " + nivel)

    //teste
}

