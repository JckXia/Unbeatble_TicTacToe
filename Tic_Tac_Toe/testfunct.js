var board={
   mboard:[['k','p','X'],['t','Z','R'],['X','Z','Z']],
   currentPlayer:'X'
}

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
