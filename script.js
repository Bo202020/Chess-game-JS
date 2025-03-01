const board = document.querySelector(".board");

const pieceNames = {
  P: "pawn-white",
  R: "rook-white",
  N: "knight-white",
  B: "bishop-white",
  Q: "queen-white",
  K: "king-white",
  p: "pawn-black",
  r: "rook-black",
  n: "knight-black",
  b: "bishop-black",
  q: "queen-black",
  k: "king-black",
};
const initialPositions = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];
let currentSquare, currentRow;
for (let i = 0; i < 8; i++) {
  currentRow = document.createElement("div");
  currentRow.classList.add("row");

  let flag = i % 2 === 0;

  for (let j = 0; j < 8; j++) {
    currentSquare = document.createElement("span");
    currentSquare.classList.add("square");

    if (flag) {
      currentSquare.classList.add("white");
    } else {
      currentSquare.classList.add("black");
    }
    let piece = initialPositions[i][j];
    if (piece) {
      let img = document.createElement("img");
      img.src = `pieces/${pieceNames[piece]}.svg`;
      img.classList.add("piece");
      img.setAttribute("draggable", true);
      currentSquare.appendChild(img);
    }
    flag = !flag;
    currentRow.append(currentSquare);
  }

  board.append(currentRow);
}
