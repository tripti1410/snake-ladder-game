function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

let playerOneScore = 0, playerTwoScore = 0

function PlayerOne() {
  const number = rollDice();
  //to show the player number
  if (number === 6) {
    document.querySelector(".js-button-2").classList.add("disabled");
    document.querySelector(".js-button-1").classList.remove("disabled");
  } else {
    document.querySelector(".js-button-1").classList.add("disabled");
    document.querySelector(".js-button-2").classList.remove("disabled");
  }

  document.querySelector(".js-dice-result").innerHTML = number + "  player 1";
  //clear the old box
  if (playerOneScore > 0) {
    let getBoardItem = `.board-item-${playerOneScore}`;
    document
      .querySelector(getBoardItem)
      .style.setProperty("--ticker-color", "transparent");
  }

  //set current box

  if (playerOneScore > 94 && playerOneScore <= 100) {
    if (
      (playerOneScore === 99 && number === 1) ||
      (playerOneScore === 98 && number === 2) ||
      (playerOneScore === 97 && number === 3) ||
      (playerOneScore === 96 && number === 4) ||
      (playerOneScore === 95 && number === 5)
    ) {
      console.log("inside 99");
      playerOneScore = playerOneScore + number;
      alert("player 1 winner");
    } else {
      playerOneScore;
    }

    if (playerOneScore === 98 && number === 1) {
      playerOneScore = playerOneScore + number;
    } else {
      playerOneScore;
    }

    if (playerOneScore === 97 && (number === 1 || number === 2)) {
      playerOneScore = playerOneScore + number;
    } else {
      playerOneScore;
    }

    if (
      playerOneScore === 96 &&
      (number === 1 || number === 2 || number === 3)
    ) {
      console.log("inside 96");
      playerOneScore = playerOneScore + number;
    } else {
      playerOneScore;
    }

    if (
      playerOneScore === 95 &&
      (number === 1 || number === 2 || number === 3 || number === 4)
    ) {
      console.log("inside 95");
      playerOneScore = playerOneScore + number;
    } else {
      playerOneScore;
    }
    let getNewBoardItem = `.board-item-${playerOneScore}`;
    document
      .querySelector(getNewBoardItem)
      .style.setProperty("--ticker-color", "red");
  } else {
    playerOneScore = playerOneScore + number;
    let getNewBoardItem = `.board-item-${playerOneScore}`;
    document
      .querySelector(getNewBoardItem)
      .style.setProperty("--ticker-color", "red");
  }
}

function PlayerTwo() {
  const number = rollDice();

  if (number === 6) {
    document.querySelector(".js-button-1").classList.add("disabled");
    document.querySelector(".js-button-2").classList.remove("disabled");
  } else {
    document.querySelector(".js-button-2").classList.add("disabled");
    document.querySelector(".js-button-1").classList.remove("disabled");
  }

  //to show the player number
  document.querySelector(".js-dice-result").innerHTML = number + "  player 2";
  //clear the old box
  if (playerTwoScore > 0) {
    let getBoardItem = `.board-item-${playerTwoScore}`;
    document
      .querySelector(getBoardItem)
      .style.setProperty("--ticker-color", "transparent");
  }

  //set current box

  if (playerTwoScore > 94 && playerTwoScore <= 100) {
    if (
      (playerTwoScore === 99 && number === 1) ||
      (playerTwoScore === 98 && number === 2) ||
      (playerTwoScore === 97 && number === 3) ||
      (playerTwoScore === 96 && number === 4) ||
      (playerTwoScore === 95 && number === 5)
    ) {
      console.log("inside 99");
      playerTwoScore = playerTwoScore + number;
      alert("player 1 winner");
    } else {
      playerTwoScore;
    }

    if (playerTwoScore === 98 && number === 1) {
      playerTwoScore = playerTwoScore + number;
    } else {
      playerTwoScore;
    }

    if (playerTwoScore === 97 && (number === 1 || number === 2)) {
      playerTwoScore = playerTwoScore + number;
    } else {
      playerTwoScore;
    }

    if (
      playerTwoScore === 96 &&
      (number === 1 || number === 2 || number === 3)
    ) {
      console.log("inside 96");
      playerTwoScore = playerTwoScore + number;
    } else {
      playerTwoScore;
    }

    if (
      playerTwoScore === 95 &&
      (number === 1 || number === 2 || number === 3 || number === 4)
    ) {
      console.log("inside 95");
      playerTwoScore = playerTwoScore + number;
    } else {
      playerTwoScore;
    }
    let getNewBoardItem = `.board-item-${playerTwoScore}`;
    document
      .querySelector(getNewBoardItem)
      .style.setProperty("--ticker-color", "green");
  } else {
    playerTwoScore = playerTwoScore + number;
    let getNewBoardItem = `.board-item-${playerTwoScore}`;
    document
      .querySelector(getNewBoardItem)
      .style.setProperty("--ticker-color", "green");
  }
}

function getLadderSteps (ladderClass, noOfSteps) {
  const ladderNode = document.querySelector(ladderClass)
  for(i=0; i<noOfSteps; i++) {
    const ladderSpan = document.createElement("span");
    ladderNode.appendChild(ladderSpan);
  }
}

window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
  getLadderSteps(".ladder-1", 4);
  getLadderSteps(".ladder-2", 7);
  getLadderSteps(".ladder-3", 19);
  getLadderSteps(".ladder-4", 7);
  getLadderSteps(".ladder-5", 7);
  getLadderSteps(".ladder-6", 7);
  getLadderSteps(".ladder-7", 5);
  getLadderSteps(".ladder-8", 6);
});


