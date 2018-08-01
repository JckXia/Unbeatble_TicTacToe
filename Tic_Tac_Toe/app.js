
//Util functions
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
   mboard:[              ['X',' ',' '],
                         ['O',' ',' '],
                         [' ',' ',' ']]
}
var human='O';
var AI='X';

//Get avaialble moves return an array of obejcts of possible location
function GetAvailableMoves(board){
  var list=[];
   for(var i=0;i<3;i++){
     for(var a=0;a<3;a++){
       if(board[i][a]==' '){
         list.push({x:i,y:a});
       }
     }
   }
   return list;
}
var k=GetAvailableMoves(board.mboard);
console.log(k[0].x);
console.log(GetAvailableMoves(board.mboard));
//Format outputs the board in a grid fashion
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

//Fullboard checks if player has a full board-->Useful for checking draw condition
function FullBoard(board){
   for(var i=0;i<3;i++){
     for(var s=0;s<3;s++){
       if(board[i][s]==' '){
         return false;
       }
     }
   }
   return true;
}

Format(board.mboard);

//CheckWin determines the winner at the end of a game
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

//This is the quote on quote final solution
function minimax(board,depth,isPlayer){
  var winner=checkWin(board).winner;
  if(winner=='X'){
     return 100;

  }
  if(winner=='O'){
    return -100;
  }
  if(FullBoard()){
    return 0;
  }
  if(isPlayer){

     var best=-1000;

     for(var i=0;i<3;i++){
       for(var j=0;j<3;j++){

         if(board[i][j]==' '){
           board[i][j]='X';
           best=max(best,minimax(board,depth+1,!isPlayer));
           board[i][j]=' ';
         }
       }
     }
     return best;
  }else{
    var best=1000;
    for(var i=0;i<3;i++){
      for(var j=0;j<3;j++){
         if(board[i][j]==' '){
            board[i][j]='O';
            best=min(best,minimax(board,depth+1,!isPlayer));
            board[i][j]=' ';

         }
      }
    }
    return best;
  }
}


function findBestMove(board){
   var bestVal=-1000;
   var row=-1;
   var col=-1;
   for(var i=0;i<3;i++){
     for(var j=0;j<3;j++){
          if(board[i][j]==' '){

             board[i][j]=AI;
             var moveVal=minimax(board,0,false);
             board[i][j]=' ';
             if(moveVal>bestVal){
                row=i;
                col=i;
                bestVal=moveVal;
             }
          }
     }
   }
   return {row:row,col:col};
}




var bestMove=findBestMove(board.mboard);
console.log(bestMove);



//Start playing

// Player makes a move
// AI thinks, makes a move
// Player makes a move
// AI thinks, makes a move ->
//
//When ai makes a move
