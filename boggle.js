class Boggle {
  constructor() {
  }

  shake(num) {
    let board = [];
    for(let i = 0; i < num; i++) {
      board[i] = [];
      for(let j = 0; j < num; j++) {
        board[i][j] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      }
    }
    console.log(board);
    return board;
  }
}

let boggle = new Boggle();
boggle.shake(10);
