$(document).ready(function(){
 console.clear();
 
 gameSetup();
 playGame();
 var rando;
 // on load, start the game
 function gameSetup(){
 	// instantiate the buttons/meals
	const cheeseball = new Food("cheeseball", "appetizer");
	const turkey = new Food("turkey", "protein");
	const rolls = new Food("rolls", "starch");
	const greenBeans = new Food("green beans", "veg");
	// load rando number to reach
	rando = Math.floor(Math.random() * (102)) + 19;
	$("#goalNumber").text(rando)
	cheeseball.serve();
	cheeseball.load();	
	turkey.serve();
	turkey.load();
	rolls.serve();
	rolls.load();
	greenBeans.serve();
	greenBeans.load();
 
 }

function Food(name, course){
	this.name = name;
	this.course = course;
	this.mouthfuls = Math.floor(Math.random()*12) + 1;
	this.serve = function(){
		console.log(`I just ate ${this.name} as part of the ${this.course} and it was ${this.mouthfuls} mouthfuls.`);
	};
	this.load = function(){
		$("#foods").append(`<button class=${this.course} id=${this.course} data-key=${this.mouthfuls}>${this.name}</button>`);
	}
}

//DRY this shit up
function playGame(){
	let losses = 0;
 	let wins = 0;
 	let userArr = [];
 	let foodTotal = 0;
 	$("#mouthful").text(foodTotal);
 	//get sum of the array
 		function checkWin(){
		foodTotal = userArr.reduce((sum, value) => sum + value, 0);
		$("#mouthful").text(foodTotal);
		if(foodTotal < rando){
			return;
		} else {
			if(foodTotal=== rando){
				wins ++;
				$('#wins').text(wins);
			} else {
				losses ++;
				$('#losses').text(losses);
			}
		}
	}

	$("#appetizer").on("click", function(e){
		const str = $(this).text();
		const val = $(this).data("key");
 		console.log(`text inside button is ${str}`);
 		console.log(`value is ${val}`);
 		userArr.push(val);
 		checkWin();

 	});
 	$("#protein").on("click", function(e){
		const str = $(this).text();
		const val = $(this).data("key");
 		console.log(`text inside button is ${str}`);
 		console.log(`value is ${val}`);
 		userArr.push(val);
 		checkWin();
 	});
 	$("#starch").on("click", function(e){
		const str = $(this).text();
		const val = $(this).data("key");
 		console.log(`text inside button is ${str}`);
 		console.log(`value is ${val}`);
 		userArr.push(val);
 		checkWin();
 	});
 	$("#veg").on("click", function(e){
		const str = $(this).text();
		const val = $(this).data("key");
 		console.log(`text inside button is ${str}`);
 		console.log(`value is ${val}`);
 		userArr.push(val);
 		checkWin();
 	});

	console.log(userArr);
}



// cheeseball
// rolls
// turkey
// stuffing


 // 	set up
	// 4 foots to appear as buttons
 // 	those things have a random number set at the start of the game 1-12 inclusive of limits?
 // 	friend's belly's limit is set. at a random number 19-120 (inclusive of limits?)

 // 	when user pushes those buttons, the random number is added to the mouthful points
 // 		mouthful points are compared to belly's limit.
 // 		game continues while limit is more than mouthful points.
 // 			match the points and you win
 // 			over the points and you lose

 // 			settimeout to reset.

 




// !!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!
// end of doco ready, do not lose this 
// !!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!

});