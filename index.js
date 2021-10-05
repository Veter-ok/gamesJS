const crossesSign = "X";
const zerosSign = "O";
let playerSign = zerosSign;
let AIsign = crossesSign;
let gameStart = false;
let field = [0,0,0,0,0,0,0,0,0]
let combinations = [
	[4, 0, 8],
	[4, 0, 2, 1],
	[4, 0, 2, 6],
	[4, 3, 5],
	[4, 3, 2, 6],
	[4, 3, 2, 7, 8]
]
let move = 0;
let combination_now = combinations[0]


function reset(){
	for (let cell of cells){
		cell.innerText = "";
		cell.style.background = "white";
	}
	field = [0,0,0,0,0,0,0,0,0]
	move = 0
	combination_now = combinations[0]
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
		field[event.target.id-1] = 1;
		checkCell();
		AImove();
	}
});

function AImove(){
	if (field[combination_now[move]] === 0){
		cells[combination_now[move]].innerText = AIsign;
		field[combination_now[move]] = 2;
	}else{
		combinations.splice(0, 1)
		//console.log("-----")
		for (let combination of combinations){
			//console.log(combination, combinations)
			if (combination.length-1 >= move){
				if (field[combination[move]] === 0){
					combination_now = combination;
					cells[combination_now[move]].innerText = AIsign;
					field[combination_now[move]] = 2;
					break;
				}
			}
		}
		//console.log("-----")
	}
	checkCell()
	move += 1;
}

function deleteCombinations(arr){
	for (let index of arr){
		delete combinations[index]
	}
}

function checkCell(){
	if (field[0] === field[1] && field[1] === field[2] && field[0] != 0){
		cells[0].style.background = "green";
		cells[1].style.background = "green";
		cells[2].style.background = "green";
	}else if (field[3] === field[4] && field[4] === field[5] && field[3] != 0){
		cells[3].style.background = "green";
		cells[4].style.background = "green";
		cells[5].style.background = "green";
	}else if (field[6] === field[7] && field[7] === field[8] && field[6] != 0){
		cells[6].style.background = "green";
		cells[7].style.background = "green";
		cells[8].style.background = "green";
	}else if (field[0] === field[3] && field[3] === field[6] && field[0] != 0){
		cells[0].style.background = "green";
		cells[3].style.background = "green";
		cells[6].style.background = "green";
	}else if (field[1] === field[4] && field[4] === field[7] && field[1] != 0){
		cells[1].style.background = "green";
		cells[4].style.background = "green";
		cells[7].style.background = "green";
	}else if (field[2] === field[5] && field[5] === field[8] && field[2] != 0){
		cells[2].style.background = "green";
		cells[5].style.background = "green";
		cells[8].style.background = "green";
	}else if (field[0] === field[4] && field[4] === field[8] && field[0] != 0){
		cells[0].style.background = "green";
		cells[4].style.background = "green";
		cells[8].style.background = "green";
	}else if (field[2] === field[4] && field[4] === field[6] && field[2] != 0){
		cells[2].style.background = "green";
		cells[4].style.background = "green";
		cells[6].style.background = "green";
	}
}