class BoggleBoard {
  constructor() {
    this.board = []
    this.letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  shake(num) {
    if(num>1) {
      for (var i=0; i<num; i++) {
        this.board.push([])
        for (var j=0; j<num; j++) {
          this.board[i].push(this.randomLetter());
        }
      }
      return this.board;
    }
    else {return 'Papan permainan minimal 2x2'}
  }
  randomLetter() {
    let index = Math.floor(Math.random()*this.letter.length);
    let huruf = this.letter.charAt(index)
    // this.board.push(huruf)
    return huruf
    // return this.board
  }
}

let newGame =  new BoggleBoard()
// console.log(newGame.randomLetter())
console.log(newGame.shake(10))
// console.log(newGame.board)


//ascii A-Z 65-90
