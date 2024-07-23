let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChioce = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#7f63ce";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
    msg.innerText = `You win. Your ${userChoice} beats  ${compChoice}`;
    msg.style.backgroundColor = "green";
}else {
    compScore++
    compScorePara.innerHTML = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
}
}

const playGame = (userChoice) => {
   //Generate compChoce
   const compChoice = gencompChioce();

   if (userChoice === compChoice) {
    drawGame();
   } else  {
    let userWin = true;
    if (userChoice === "rock") {
        //scissors,paper
        userWin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper") {
        //rock,scissors
        userWin = compChoice === "scissors" ? false : true;
    }else {
        //paper,rock
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userchoice);
        playGame(userChoice)
    })
})