let boxs = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newButton = document.querySelector(".new");
let container  = document.querySelector(".container2");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winPatterns  = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];



boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            box.style.color = "#28587b";
            turn0 = false;
            console.log("clicked O");
        } else {
            box.innerText = "X";
            box.style.color = "#eeeeff";
            turn0 = true;
            console.log("clicked X");
        }
        box.disabled = true;
        count++;

        const isWinner =  checkWinner(); 

        if(count === 9 && !isWinner) {
           gameDraw();
        }

    });
});
const resetBtn = () => {
    turn0 = true;
    enableBtn();
    count = 0;
    container.classList.add("hide");
}


const gameDraw = () => {
    msg.innerText = `Game was a draw!`;
    container.classList.remove("hide");
    disableBtn();
}


const disableBtn = () => {
    for (let box of boxs) {
        box.disabled = true;
    }
}

const enableBtn = () => {
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations , the winner is ${winner}`;
    container.classList.remove("hide");
    disableBtn();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxs[pattern[0]].innerText;
      let pos2Val = boxs[pattern[1]].innerText;
      let pos3Val = boxs[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };


reset.addEventListener("click", resetBtn);
newButton.addEventListener("click", resetBtn);