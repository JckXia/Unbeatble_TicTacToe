def score(game)
   if game.win?(player)
     return 10
    elsif game.win?(opponent)
     return -10
    else
      return 0

If current player wins the game, return 10
else, return -10
