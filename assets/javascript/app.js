// Press Start to begin
// Screen switches to questions
// Timer begins countdown to 60 seconds
// User clicks answer
// Assign correct answer to correct button (computer "memorizes" what was chosen)
// Computer keeps track of wrong and right answers
// When timer ends, screen changes to show the total score
// Last screen needs to show number of correct answers, wrong answers, and unanswered questions


//GLOBAL VARIABLES (Accessible by all functions)
//==========================================================================
 	//Correct Answers
	var correctAnswers = [""];
	var wrongAnswers = [""];


	//Game Counter
	var wins = 0;
	var losses = 0;
	var unanswered = 0;

	//timer
	var timeLeft = 60;
	
	//audio
	//var audio = new Audio (s)

//FUNCTIONS (These are bits of code that we will call upon to run when needed)
//============================================================================

	//TIMER
	//when start button clicked, show the main div
	$("#startButton").on("click",function() { 
		$(".main").css("visibility", "visible")
		//then hide the start button 
		$("#startButton").hide()
		//then the timer appears in the start button's place
		$("#timer").css("visibility", "visible")
		//timer should begin to countdown from 60 seconds
		setInterval(timer, 1000);

	});

		//Another way to get the questions to show up when the Start button is clicked
		//	$( "#startButton" ).click(function() {
	 	//		$(".main" ).css("visibility", "visible");
		//	});

	 // function to countdown 
	 function timer() {
	 	timeLeft--;
	 	console.log(timeLeft);
	 	$("#timer").html("Timer " + "00:" + timeLeft); 
	 	
	 	//when timer reaches less than ten seconds, display time as 00:09 etc
	 	if (timeLeft < 10) {
	 		timeLeft = "0" + timeLeft;
	 	}

	 }
	

	 //need to set time limit - after 60 seconds up change to score screen


// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================


