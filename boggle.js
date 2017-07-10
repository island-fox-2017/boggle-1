"use strict"

function boogleBoard(size) {
    let alphabets = ['A', 'B', 'C', 'D', 'E', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    var board = [];
    
    for (let rows = 0; rows < size; rows++) {
        
        let temp = []
//        board.push([]);
        for (let col = 0; col < size; col++) {
            let random = Math.floor(Math.random() * 26)
            temp.push(alphabets[random]);
        }
        board.push(temp);
    }
    
    return board;
};

console.log(boogleBoard(4));