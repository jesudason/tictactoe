// Grid set-up variables
var numOfBtns = 0;
var btnId;
var brk;
var gridLength = document.querySelector('.gridLength');
var gridArea = document.querySelector('.gridArea');
var startGame = document.querySelector('.start');
var main = document.querySelector('main');
// Player/turn variables
var player1 = document.querySelector('.player1');
var player2 = document.querySelector('player2');
var turn = 'p1';
var p1moves = [];
var p2moves = [];
// preparing arrays to calculate winning patterns
var	allBtns = [];
var columnArr = [];
var columns = [];
var rows = [];
var diagLtoR = [];
var diagRtoL = [];
// Game commentary/win counter
var gameSummary = document.querySelector('.gameSummary');
var curryTally = document.querySelector('.curryTally');
var westTally = document.querySelector('.westTally');
// win game
var westWin = 0;
var curryWin = 0;
var round = 0;
var nextGame = document.querySelector('.nextGame');

var startPlayer = function() {
	if (turn === 'p1') {
		gameSummary.textContent = 'Player 1 to start. Your move Curry';
		gameSummary.appendChild(document.createElement('BR'));
	} else {
		gameSummary.textContent = 'Player 2 to start. Your move Westbrook';
		gameSummary.appendChild(document.createElement('BR'));
	}
}

var addTextNode = function(text) {
  	var newtext = document.createTextNode(text);
  	gameSummary.appendChild(newtext);
  }

// check for winner
var p1Win = function() {
	for (var i = 0; i < Number(gridLength.value); i++) {	
		if ((rows[i].every(elem => p1moves.indexOf(elem) > -1)) || (diagLtoR.every(elem => p1moves.indexOf(elem) > -1)) || (columns[i].every(elem => p1moves.indexOf(elem) > -1)) || (diagRtoL.every(elem => p1moves.indexOf(elem) > -1))) {
//If P1 wins 
			round += 1;
			curryWin +=1;
			document.querySelectorAll('.button').forEach(function(btn) {
				btn.disabled = true;
			});
			gameSummary.appendChild(document.createElement('BR'));
			curryTally.textContent = 'Curry: ' + curryWin + ' wins';
			return addTextNode('Round ' + round + ' won by Curry! Congrats Player 1');
		}
	}
}

var p2Win = function() {
	for (var i = 0; i < Number(gridLength.value); i++) { 	
		if ((rows[i].every(elem => p2moves.indexOf(elem) > -1)) || (diagLtoR.every(elem => p2moves.indexOf(elem) > -1)) || (columns[i].every(elem => p2moves.indexOf(elem) > -1)) || (diagRtoL.every(elem => p2moves.indexOf(elem) > -1))) {
//If P2 wins 
				round += 1;
				westWin +=1;
				document.querySelectorAll('.button').forEach(function(btn) {
					btn.disabled = true;
				});
				gameSummary.appendChild(document.createElement('BR'));
				westTally.textContent = 'Westbrook: ' + westWin + ' wins';
				curryTally.appendChild(document.createElement('BR'));
				return addTextNode('Westbrook wins Round ' + round + '! Congrats Player 2');
				
		}
	}
}

// Overall winner declared
var gameOver= function()	{
	if (westWin === 4) {
		gameSummary.appendChild(document.createElement('BR'));
		gameSummary.appendChild(document.createElement('BR'));
		addTextNode('Game Over: Russel Westbrook Wins MVP! Congrats player 2');
		alert('Game Over: Russel Westbrook Wins MVP! Congrats Player 2');
	} else if (curryWin === 4) {
		gameSummary.appendChild(document.createElement('BR'));
		gameSummary.appendChild(document.createElement('BR'));
		addTextNode('Steph Curry Wins MVP! Congrats player 1');
		alert('Game Over: Steph Curry Wins MVP! Congrats Player 1');		
	}
}

// Game set up
main.style.display = 'none';
nextGame.style.display = 'none';
gameSummary.textContent = 'Player 1 to start. Your move Curry';
gameSummary.appendChild(document.createElement('BR'));

