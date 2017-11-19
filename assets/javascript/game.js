$(document).ready(function(){

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
			appsArr: ["cheeseball", "cranberry sauce", "salad", "fondue"],
			protArr: ["turkey", "ham", "tofurkey", "turducken", "roast"],
			starchArr: ["cornbread", "stuffing", "bread", "rolls", "rice"],
			vegArr: ["potatoes", "corn", "peas", "yams"]
 		}
	 	//FOR FOOD OPTIONS
		let appetizer = new Food(foodOptions.appsArr, "appetizer");
		let protein = new Food(foodOptions.protArr, "protein");
		let starch = new Food(foodOptions.starchArr, "starch");
		let veggies = new Food(foodOptions.vegArr, "veg");
		appetizer.load();	
		protein.load();
		starch.load();
		veggies.load();
  } //END GAMESETUP FCN

	// ****************************
	// ****************************
	//			make the food
	// ****************************
	// ****************************
function Food(nameArr, course){
	// this.nameArr = nameArr;
	this.index = randoNummo(0, nameArr.length-1);
	this.course = course;
	this.name = nameArr[this.index];
	
	this.mouthfuls = Math.floor(Math.random()*12) + 1;
	this.load = function(){
		$("#foods").append(`<button class="spoons" id=${this.course} data-key=${this.mouthfuls}>${this.name}</button>`);
	}
}//<-- ends food maker

// ****************************
// ****************************
// play the game
// ****************************
// ****************************
function playGame(){
	let userArr = [];
	let userVal = 0;
 	$("#foods").empty();
 	$("#mouthful").empty();
 	
 	let rando = randoNummo(120, 19);
	$("#goalNumber").text(rando);

	gameSetup();

 	$("#mouthful").text(userVal);
 	$("#goalNumber").text(rando);
 	//get sum of the array
 		function checkWin(){
			$("#mouthful").text(userVal);
			if(userVal < rando){
				return;
			} else {
				if(userVal === rando){
					wins ++;
					$('#wins').text(wins);
					setTimeout(()=>{
						const audio = document.querySelector(`audio[data-name="pie"]`);
    				audio.play();
						$("#mouthful").text("Mmm. Piiie.");
						$("#plateImg").addClass("spin");
						setTimeout(()=>{
							playGame();
						}, 2500);
					}, 500);
				} else {
					losses ++;
					$('#losses').text(losses);
					const audio = document.querySelector(`audio[data-name="oof"]`);
					$('#bellyImg').effect( "shake", {times: 8, distance: 10}, 1000 );
    			audio.play();
    			$("#goalNumber").text("Go home. No pie!");
					setTimeout(()=>{
						$("#result").text("");
						setTimeout(()=>{
							playGame();
						}, 2500);
					}, 1000);
				}
			}
		}//<-- ends check win

		// ****************************
		// ****************************
		// CLICK ALL THE THINGS!
		// ****************************
		// ****************************
		$("button").on("click", function(e){
			const str = $(this).text();
			const val = $(this).data("key");
			userVal += val;
			checkWin();
		})
}//<--ends function playgame

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

	// this.serve = function(){
	// 	console.log(`food ${this.name} for ${this.course} (${this.mouthfuls}) mouthfuls.`);//for checking and bedugging.
	// };




// !!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!
// end of doco ready, do not lose this set of end braces
// !!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!

});