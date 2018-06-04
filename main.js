function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

var playerOneScore = 0,
playerTwoScore = 0;

function getOrBounceScore(score, number) {
  if (score > 94 && score <= 100) {
    if (
      (score === 99 && number === 1) ||
      (score === 98 && number === 2) ||
      (score === 97 && number === 3) ||
      (score === 96 && number === 4) ||
      (score === 95 && number === 5)
    ) {
      console.log("inside 99");
      score = score + number;
      alert("player 1 winner");
    } else {
      score;
    }

    if (score === 98 && number === 1) {
      score = score + number;
    } else {
      score;
    }

    if (score === 97 && (number === 1 || number === 2)) {
      score = score + number;
    } else {
      score;
    }

    if (score === 96 && (number === 1 || number === 2 || number === 3)) {
      console.log("inside 96");
      score = score + number;
    } else {
      score;
    }

    if (
      score === 95 &&
      (number === 1 || number === 2 || number === 3 || number === 4)
    ) {
      console.log("inside 95");
      score = score + number;
    } else {
      score;
    }
  } else {
    score = score + number;
  }
  return score;
}

function getScoreOnSnakeAndLadder(score) {
  switch (score) {
    case 1:
      score = 23;
      break;
    case 5:
      score = 14;
      break;
    case 21:
      score = 42;
      break;
    case 36:
      score = 58;
      break;
    case 29:
      score = 85;
      break;
    case 82:
      score = 100;
      break;
    case 71:
      score = 92;
      break;
    case 49:
      score = 67;
      break;
    case 64:
      score = 59;
      break;
    case 98:
      score = 48;
      break;
    case 31:
      score = 28;
      break;
    case 26:
      score = 8;
      break;
    case 15:
      score = 1;
      break;
    case 93:
      score = 72;
      break;
    case 73:
      score = 17;
      break;
    case 39:
      score = 19;
      break;
  }
  return score;
}

function getActivePlayer(number, playerNumber) {
  const buttonOne = document.querySelector(".js-button-1");
  const buttonTwo = document.querySelector(".js-button-2");
  if (playerNumber === 1) {
    if (number === 6) {
      buttonTwo.classList.add("disabled");
      buttonOne.classList.remove("disabled");
    } else {
      buttonOne.classList.add("disabled");
      buttonTwo.classList.remove("disabled");
    }
  }
  if (playerNumber === 2) {
    if (number === 6) {
      buttonOne.classList.add("disabled");
      buttonTwo.classList.remove("disabled");
    } else {
      buttonTwo.classList.add("disabled");
      buttonOne.classList.remove("disabled");
    }
  }
}

function clearPreviousPosition(score) {
  if (score > 0) {
    let getBoardItem = `.board-item-${score}`;
    return document
      .querySelector(getBoardItem)
      .style.setProperty("--ticker-color", "transparent");
  }
}

function PlayerOne() {
  const number = rollDice();

  clearPreviousPosition(playerOneScore);

  getActivePlayer(number, 1);

  document.querySelector(".js-dice-result").innerHTML = number + "  player 1";

  if (playerOneScore < 100 || playerOneScore > 0) {
    playerOneScore = getOrBounceScore(playerOneScore, number);
    playerOneScore = getScoreOnSnakeAndLadder(playerOneScore);

    let getNewBoardItem = `.board-item-${playerOneScore}`;
    document
      .querySelector(getNewBoardItem)
      .style.setProperty("--ticker-color", "red");
  } else if (playerOneScore === 100) {
    alert("player 1 is winner");
  }
}

function PlayerTwo() {
  debugger
  const number = rollDice();
  clearPreviousPosition(playerTwoScore);

  getActivePlayer(number, 2);
  
  document.querySelector(".js-dice-result").innerHTML = number + "  player 2";

  if (playerTwoScore < 100 || playerTwoScore > 0) {
    playerTwoScore = getOrBounceScore(playerTwoScore, number);
    playerTwoScore = getScoreOnSnakeAndLadder(playerTwoScore);

    let getNewBoardItem = `.board-item-${playerTwoScore}`;
    document
      .querySelector(getNewBoardItem)
      .style.setProperty("--ticker-color", "green");
  } else if (playerTwoScore === 100) {
    alert("player 2 is winner");
  }
}

function getLadderSteps(ladderClass, noOfSteps) {
  const ladderNode = document.querySelector(ladderClass);
  for (i = 0; i < noOfSteps; i++) {
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
