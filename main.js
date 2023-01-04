const board = [
    null, 1, null, 2, null, 3, null, 4,
    null, 5, null, 6, null, 7, null, 8,
    null, 9, null, 10, null, 11, null, 12,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, 13, null, 14, null, 15, null, 16,
    null, 17, null, 18, null, 19, null, 20,
    21, null, 22, null, 23, null, 24, null
  ]


  let findPawn = function (pawnId) {
    let parsed = parseInt(pawnId);
    return board.indexOf(parsed);
  };
  

  const cells = document.querySelectorAll("td");
  let blacksPawns = document.querySelectorAll("p");
  let whitesPawns = document.querySelectorAll("div");
  const blackTurn = document.querySelectorAll(".black-turn");
  const whiteTurn = document.querySelectorAll(".white-turn");
  const divider = document.querySelector("#divider");
  
  let turn = true;
  let blackScore = 12;
  let whiteScore = 12;
  let playerPawns;
  
  let selectedPawn = {
    pawnId: -1,
    indexOfBoardPawn: -1,
    isKing: false,
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusSeventhSpace: false,
    minusNinthSpace: false,
    minusFourteenthSpace: false,
    minusEighteenthSpace: false
  }
  

  function givePawnsEventListeners() {
    if (turn) {
      for (let i = 0; i < blacksPawns.length; i++) {
        blacksPawns[i].addEventListener("click", getPlayerPawns);
      }
    }  else {
      for (let i = 0; i < whitesPawns.length; i++) {
        whitesPawns[i].addEventListener("click", getPlayerPawns);
      }
    }
  }

  // givePawnsEventListeners()


function getPlayerPawns() {
  if (turn) {
    playerPawns = blacksPawns;
  } else {
    playerPawns = whitesPawns;
  }
  removeCellonClick();
  resetBorders();
}


function removeCellonClick() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeAttribute("onclick");
  }
}


function resetBorders() {
  for (let i = 0; i < playerPawns.length; i++) {
    playerPawns[i].style.border = "3px dashed gray";
  }
  resetSelectedPawnProperties();
  getSelectedPawn();
}


function resetSelectedPawnProperties() {
  selectedPawn.pawnId = -1;
  selectedPawn.pawnId = -1;
  selectedPawn.isKing = false;
  selectedPawn.seventhSpace = false;
  selectedPawn.ninthSpace = false;
  selectedPawn.fourteenthSpace = false;
  selectedPawn.eighteenthSpace = false;
  selectedPawn.minusSeventhSpace = false;
  selectedPawn.minusNinthSpace = false;
  selectedPawn.minusFourteenthSpace = false;
  selectedPawn.minusEighteenthSpace = false;
}


function getSelectedPawn() {
  selectedPawn.pawnId = parseInt(Event.target.id);
  selectedPawn.indexOfBoardPawn = findPawn(selectedPawn.pawnId);
  isPawnKing();
}


function isPawnKing() {
  if (document.getElementById(selectedPawn.pawnId).classList.contains("king")) {
    selectedPawn.isKing = true;
  }  else {
    selectedPawn.isKing = false;
  }
  getAvailableSpaces();
}

function getAvailableSpaces() {
  if (board[selectedPawn.indexOfBoardPawn + 7] === null &&
    cells[selectedPawn.indexOfBoardPawn + 7].classList.contains("noPawn") !== true) {
      selectedPawn.seventhSpace = true;
    }
    if (board[selectedPawn.indexOfBoardPawn + 9] === null &&
      cells[selectedPawn.indexOfBoardPawn + 9].classList.contains("noPawn") !== true) {
        selectedPawn.ninthSpace = true;
      }
      if (board[selectedPawn.indexOfBoardPawn - 7] === null &&
        cells[selectedPawn.indexOfBoardPawn - 7].classList.contains("noPawn") !== true) {
          selectedPawn.minusSeventhSpace = true;
        }
        if (board[selectedPawn.indexOfBoardPawn - 9] === null &&
          cells[selectedPawn.indexOfBoardPawn - 9].classList.contains("noPawn") !== true) {
            selectedPawn.minusNinthSpace = true;
          }
          checkAvailableJumpSpaces();
}

function checkAvailableJumpSpaces() {
  if (turn) {
    if (board[selectedPawn.indexOfBoardPawn + 14] === null
      && cells[selectedPawn.indexOfBoardPawn + 14].classList.contains("noPawn") !== true
      && board[selectedPawn.indexOfBoardPawn + 7] >= 12) {
        selectedPawn.fourteenthSpace = true;
      }
      if (board[selectedPawn.indexOfBoardPawn + 18] === null
        && cells[selectedPawn.indexOfBoardPawn + 18].classList.contains("noPawn") !== true
        && board[selectedPawn.indexOfBoardPawn + 9] >= 12) {
          selectedPawn.fourteenthSpace = true;
        }
        if (board[selectedPawn.indexOfBoardPawn - 14] === null
          && cells[selectedPawn.indexOfBoardPawn - 14].classList.contains("noPawn") !== true
          && board[selectedPawn.indexOfBoardPawn - 7] >= 12) {
            selectedPawn.fourteenthSpace = true;
          }
          if (board[selectedPawn.indexOfBoardPawn - 18] === null
            && cells[selectedPawn.indexOfBoardPawn - 18].classList.contains("noPawn") !== true
            && board[selectedPawn.indexOfBoardPawn - 7] >= 12) {
              selectedPawn.fourteenthSpace = true;
            }
  }  else {
    if (board[selectedPawn.indexOfBoardPawn + 14] === null
      && cells[selectedPawn.indexOfBoardPawn + 14].classList.contains("noPawn") !== true
      && board[selectedPawn.indexOfBoardPawn + 7] < 12 && board[selectedPawn.indexOfBoardPawn + 7] !== null) {
        selectedPawn.fourteenthSpace = true;
      }
      if (board[selectedPawn.indexOfBoardPawn + 18] === null
        && cells[selectedPawn.indexOfBoardPawn + 18].classList.contains("noPawn") !== true
        && board[selectedPawn.indexOfBoardPawn + 9] < 12 && board[selectedPawn.indexOfBoardPawn + 9] !== null) {
          selectedPawn.eighteenthSpace = true;
        }
        if (board[selectedPawn.indexOfBoardPawn - 14] === null cells[selectedPawn.indexOfBoardPawn - 14].classList.contains("noPawn") !== true
          && cells[selectedPawn.indexOfBoardPawn - 7] < 12
          && board[selectedPawn.indexOfBoardPawn - 7] !== null) {
            selectedPawn.minusFourteenthSpace = true;
          }
          if (board[selectedPawn.indexOfBoardPawn - 18] === null cells[selectedPawn.indexOfBoardPawn - 18].classList.contains("noPawn") !== true
          && cells[selectedPawn.indexOfBoardPawn - 9] < 12
          && board[selectedPawn.indexOfBoardPawn - 9] !== null) {
            selectedPawn.minusEighteenthSpace = true;
          }
  }
  checkPawnConditions();
}
