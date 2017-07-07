'use strict'
//65 - 90
function random(){
  let rand = Math.floor((Math.random() * 25) + 65);
  return rand;
}

function shake(angka){
  let board = [];
  for(let i = 0; i < angka; i++)
  {
    let row = [];
    for(let j = 0; j < angka; j++)
    {
      row.push(String.fromCharCode(random()));
    }
    board.push(row);
  }
  console.log(board);
}

shake(4);
