function getComputerChoice(){
    let randomNumber = Math.random()*3;
    if (randomNumber <= 1){
        return "rock";
    } else if (randomNumber > 1 && randomNumber <= 2){
        return "scissor";
    } else if (randomNumber > 2 && randomNumber <= 3){
        return "paper";
    }
}

function getHumanChoice(){
    let humanInput = prompt("input your choice from rock, paper, scissor", "rock");
    humanInput = humanInput.toLowerCase();
    switch (humanInput){
        case("rock" || "paper" || "scissor"):
        return humanInput;
        break;
        default:
            return "WORNG INPUT! Please select from rock, paper and scissor"
    }   
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return "YOU LOSE! Paper beats rock";
    } else if (humanChoice === "rock" && computerChoice === "scissor"){
        humanScore++;
        return "YOU WON! rock beats scissor";
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "YOU WON! paper beats rock";
    } else if (humanChoice === "paper" && computerChoice === "scissor"){
        computerScore++;
        return "YOU LOSE! scissor beats paper";
    } else if (humanChoice === "scissor" && computerChoice === "rock"){
        computerScore++;
        return "YOU LOSE! rock beats scissor";
    } else if (humanChoice === "scissor" && computerChoice === "paper"){
        humanScore++
        return "YOU WON! scissor beats paper";
    } else {
        return "NO RESULT! Play another match"
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    return `You Score is ${humanScore} \n Computer Score is ${computerScore}`
}

console.log(playGame())
