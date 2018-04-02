# tictactoe
GA project 1

Click here to play my game: https://jesudason.github.io/tictactoe/

##Usage Instructions

Player one starts the first round. Each round alternates which player starts. The game is scored best out of seven, so the game is programmed that the first player to four points wins.

###Technologies used / cool tech

Cursor css from http://www.cursors-4u.com/

#### Approach to solving the problem

My strength is more with Javascript than with css, so I approached this project with the goal of challenging myself with the Javascript and mastering the basics of CSS. I challenged myself in JS by allowing the user to choose the grid size (increasing the complexity of the logic), and for CSS focused on a basic theme with a simple color scheme and general marketability. 

To begin, my method was to first work out a function that would return all possible winning patterns, regardless of grid size as my game allows the user to choose this. I then created functions to track the players' moves, to then see with each turn if either of the players' moves contained any of the winning move patterns.

This was the overall strategy to the core logic of the game. I then added features to enhance the usability, and prevent user error or other potential faults to the game. Some of these additional features include disabling buttons, after they've been clicked, to prevent the space being reselected; disabling all buttons after the game ends to prevent users continuing to play after the score was announced (thus affecting the win count); and displaying whose turn it is to start the round, so that the alternating start each turn doesn't cause any confusion.


##### Next steps...

The next stage for this game is to improve it's web responsiveness - it can currently be played on a range of screen sizes, but does not maximise space. I had also hoped to animate the player images with gifs, based on players winning or losing, and to find a more attractive solution to the game alerts at the end of the game.