let playerSign = "O";
let AIsign = "X";
let gameStart = false;
let field = [0,0,0,0,0,0,0,0,0]
let combinations_for_crosses = [
	[4, 0, 8],
	[4, 0, 2, 1],
	[4, 0, 2, 6],
	[4, 3, 5],
	[4, 3, 2, 6],
	[4, 3, 2, 7],
]
let combinations_for_zeros = [
	[0, 1, 2]
]
let move = 0;
let combinations_now = []
let combination_now = []


function reset(){
	for (let cell of cells){
		cell.innerText = "";
		cell.style.background = "white";
	}
	field = [0,0,0,0,0,0,0,0,0]
	move = 0
	combination_now = []
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
		combination_now = combinations_for_zeros[0]
		combinations_now = combinations_for_zeros
		zeros.className = "";
		crosses.className = "active";
		playerSign = "X";
		AIsign = "O";
	}else if(event.target.id == "zeros"){
		reset();
		combination_now = combinations_for_crosses[0]
		combinations_now = combinations_for_crosses
		zeros.className = "active";
		crosses.className = "";
		playerSign = "O";
		AIsign = "X";
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
	if (move+1 != 5){
		if (field[combination_now[move]] === 0){
			if (combination_now[move] === 0) {
				if (field[8] === 0){
					cells[combination_now[move]].innerText = AIsign;
					field[combination_now[move]] = 2;
				}else{
					combinations_now.splice(0, 1)
					combination_now = searchCombination()
				}
			}else{
				cells[combination_now[move]].innerText = AIsign;
				field[combination_now[move]] = 2;
			}
		}else{
			combinations_now.splice(0, 1)
			combination_now = searchCombination()
		}
	}else{
		cells[field.indexOf(0)].innerText = AIsign;
		field[field.indexOf(0)] = 2;
	} 
	checkCell()
	move += 1;
}

function searchCombination(){
	for (let combination of combinations_now){
		if (combination.length-1 >= move && field[combination[move]] === 0){
			if (combination[move] === 0) {
				if (field[8] === 0){
					cells[combination_now[move]].innerText = AIsign;
					field[combination_now[move]] = 2;
					return combination_now = combination;
				}
			}else{
				combination_now = combination;
				cells[combination[move]].innerText = AIsign;
				field[combination[move]] = 2;
				return combination;
			}
		}
	}
}

function checkCell(){
	if (field[0] === field[1] && field[1] === field[2] && field[0] != 0){
		cells[0].style.background = "green";
		cells[1].style.background = "green";
		cells[2].style.background = "green";
		setTimeout(reset, 2000);
	}else if (field[3] === field[4] && field[4] === field[5] && field[3] != 0){
		cells[3].style.background = "green";
		cells[4].style.background = "green";
		cells[5].style.background = "green";
		setTimeout(reset, 2000);
	}else if (field[6] === field[7] && field[7] === field[8] && field[6] != 0){
		cells[6].style.background = "green";
		cells[7].style.background = "green";
		cells[8].style.background = "green";
		setTimeout(reset, 2000);
	}else if (field[0] === field[3] && field[3] === field[6] && field[0] != 0){
		cells[0].style.background = "green";
		cells[3].style.background = "green";
		cells[6].style.background = "green";
		setTimeout(reset, 2000);
	}else if (field[1] === field[4] && field[4] === field[7] && field[1] != 0){
		cells[1].style.background = "green";
		cells[4].style.background = "green";
		cells[7].style.background = "green";
		setTimeout(reset, 2000);
	}else if (field[2] === field[5] && field[5] === field[8] && field[2] != 0){
		cells[2].style.background = "green";
		cells[5].style.background = "green";
		cells[8].style.background = "green";
		setTimeout(reset, 2000);
	}else if (field[0] === field[4] && field[4] === field[8] && field[0] != 0){
		cells[0].style.background = "green";
		cells[4].style.background = "green";
		cells[8].style.background = "green";
		setTimeout(reset, 2000);
	}else if (field[2] === field[4] && field[4] === field[6] && field[2] != 0){
		cells[2].style.background = "green";
		cells[4].style.background = "green";
		cells[6].style.background = "green";
		setTimeout(reset, 2000);
	}
}