function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

let playerOneScore = 0,
  playerTwoScore = 0;

function PlayerOne() {
  const number = rollDice();
  //to show the player number
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
  document.querySelector(".js-dice-result").innerHTML = rollDice();
}
