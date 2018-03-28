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

var rows = [];
var columnArr = [];
var diagLtoR = [];
var columns = [];
var diagRtoL = [];

// Game set up
var createBtns = function() {
// Set up Grid 
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
}

// Game play
var play = function(event) {
	if (turn === 'p1') {
		this.style.background = "url(https://78.media.tumblr.com/avatar_6460333bf1d7_128.png)";
		p1moves.push(Number(event.target.id));
		turn = 'p2';
// Same code for player 2's turn
	} else if (turn === 'p2') {
		this.style.background = "url(https://i.pinimg.com/236x/41/95/96/4195964481cdb35817975b5ba3431756--orange-kittens-ginger-kitten.jpg)";
		p2moves.push(Number(event.target.id));
		turn = 'p1';
	}
	event.target.disabled = true;
//P1: calculate win 
	for (var i = 0; i < Number(gridLength.value); i++) {	
		if ((rows[i].every(elem => p1moves.indexOf(elem) > -1)) || (diagLtoR.every(elem => p1moves.indexOf(elem) > -1)) || (columns[i].every(elem => p1moves.indexOf(elem) > -1)) || (diagRtoL.every(elem => p1moves.indexOf(elem) > -1))) {
				console.log('Player1 Wins');
		}
	}
// P2: calculate win
	for (var i = 0; i < Number(gridLength.value); i++) { 	
		if ((rows[i].every(elem => p2moves.indexOf(elem) > -1)) || (diagLtoR.every(elem => p2moves.indexOf(elem) > -1)) || (columns[i].every(elem => p2moves.indexOf(elem) > -1)) || (diagRtoL.every(elem => p2moves.indexOf(elem) > -1))) {
				console.log('Player2 Wins');
		}
	}
}

// START GAME
startGame.addEventListener('click', createBtns);






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



