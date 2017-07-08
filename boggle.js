class Boogle {
  constructor(){
    this.board = []
    this.aZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  shakeABC(){
    // let i = 26
    // while(i > 0){
      let x = Math.floor(Math.random()*26)
      return this.aZ.charAt(x)
    //   this.for_input.push(this.aZ.charAt(x))
    //   i--
    // }
    // return this.for_input
  }
  makeBoard(x){
    for(let i = 0; i < x; i++){
      let rowBoard = []
      for(let j = 0; j < x; j++){
        let shake = this.shakeABC()
        rowBoard.push(shake)
      }
      this.board.push(rowBoard)
    }
    return this.board
  }

}

let play = new Boogle()
console.log(play.makeBoard(10));