// Set up Grid 
var createBtns = function() {
	for (var i = 0; i < (gridLength.value*gridLength.value); i++) {
		btnId = document.createElement("button");
		btnId.setAttribute('class','button');
		btnId.setAttribute('id',i);
		btnId.addEventListener('click', play);
		allBtns.push(i);
		if (numOfBtns !== 0 && numOfBtns % gridLength.value ===0) {
			brk = document.createElement("br");	
			gridArea.appendChild(brk)
			gridArea.appendChild(btnId);
		} else {
			gridArea.appendChild(btnId);
		}
		numOfBtns += 1;
	}
// turn rows into arrays
	for (var j = 0; j < allBtns.length; j += Number(gridLength.value)) {
		rows.push(allBtns.slice(j, j + Number(gridLength.value)));
	}
// calculate diagonal left to right
	for (var k = 0; k < rows.length; k++) {
		diagLtoR.push(rows[k][k]);
	}
// create array with buttons in order of columns
	for (var i = 0; i < rows.length; i ++) {
		for (var j = 0; j < rows.length; j ++) {
			columnArr.push(rows[j][i]);
		}
	}
// turn columns into arrays of winning patterns
	for (var i = 0; i <columnArr.length; i += rows.length) {
		columns.push(columnArr.slice(i, i + rows.length));
	}
// calculate diagonal right to left	
	for (var i = 0; i < rows.length; i++) {
		diagRtoL.push(rows[i][rows.length-1-i]);
	}
// controls for grid size
	if (gridLength.value > 7) {
		alert("That's an insane size court for one-on-one. Go small or go home.");
		main.style.display = 'none';
	} else if (gridLength.value < 3) {
		alert("You're never gonna make MVP training on a court that small");
		main.style.display = 'flex';
	} else {
		main.style.display = 'flex';
	}
	nextGame.style.display = 'block';
}
// Game play


var play = function(event) {
	if (turn === 'p1') {
		
		this.style.background = "url(http://tsnimages.tsn.ca/ImageProvider/TeamLogo?seoId=golden-state-warriors&width=128&height=128)";
		p1moves.push(Number(event.target.id));
		turn = 'p2';
// Same code for player 2's turn
	} else if (turn === 'p2') {
		this.style.background = "url(http://tsnimages.tsn.ca/ImageProvider/TeamLogo?seoId=oklahoma-city-thunder&width=128&height=128)";
		p2moves.push(Number(event.target.id));
		turn = 'p1';
	}
	event.target.disabled = true;
//P1: calculate win 
	p1Win();
	p2Win();
// P2: calculate win
	gameOver();
}


var playAgain = function() {
	
	document.querySelectorAll('.button').forEach(function(btn) {
		btn.removeAttribute('style');
	});
	document.querySelectorAll('.button').forEach(function(btn) {
		btn.removeAttribute('disabled');
	});
	p1moves = [];
	p2moves = [];
	startPlayer();
	
}

// START GAME
startGame.addEventListener('click', createBtns);

nextGame.addEventListener('click', playAgain);





// Naughts and crosses - game plan

/*
DISPLAY
3x3 grid (or grid for x dimensions)
buttons
instructions
display player turn
display player's action
*/

/*
LOGIC

Basic structure:

input player1 name and player 2 name
player 1 = naughts
player 2 = crosses
if button is selected and player turn = player1; diplay cross and disable button
if button is selected and player turn = player2; display naught and disable button

Calculate winner:

function to check for various patterns.
after 4 turns have been taken, run function.
function checks if arr1, arr2 or arr3 is made of only x or only o.
function checks if index1, index2, or index3 is made of only x or only o.
function checks if arr1[index1], arr2[index2], arr3[index3] is made of only x or only o.
function checks if arr1[index3], arr2[index2], arr3[index1] is made of only x or only o.
if any of these functions returns true and player turn = player 1; alert player 1 is the winner.
if any of these functions returns true and player turn = player 2; alert player 2 is the winner.
*/



