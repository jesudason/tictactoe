// variables
var numOfBtns = 0;
var btnId;
var brk;
var gridLength = document.querySelector('.gridLength');
var startGame = document.querySelector('.start');
var player1 = document.querySelector('.player1');
var player2 = document.querySelector('player2');
var nameSpan1 = document.querySelector('.name1');
var nameSpan2 = document.querySelector('.name2');
var gridArea = document.querySelector('.gridArea');
var turn = 'p1';
var	allBtns = [];
var p1moves = [];
var p2moves = [];

nameSpan1.textContent = "Player 1";
nameSpan2.textContent = "Player 2";

// TAKE USER DETAILS:

// nameSpan1.textContent = player1.value;
// nameSpan2.textContent = player2.value;

// GRID DISPLAY:

// if (gridLength.value === 4) {
// 	btnDisplay.style.color = "blue";
// }
var play = function(event) {
	if (turn === 'p1') {
		this.style.background = "url(https://78.media.tumblr.com/avatar_6460333bf1d7_128.png)";
		p1moves.push(event.target.id);
		turn = 'p2';
	} else if (turn === 'p2') {
		this.style.background = "url(https://i.pinimg.com/236x/41/95/96/4195964481cdb35817975b5ba3431756--orange-kittens-ginger-kitten.jpg)";
		p2moves.push(event.target.id);
		turn = 'p1';
	}
	event.target.disabled = true;
}
var grid = [];
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
	// allBtns = document.querySelectorAll('.button');
	for (var j = 0; j < allBtns.length; j += Number(gridLength.value)) {
		
		grid.push(allBtns.slice(j, j + Number(gridLength.value)));
		// console.log(j + gridLength.value);
		// console.log(allBtns);
	}
}



	

// var createBtns = function(gridLength) {
// 	var grid = [];
// 	for (var i = 0; i < gridLength.value; i += gridLength.value) {
// 		grid.push(allBtns.slice(i, i + gridLength.value))}
// 	}
// } 















// START GAME

startGame.addEventListener('click', createBtns);





// Grid patterns - four patterns:


// horizontal: start at 1, plus one, until gridLength. repeat until GL * Gl
// vertical: horizontal[i] + gridLength
// diagLtoR: start at 1, + (GL+1), until GL*Gl
// diagRtoL: start at GL, + (gl-1), until GL*GL(minus gl-1)


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



