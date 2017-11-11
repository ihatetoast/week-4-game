$(document).ready(function(){
 console.clear();
 //GET A RANDOM NUMBER FOR PLAYER TO REACH
 function randoNummo(min, max){
 		return Math.floor(Math.random() * (max - min + 1)) + min;
 	}

 	let losses = 0;
 	let wins = 0;
 	
	// ****************************
	// ****************************
	// //SET UP THE GAME
	// ****************************
	// ****************************
	function gameSetup(){
		
 	//arrays of ...
 		const foodOptions = {
			appsArr: ["cheeseball", "cranberry sauce", "cauliflower salad"],
			protArr: ["turkey", "honey-glazed ham", "tofurkey", "turducken"],
			starchArr: ["mashed potatoes", "stuffing", "taters au gratin", "rolls"],
			vegArr: ["green beans", "corn on the cob", "peas", "sweet potatoes"]
 		}
	 	//FOR FOOD OPTIONS
		let appetizer = new Food(foodOptions.appsArr, "appetizer");
		let protein = new Food(foodOptions.protArr, "protein");
		let starch = new Food(foodOptions.starchArr, "starch");
		let veggies = new Food(foodOptions.vegArr, "veg");
		appetizer.serve();
		appetizer.load();	
		protein.serve();
		protein.load();
		starch.serve();
		starch.load();
		veggies.serve();
		veggies.load();
  } //END GAMESETUP FCN


	// ****************************
	// ****************************
	//			make the food
	// ****************************
	// ****************************
function Food(nameArr, course){
	// this.nameArr = nameArr;
	this.index = randoNummo(0, nameArr.length-1)
	this.course = course;
	this.name = nameArr[this.index];
	this.mouthfuls = Math.floor(Math.random()*12) + 1;
	this.serve = function(){
		console.log(`food ${this.name} for ${this.course} (${this.mouthfuls}) mouthfuls.`);
	};
	this.load = function(){
		$("#foods").append(`<button class="spoons" id=${this.course} data-key=${this.mouthfuls}>${this.name}</button>`);
	}
}//END MAKE THE FOOD FOOD CONSTRUCTOR


// ****************************
// ****************************
// play the game
// ****************************
// ****************************
//DRY this shit up
function playGame(){
	let userArr = [];
 	let foodTotal = 0;
 	$("#foods").empty();
 	$("#mouthful").empty();
 	
 	let rando = randoNummo(120, 19);
 //LOAD TO THE STOMACH
 $("#goalNumber").text(rando);

	gameSetup();
	
 	$("#mouthful").text(foodTotal);
 	$("#goalNumber").text(rando);
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
					setTimeout(()=>{
						const audio = document.querySelector(`audio[data-name="pie"]`);
    				audio.play();
						$("#mouthful").text("Mmm. Piiie.");
						setTimeout(()=>{
							playGame();
						}, 2500);
					}, 500);
				} else {
					losses ++;
					$('#losses').text(losses);
					setTimeout(()=>{
						const audio = document.querySelector(`audio[data-name="oof"]`);
    				audio.play();
						$("#result").text("Go home. No pie!");
						setTimeout(()=>{
							playGame();
						}, 2500);
					}, 500);
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

}

playGame();

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