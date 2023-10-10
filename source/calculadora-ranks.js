let saldo = criarSaldoDeVitorias(125, 15)
let rank = createLevelRank(saldo)
console.log("O heroi tem saldo de " + saldo + " vitorias e está no rank de nivel : " + rank)

function criarSaldoDeVitorias(vitoria, derrota){
    let saldoVitoria = vitoria - derrota
    return saldoVitoria
}

function createLevelRank(saldo){
    let levelRank

    if (saldo <= 10) {
        levelRank = "Ferro"
    } else if (saldo > 10 && saldo <= 20) {
        levelRank = "Bronze"
    } else if (saldo > 20 && saldo <= 50) {
        levelRank = "Prata"
    } else if (saldo > 50 && saldo <= 80) {
        levelRank = "Ouro"
    } else if (saldo > 80 && saldo <= 90) {
        levelRank = "Diamante"
    } else if (saldo > 90 && saldo <= 100) {
        levelRank = "Lendário"
    } else if (saldo > 100) {
        levelRank = "Imortal"
    }

    return levelRank
}