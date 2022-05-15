// variables keep track of quiz
var currentQuestionIndex
var time = questions.length * 15
var timerId;

// variables reference DOM
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

function startQuiz() {
// hide start screen
    var startScreenEl = document.getElementById("start-screen");


// reveal question section
questionsEl.removeAttribute("class");

// starting time
timerEL.textContent = time;

getQuestion();
}

function getQuestion() {
    // get question from array
    var currentQuestion = questions[currentQuestionIndex];

    // update update title to question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    // clear old answers
    choicesEl.innerHTML = "";

    // loop choices
    currentQuestion.choices.forEach(function(choice, i) {
        var choiceNode = documen.createElement("button");
        choiceNode.setAttribute("calss", "choice");
        choiceNode.setAttribute("value", choice);
   

        choiceNode.textContent = i + ". " + choice;
        
        // click event listener for each choice
        choiceNode.onclick = questionClick;

        // display
        choicesEl.appendChild(choiceNode);
     });
}

function questionClick() {
    // will tell if the user is wrong and subtract the time
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 15;

        if (time < 0) {
            time = 0;
        }
    }
}