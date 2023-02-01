

var moves = 0;
var turn = "x";

const grid = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]







function game(pos) {

  
  
  console.log("Position:", pos, "clicked");
  let itemId = "item" + pos;
  let box = document.getElementById(itemId);


if ((grid[pos-1] !== "x") && (grid[pos-1] !== "o")){

  moves += 1;

  if (turn === "x"){
    box.innerHTML = "⨉";
  } else{
    box.innerHTML = "〇";
  }

  grid[(pos-1)] = turn;
  
//~~~~~~~~  Check

  if (
    (grid[0] === grid[1] && grid[1] === grid[2]) ||
    (grid[3] === grid[4] && grid[4] === grid[5]) ||
    (grid[6] === grid[7] && grid[7] === grid[8]) ||
    (grid[0] === grid[3] && grid[3] === grid[6]) ||
    (grid[1] === grid[4] && grid[4] === grid[7]) ||
    (grid[2] === grid[5] && grid[5] === grid[8]) ||
    (grid[0] === grid[4] && grid[4] === grid[8]) ||
    (grid[2] === grid[4] && grid[4] === grid[6])) {

    gameEnd(turn);
    console.log("end")

  } else if (moves === 9){

    gameEnd("draw");


  }

  





  
  let disTurn = document.getElementById("displayTurn");

  if ((moves % 2) === 1){
    turn = "o";
    disTurn.innerHTML = "Noughts";

  } else{
    turn = "x";
    disTurn.innerHTML = "Crosses";

  }


  console.log(grid);// ======================

  
  
}
}


function gameEnd(winner) {

  if (winner === "x"){
    alert("Crosses Wins!");
    location.reload();
  
  }else if (winner === "o"){
  alert("Noughts Wins!");
  location.reload();

  }else{
  alert("It's a draw!");
  location.reload();
}
}










