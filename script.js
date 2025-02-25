const board = document.querySelector(".board");
let currentSquare, currentRow;
for (let i = 0; i < 8; i++) {
  let currentRow = document.createElement("div");
  currentRow.classList.add("row");

  let flag = i % 2 === 0;

  for (let j = 0; j < 8; j++) {
    let currentSquare = document.createElement("span");
    currentSquare.classList.add("square");

    if (flag) {
      currentSquare.classList.add("white");
    } else {
      currentSquare.classList.add("black");
    }

    flag = !flag;

    currentRow.append(currentSquare);
  }

  board.append(currentRow);
}
