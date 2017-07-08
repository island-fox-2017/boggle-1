var main = []


for (var i = 0; i < 4; i++) {
  var temp = []
  for (var j = 0; j < 4; j++) {
    var random = Math.floor((Math.random() * 25) + 65);
    temp.push(String.fromCharCode(random))
  }
  main.push(temp)
}

console.log(main);
