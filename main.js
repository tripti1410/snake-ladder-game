var SnakeAndLadderBoard = (function() {
  function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
  }

  var playerOneScore = 0,
    playerTwoScore = 0;

  function checkScoreGreaterThan100(score, number) {
    if (score + number > 100) {
      score;
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
        score = 2;
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

  function showActiveInactivePlayer(active, inactive) {
    const buttonOne = document.querySelector(".js-button-1");
    const buttonTwo = document.querySelector(".js-button-2");
    if (active === 1) {
      buttonTwo.classList.add("disabled");
      buttonOne.classList.remove("disabled");
    } else {
      buttonOne.classList.add("disabled");
      buttonTwo.classList.remove("disabled");
    }
  }

  function getActivePlayer(number, playerNumber) {
    let active = number === 6 ? playerNumber : playerNumber % 2 + 1;
    let inactive = active % 2 + 1;

    return { active, inactive };
  }

  function clearPreviousPosition(score) {
    if (score > 0) {
      let getBoardItem = `.board-item-${score}`;
      return document
        .querySelector(getBoardItem)
        .style.setProperty("--ticker-color", "transparent");
    }
  }

  function playerOne() {
    //To roll the dice
    const number = rollDice();

    //To claar the previous position
    clearPreviousPosition(playerOneScore);

    //To show player is active or inactive based on dice number
    let { active, inactive } = getActivePlayer(number, 1);
    showActiveInactivePlayer(active, inactive);

    //To show the results on side(Need to fix this)
    document.querySelector(".js-dice-result").innerHTML = number + "  player 1";

    playerOneScore = checkScoreGreaterThan100(playerOneScore, number);
    playerOneScore = getScoreOnSnakeAndLadder(playerOneScore);

    if (playerOneScore === 100) {
      alert("player 1 is winner");
    } else {
      let getNewBoardItem = `.board-item-${playerOneScore}`;
      document
        .querySelector(getNewBoardItem)
        .style.setProperty("--ticker-color", "red");
    }
  }

  function playerTwo() {
    //To roll the dice
    const number = rollDice();

    //To claar the previous position
    clearPreviousPosition(playerTwoScore);

    //To show player is active or inactive based on dice number
    let { active, inactive } = getActivePlayer(number, 2);
    showActiveInactivePlayer(active, inactive);

    //To show the results on side(Need to fix this)
    document.querySelector(".js-dice-result").innerHTML = number + "  player 2";

    playerTwoScore = checkScoreGreaterThan100(playerTwoScore, number);
    playerTwoScore = getScoreOnSnakeAndLadder(playerTwoScore);

    if (playerTwoScore === 100) {
      alert("player 2 is winner");
    } else {
      let getNewBoardItem = `.board-item-${playerTwoScore}`;
      document
        .querySelector(getNewBoardItem)
        .style.setProperty("--ticker-color", "green");
    }
  }

  function createLadder(ladderClass, noOfSteps) {
    const ladderNode = document.querySelector(ladderClass);
    for (i = 0; i < noOfSteps; i++) {
      const ladderSpan = document.createElement("span");
      ladderNode.appendChild(ladderSpan);
    }
  }

  return { playerOne, playerTwo, createLadder };
})();

window.addEventListener("load", function(event) {
  SnakeAndLadderBoard.createLadder(".ladder-1", 4);
  SnakeAndLadderBoard.createLadder(".ladder-2", 7);
  SnakeAndLadderBoard.createLadder(".ladder-3", 19);
  SnakeAndLadderBoard.createLadder(".ladder-4", 7);
  SnakeAndLadderBoard.createLadder(".ladder-5", 7);
  SnakeAndLadderBoard.createLadder(".ladder-6", 7);
  SnakeAndLadderBoard.createLadder(".ladder-7", 5);
  SnakeAndLadderBoard.createLadder(".ladder-8", 6);
});
