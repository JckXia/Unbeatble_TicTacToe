function min(a,b){
  if(a>b){
    return b;
  }
  return a;
}
function max(a,b){
  if(a>b){
    return a;
  }
  return b;
}



var board={
   mboard:[              ['X','O','X'],
                         ['O','O','X'],
                         ['X','O','_']]
}
var AI='O';
var human='X';
function Format(board){
  for(var a=0;a<3;a++){
   var string="| ";
   for(var i=0;i<3;i++){
     string+=board[a][i]+" | ";
   }
   console.log(string);
   console.log("------------");
   string="";
 }

}
//Format(board.mboard);
function isMovesLeft(board){
   for(var i=0;i<3;i++){
     for(var j=0;j<3;j++){
       if(board[i][j]=='_'){
         return true;
       }
     }
   }
   return false;
}

function FullBoard(board){
  for(var i=0;i<3;i++){
     for(var j=0;j<3;j++){
       if(board[i][j]=='_'){
         return false;
       }
     }
  }
  return true;
}
function Terminal(board){
  var winner=checkWin(board).winner;
   if(winner==AI||winner==human){
     swal({title:winner+" won! ",icon:"success",button:"restart"})
.then((value) => {
swal(`Game restarted!`);
location.reload();
});
   }
   else if(FullBoard(board)){

     swal({title:"Draw!",icon:"success",button:"restart"})
.then((value) => {
swal(`Game restarted!`);
location.reload();
});
   }
   Format(board);
}



function checkWin(board){
  //Horizontal checks
  if(board[0][0]==board[0][1]&&board[0][1]==board[0][2]&&board[0][0]!=' '){

      return {winner:board[0][0]};

  }
  else if(board[1][0]==board[1][1]&&board[1][1]==board[1][2]&&board[1][0]!=' '){

      return {winner:board[1][0]};
  }
  else if(board[2][0]==board[2][1]&&board[2][1]==board[2][2]&&board[2][0]!=' '){

        return {winner:board[2][0]};
  }
  //Vertical checks
  else if(board[0][0]==board[1][0]&&board[1][0]==board[2][0]&&board[0][0]!=' '){

     return {winner:board[0][0]};
  }
  else if(board[0][1]==board[1][1]&&board[1][1]==board[2][1]&&board[0][1]!=' '){

    return {winner:board[0][1]};
  }
  else if(board[0][2]==board[1][2]&&board[1][2]==board[2][2]&&board[0][2]!=' '){

    return {winner:board[0][2]};
  }
  //Diagonal check
  else if(board[0][0]==board[1][1]&&board[1][1]==board[2][2]&&board[0][0]!=' '){

      return {winner:board[0][0]};
  }
  else if(board[0][2]==board[1][1]&&board[1][1]==board[2][0]&&board[0][2]!=' '){

      return {winner:board[0][2]};
  }
  else {
    return {winner:"NULL"};
  }

}

function minimax(board,depth,isMax){
  var score=checkWin(board);

  if(score.winner==AI){
    return 10-depth;
  }
  if(score.winner==human){
    return -10-depth;
  }
  if(isMovesLeft(board)==false){
    return 0-depth;
  }


  if(isMax){
   var best=-1000;
   for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
      if(board[i][j]=='_'){
        board[i][j]=AI;
        best=max(best,minimax(board,depth+1,!isMax));
        board[i][j]='_';
      }
    }
   }
   return best;
  }
  else{
    var best=1000;
    for(var i=0;i<3;i++){
      for(var j=0;j<3;j++){
        if(board[i][j]=='_'){
          board[i][j]=human;
          best=min(best,minimax(board,depth+1,!isMax));
          board[i][j]='_';
        }
      }
    }
    return best;
  }

}

function findBestMove(board)
{
	var bestVal = -1000;
  var row=-1;
  var col=-1;


	// Traverse all cells, evalutae minimax function for
	// all empty cells. And return the cell with optimal
	// value.
	for (var i = 0; i<3; i++)
	{
		for (var j = 0; j<3; j++)
		{
			// Check if celll is empty
			if (board[i][j]=='_')
			{
				// Make the move
				board[i][j] = AI;

				// compute evaluation function for this
				// move.
				var moveVal = minimax(board, 0, false);

				// Undo the move
				board[i][j] = '_';

				// If the value of the current move is
				// more than the best value, then update
				// best/
				if (moveVal > bestVal)
				{
           row=i;
           col=j;
           bestVal=moveVal;
				}
			}
		}
	}
  return {row:row,col:col};
}

//var bestMove=findBestMove(board.mboard);
//console.log(bestMove);
