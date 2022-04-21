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
    console.log(winner)
    showWinner(playerChoice, computerChoice, winner)
    addScore(winner)
}

const addScore = function(winner){
    if(winner === "I win, hopefully I got your foreskin"){
    const playerScore = document.querySelector('#p-score')
    playerScore.innerHTML++
}else if(winner === "I lost, you better not have took my foreskin computer!"){
    const computerScore = document.querySelector('#c-score')
    console.log(computerScore)
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
    if(winner === "I win, hopefully I got your foreskin"){
        winnerElement.classList.add('win')
    }else if(winner === "I lost, you better not have took my foreskin computer!"){
        winnerElement.classList.add('lose')
    }
    resultDiv.appendChild(winnerElement)
}

const play = function(player, computer){
    if(player === "penis" && computer === "scissors"){
    return "I lost, you better not have took my foreskin computer!"
    }
    if(player === "penis" && computer === "vagina"){
        return "I win, hopefully I got your foreskin"
        }
        if(player === "scissors" && computer === "penis"){
            return "I win, hopefully I got your foreskin"
            }
            if(player === "scissors" && computer === "vagina"){
                return "I lost, you better not have took my foreskin computer!"
                }
                if(player === "vagina" && computer === "scissors"){
                    return "I win, hopefully I got your foreskin"
                    }
                    if(player === "vagina" && computer === "penis"){
                        return "I lost, you better not have took my foreskin computer!"
                        }
                        if(player === computer){
                            return "We both get to keep our foreskin👀"
                        }
}
const getRandomChoice = function(){
    const choices = ["penis", "vagina", "scissors"]
    const choice = choices[Math.floor(Math.random()*choices.length )]
    return choice
}