

  var board;
  const player = "0";
  const computer = "x";
  const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6,7 , 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  var squares = document.querySelectorAll(".squares");
  play();

  function clickAble(square){
    fill(square.target.id, player)
  }

  function fill(squareId, player) {
    board[squareId] = player;
    document.getElementById(squareId).innerText = player;
    document.getElementById(squareId).style.backgroundColor = "#8000805c";
  }

  function play() {
    board = Array.from(Array(9).keys());
    for (var i = 0; i < squares.length; i++) {
      squares[i].innerText = "";
      squares[i].style.removeProperty("background-color");
      squares[i].addEventListener("click", clickAble, false)
    }
  };

//
// function winner() {
//   for (var i = 0; i < winning.length; i++) {
//     if () {
//      return window.alert("You Win !")
//     }
//     return window.alert("Try again !")
//   }
// }
