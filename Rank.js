Saldo(99, 8)
let HeroName = "Supremo Remo"
let Score = WinScore
let Ranking

function Saldo(Win,Lose){
    WinScore = Win - Lose
    return WinScore   
}

if (Score <= 10){Ranking = 'Ferro'
    } else if (Score <= 20){Ranking = 'Bronze'
    } else if (Score <= 50){Ranking = 'Prata'
    } else if (Score <= 80){Ranking = 'Ouro'
    } else if (Score <= 90){Ranking = 'Diamante'
    } else if (Score <= 100){Ranking = 'Lendário'
    } else {Ranking = 'Imortal'}
        
    
console.log("O Heroi " + HeroName + " tem saldo de " + Score + " e está no nível " + Ranking)


