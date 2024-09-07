console.log("Hello World")

function getComputerChoice(){
    let randomNumber = Math.random()*3
    console.log(randomNumber)
    if (randomNumber <= 1){
        return "Rock";
    } else if (randomNumber > 1 && randomNumber <= 2){
        return "Scissor";
    } else if (randomNumber > 2 && randomNumber <= 3){
        return "Paper";
    }
}

console.log(getComputerChoice())