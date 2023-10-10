let saldo = criarSaldoDeVitorias(125, 15)
let rank = createLevelRank(saldo)
console.log("O heroi tem saldo de vitorias : " + saldo + " e está no rank de nivel : " + rank)

function criarSaldoDeVitorias(vitoria, derrota){
    let saldoVitoria = vitoria - derrota
    return saldoVitoria
}

function createLevelRank(saldo){
    let levelRank
    switch (saldo) {
        case saldo <= 10:
            levelRank = "Ferro"
            break;
        case saldo <= 10:
            levelRank = "Bronze"
            break;    
        case saldo <= 10:
            levelRank = "Prata"
            break;    
        case saldo <= 10:
            levelRank = "Ouro"
            break;    
        case saldo <= 10:
            levelRank = "Diamante"
            break;    
        case saldo <= 10:
            levelRank = "Lendário"
            break;    
        case saldo > 100:
            levelRank = "Imortal"
            break;                            
        default:
            break;
    }
    return levelRank
}