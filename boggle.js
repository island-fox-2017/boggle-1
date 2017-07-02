"use strict"

class BoggleBoard {
  constructor(ukuran_board) {
    this.ukuran_board = ukuran_board,
    this.papan = [];
  }

  shake() {
    let abjad = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for (let baris = 0; baris < this.ukuran_board; baris++) {
      this.papan[baris] = [];
      for (let kolom = 0; kolom < this.ukuran_board; kolom++) {
        this.papan[baris][kolom] = abjad[Math.floor(Math.random()*26)];
      }
    }
    return this.papan;
  }
}

var game = new BoggleBoard(4)
console.log(game.shake());
