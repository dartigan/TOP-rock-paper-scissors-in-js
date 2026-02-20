const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function getHumanChoice(i) {
    return choices[i];
}


function checkWinner(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice){
        console.log("Tie !!!");
    }

    // user loses
    else if (
        (humanChoice === "rock" && computerChoice ==="paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    )
        {        
            console.log("Computer wins");
            computerScore += 1;
        }

    else {
        console.log("Human wins");
        humanScore += 1;
    }
};


function checkHumanSelection (humanChoice) {
    while (!choices.includes(humanChoice)) {
        console.log("Please enter a number between 0-2 only!!!");
        humanChoice = getHumanChoice(parseInt(prompt("Enter 0: Rock, 1:Paper, 2: Scissors")));
    }

    return humanChoice
}



while (
    (humanScore < 3 && computerScore < 3)
){
    // Computer selects 
    let computerChoice = getComputerChoice();
    // Get user input
    let humanChoice = getHumanChoice(parseInt(prompt("Enter 0: Rock, 1:Paper, 2: Scissors")));

    humanChoice = checkHumanSelection(humanChoice)

    console.log(`User selected ${humanChoice} and Computer selected ${computerChoice}`);
    checkWinner(humanChoice, computerChoice);
    console.log(`Total score: User: ${humanScore}, Computer: ${computerScore}`);
}

document.getElementById("finalscore").innerHTML =
    `<strong>Total score: User: ${humanScore}, Computer: ${computerScore}</strong>`;