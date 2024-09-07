console.log("Hello World")

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
    let humanChoice = prompt("input your choice from rock, paper, scissor", "rock");
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice){
        case("rock" || "paper" || "scissor"):
        return humanChoice;
        break;
        default:
            return "WORNG INPUT! Please select from rock, paper and scissor"
    }   
}

console.log(getHumanChoice())