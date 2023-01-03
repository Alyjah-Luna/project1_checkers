const board = [
    null, 0, null, 1, null, 2, null, 3,
    null, 4, null, 5, null, 6, null, 7,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, 12, null, 13, null, 14, null, 15,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
  ]
  
  const cells = document.querySelectorAll("td");
  let blacksPieces = document.querySelectorAll("p");
  let whitesPieces = document.querySelectorAll("span");
  const blackTurn = document.querySelectorAll(".black-turn");
  const whiteTurn = document.querySelectorAll(".white-turn");
  const divider = document.querySelector("#divider");
  
  let turn = true;
  let blackScore = 12;
  let whiteScore = 12;
  let playerPieces;
  
  let selectedPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
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
  