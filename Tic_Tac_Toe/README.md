Unbeatable tic tac toe game utilizes whats called a minimax algorithm
It is a recursive algorithm which will either a-> tie the game or b-> always win

Description of algorithm:
A score is assigned to end game conditions. From X's perspective: If one wins, you
get 10 points. Else, you lose and lost 10 points. If you draw, no points is assigned.
In other words, all conditions are explored prior to making a move on the board

If the game is over, return the score from X's perspective. (check)

Otherwise get a list of new game states for every possible move
Create a scores list
For each of these states add the minimax result of that state to the scores list
If it's X's turn, return the maximum score from the scores list
If it's O's turn, return the minimum score from the scores list
 
