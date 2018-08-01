function score(game){
    if(win(game).winner=='X'){
      return 10;
    }
    else if(win(game).winner=='O'){
      return -10;
    }else{
      return 0;
    }
}

function minimax(game){
  //If game is at end state,
  //return the score of the game
     if(isTerminal(game)){
       return score(game);
     }
     var scores=[];
     var moves=[];
     //Populate scores array

     //Get available moves returns mpossible moves in this format
     //   (one move away)
     //[[MAT],[MAT]] ,where MAT is a configuration of the matrix

     //// NOTE: Next step should consist of an array of possible address on the board
     //[[0,2],[0,1],[1,1]]
     //Implement get_aviable_moves
    var nextSteps=get_avilable_moves(game);

     for(var i=0;i<nextSteps.length;i++){
         //Possibleboard Cofig is the resultant board from making a step
         //Implement get_new_state
         var possibleBoardConfig=get_new_State(nextSteps[i]);
         scores.push(minimax(possibleBoardConfig));
         moves.push(nextSteps[i]);
     }

     //Do min/max calculation
     if(game.active_turn=='X'){
          //Find the max score, from the scores array.
        var max_score_index=scores.each_width_inex.max[1];
         choice =moves[max_score_inex]
        return scores[max_score_index]
     }
     else if(game.active.turn=='O'){
       var min_score_index=scores.each_with_index.min[1];
       choice=moves[min_score_index]
       return scores[min_score_inex]
     }
}
//When this is run inside a perfect player class, the ultimate choice of best move is stored in the choice variable.
//Which is then used to return the new game state in which the current player has moved
//In this context, choice would have to be a global varaible for it to work


function score(board){
    if(checkWin(board).winner=='X'){
      return 10;
    }
    else if(checkWin(board).winner=='O'){
      return -10;
    }
    else {
      return 0;
    }
}


//Idea: pass current player as a data along with minimax.
//Switch up every time we are
function minimax(board){
     if(checkWin(board).winner!='NULL'){
       return score(board);
     }
     var scores=[];
     var moves=[];


    //Here, we are just looking for empty spots
    //nextStep: [[0,2],[0,1],[1,1]]
    //NOTE:Implement GetAvailableMoves
   var nextSteps=GetAvailableMoves(board);
    for(var i=0;i<nextStep.length;i++){
      //possible_game: [[X,X,X],[0,0,0],[X,X,X]]
      //NOTE: Implement GetNewBoard
       var possible_game=GetNewBoard(nextSteps[i]);
       //NOTE, currentPLayer is a GLOBAL variable
       //Somewhere in the GetNewBoard function, we should have something as the following:\
       /*
           if(currentPlayer=='X'){
           currentAIPlayer='O'
         }else{
         currentAIPlayer='X'
       }
       */
       scores.push(minimax(possible_game));
        moves.push(nextStep[i]);
    }
    if(currentAIPlayer=='X'){
      var maxInd=findmax(scores);
      choices
    }
}

function minmax(board,depth,isMainPlayer){
  if(is_terminal(board)){
    return score(game);
  }
    var nextSteps=GetAvailableMoves(board);
  if(isMainPlayer){
    var bestval=-INFINITY;
    for(var i=0;i<nextSteps.lenght;i++){
      var val=minmax(board,depth+1,0);
       bestval=max(bestVal,value)
    //  return bestval;
    }
return bestval;
}else{
  bestval=INF;
  for(var i=0;i<nextSteps.length;i++){
     var val=minimax(board,depth+1,true);
     bestval=min(bestval,value)

  }
  return bestval;
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
  if(winner=='Draw'){
    return 0;
  }
  if(isPlayer){
    var best=-1000;
    //GetAvailable boards get a list
    //a list of moves in this format: [[0,2],[1,1],[3,1]]
    var nextMoves=GetAvailableMoves(board);
    for(var i=0;i<nextMoves.length;i++){
       var move=nextMoves[i];
       var x=moves[0];
       var y=opve[1];
       board[i][j]='X';
       best=max(best,minimax(board,depth+1,!isPlayer));
       board[i][j]=' ';
    }
    return best;
  }else{
    var best=1000;
       var nextMoves=GetAvailableMoves(board);
       for(var i=0;i<nextMoves.length;i++){
         var move=nextMoves[i];
         var x=move[0];
         var y=move[1];
         board[x][y]='O';
         best=min(best,minimax(board,depth+1,true));
         board[x][y]=' ';
       }
       return best;
  }
}

function findBestMove(board){
   var bestVal=-1000;
   var row=-1;
   var col=-1;
  var nextMoves=GetAvailableMoves(board);
  for(var i=0;i<nextMoves.length;i++){
      var move=nextMoves[i];
      var x=move[0];
      var y=move[1];
      board[x][y]='X';
      var moveVal=minimax(board,0,false);
      board[x][x]=' ';

      if(moveVal>bestVal){
         row=i;
         col=j;
         bestVal=moveVal;
      }
  }
  return {row:row,col:col}
}
var difficulty=$(".diff_val").val();
  $(".diff_val").change(function(){
    console.log("Check");
     difficulty=$(".diff_val").val();
     console.log(difficulty);
  });

   var player=$('input[name=selection]:checked').val();
   $(".pl").click(function(){
     console.log("Clicked");
     player=$('input[name=selection]:checked').val();
     console.log(player);
   });

   $(".restart").click(function(){

   })
