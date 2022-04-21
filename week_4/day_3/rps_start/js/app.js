document.addEventListener('DOMContentLoaded', () => {
    console.log("JS Loaded")

    const buttons = document.querySelectorAll('.choice')
    for(let button of buttons){
        button.addEventListener('click', handleChoice)
    }
})

const handleChoice = function(event){
    const playerChoice = event.target.value
    const computerChoice = getRandomChoice()
    const winner = play(playerChoice, computerChoice)
    showWinner(playerChoice, computerChoice, winner)
    addScore(winner)
}

const addScore = function(winner){
    if(winner === "you win... want head?"){
        const playerScore = document.querySelector('#p-score')
        playerScore.innerHTML++
    }else if(winner === "you lose... sucka"){
        const computerScore = document.querySelector('#c-score')
        computerScore.innerHTML++
    }
}

const showWinner = function(player, computer, winner){
    const resultDiv = document.querySelector('#winner')
    resultDiv.innerHTML = ''

    const choiceElement = document.createElement('p')
    choiceElement.textContent = "You chose "+ player + ". Computer chose " + computer + "."
    resultDiv.appendChild(choiceElement)

    const winnerElement = document.createElement('h2')
    winnerElement.textContent = winner
    if(winner === "you win... want head?"){
        winnerElement.classList.add('win')
    }else if(winner === "you lose... sucka"){
        winnerElement.classList.add('lose')
    }
    resultDiv.appendChild(winnerElement)
}

const play = function(player, computer){
    if(player === "rock" && computer === "paper"){
    return "you lose... sucka"
    }
    if(player === "rock" && computer === "scissors"){
        return "you win... want head?"
        }
        if(player === "paper" && computer === "rock"){
            return "you win... want head?"
            }
            if(player === "paper" && computer === "scissors"){
                return "you lose... sucka"
                }
                if(player === "scissors" && computer === "paper"){
                    return "you win... want head?"
                    }
                    if(player === "scissors" && computer === "rock"){
                        return "you lose... sucka"
                        }
                        if(player === computer){
                            return "its a draw... boring"
                        }
}

const getRandomChoice = function(){
    const choices = ["rock", "paper", "scissors"]
    const choice = choices[Math.floor(Math.random()*choices.length )]
    return choice
}
