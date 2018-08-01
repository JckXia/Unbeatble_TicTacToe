

$( document ).ready(function() {

  function makeChange(action,board,player){
    var x=action.x;
    var y=action.y;
      var obj=$(".cell");
     if(player==AI){
       board[x][y]=AI;

         obj[x*3+y].innerText=AI;
     } else{
       board[x][y]=human;
       obj[x*3+y].innerText=human;
     }
  }



  console.log("Document ready");
  var board={
     mboard:[              ['_','_','_'],
                           ['_','_','_'],
                           ['_','_','_']]
  }
AI='O';
human='X';

$('input[name=selection]').change(function(){
  human= $( 'input[name=selection]:checked' ).val();
 // console.log(value);
 if(human=='O'){
   AI='X';
 }else{
   AI='O';
 }
 console.log('Human '+human);
 console.log('AI '+AI);
});

$(".restart").click(function(){
  if(AI=='X'){
   console.log('AI starts');
   var bestMove=findBestMove(board.mboard);

   if(bestMove.row>=0&&bestMove.col>=0){
  makeChange({x:bestMove.row,y:bestMove.col},board.mboard,AI);
  console.log(bestMove);
}

  }
  $(".cell").click(function(event){

    var Player_x=Math.floor(event.target.id/3);
    var Player_y=event.target.id%3;
   makeChange({x:Player_x,y:Player_y},board.mboard,human);

   var bestMove=findBestMove(board.mboard);

   if(bestMove.row>=0&&bestMove.col>=0){
  makeChange({x:bestMove.row,y:bestMove.col},board.mboard,AI);
  console.log(bestMove);
}

  Terminal(board.mboard);


  });
});

});
