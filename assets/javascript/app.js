// Press Start to begin
// Screen switches to questions
// Timer begins countdown to 60 seconds
// User clicks answer
// Assign correct answer to correct button (computer "memorizes" what was chosen)
// Computer keeps track of wrong and right answers
// When timer ends, screen changes to show the total score
// Last screen needs to show number of correct answers, wrong answers, and unanswered questions

var panel = $("#quiz-area");

//QUESTIONS 
var questions = [{
	question: "What is brew master in Latin?",
	answers: ["Cervezador", "Lorem Ipsumbeermaker", "Braxator", "Señor Cerveza"], 
	correctAnswer: "Braxator"
}, {
	question: "What is Cenosillicaphobia the fear of?", 
	answers: ["Fear of an empty glass", "You're afraid of getting too drunk", "Fear of a spider in your beer", "Fear of flat beer"],
	correctAnswer: "Fear of an empty glass"
}, {
	question: "What beer accounts for 85% of all German beer exports to the U.S.?", 
	answers: ["Gerbeer", "Herr Light", "Becks", "Budnicht"], 
	correctAnswer: "Becks"
}];



var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 20,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>20</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});










