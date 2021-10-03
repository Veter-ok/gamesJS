const crossesSign = "X";
const zerosSign = "O";
let playerSign = zerosSign;
let AIsign = crossesSign;
let gameStart = false;
let field = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
]
let combinations = [
	[4, 0, 8],
	[4, 0, 2, 1],
	[4, 0, 2, 6]
]
let move = 0;
let combinations_now = combinations[0]


function reset(){
	for (let cell of cells){
		cell.innerText = "";
	}
	field = [[0,0,0],[0,0,0],[0,0,0]]
	move = 0
	combinations_now = combinations[0]
}

window.onload = function(){
	const crosses = document.getElementById("crosses");
	const zeros = document.getElementById("zeros");
	cells = document.querySelectorAll(".cell")
	reset();
}

document.addEventListener("click", function(event){
	if (event.target.id == "crosses"){
		reset();
		zeros.className = "";
		crosses.className = "active";
		playerSign = crossesSign;
		AIsign = zerosSign;
	}else if(event.target.id == "zeros"){
		reset();
		zeros.className = "active";
		crosses.className = "";
		playerSign = zerosSign;
		AIsign = crossesSign;
		AImove();
	}
});

document.addEventListener("click", function(event){
	if (event.target.className == "cell"){
		gameStart = true;
		event.target.innerText = playerSign;
		let column = Math.floor((Number(event.target.id)-1)/3);
		let row = Number(event.target.id) - (column*3)-1;
		field[column][row] = 1;
		checkCell();
		AImove();
	}
});

function AImove(){
	console.log(combinations_now)
	if (cells[combinations_now[move]].textContent === ""){
		console.log(true)
		cells[combinations_now[move]].innerText = AIsign;
	}else{
		console.log(false)
		searchCombination()
		AImove()
	}
	move += 1;
}

function searchCombination(){
	for (let combination of combinations){
		if (cells[combination[move]].textContent === ""){
			combinations_now = combination;
		}
	}
}

function checkCell(){
	if (field[0][0] === field[0][1] && field[0][1] === field[0][2] && field[0][0] != 0){
		cells[0].style.background = "green";
		cells[1].style.background = "green";
		cells[2].style.background = "green";
	}else if (field[1][0] === field[1][1] && field[1][1] === field[1][2] && field[1][0] != 0){
		cells[3].style.background = "green";
		cells[4].style.background = "green";
		cells[5].style.background = "green";
	}else if (field[2][0] === field[2][1] && field[2][1] === field[2][2] && field[2][0] != 0){
		cells[6].style.background = "green";
		cells[7].style.background = "green";
		cells[8].style.background = "green";
	}else if (field[0][0] === field[1][0] && field[1][0] === field[2][0] && field[0][0] != 0){
		cells[0].style.background = "green";
		cells[3].style.background = "green";
		cells[6].style.background = "green";
	}else if (field[0][1] === field[1][1] && field[1][1] === field[2][1] && field[0][1] != 0){
		cells[1].style.background = "green";
		cells[4].style.background = "green";
		cells[7].style.background = "green";
	}else if (field[0][2] === field[1][2] && field[1][2] === field[2][2] && field[0][2] != 0){
		cells[2].style.background = "green";
		cells[5].style.background = "green";
		cells[8].style.background = "green";
	}else if (field[0][0] === field[1][1] && field[1][1] === field[2][2] && field[0][0] != 0){
		cells[0].style.background = "green";
		cells[4].style.background = "green";
		cells[8].style.background = "green";
	}else if (field[0][2] === field[1][1] && field[1][1] === field[2][0] && field[0][2] != 0){
		cells[2].style.background = "green";
		cells[4].style.background = "green";
		cells[6].style.background = "green";
	}
}