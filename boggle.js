'use strict'

class BoggleBoard {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  shake(size) {
    this.size = size;
    this.metaBoardPhosis();
    console.log(this.data);
  }

  metaBoardPhosis() {
    for (let i = 0; i < this.size; i++) {
      this.data.push([]);
      for (let j = 0; j < this.size; j++) {
        this.data[i].push(this.generateRandomAlphabet())
      }
    }
  }

  generateRandomAlphabet() {
    return String.fromCharCode(65 + Math.floor(Math.random()*26));
  }
}

let args = process.argv.splice(2).join();

let board = new BoggleBoard();
board.shake(args?args:4);
