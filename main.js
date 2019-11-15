let quizEl = document.getElementById("quiz");
let timerEl = document.getElementById("timer");
let resultsEl = document.getElementById("results");
let startQuizEl = document.getElementById("startQuiz");
let questionsCardEl = document.getElementById("questionsCard");
let titleEl = document.getElementById("title");
let choicesEl1 = document.getElementById("choices1");
let choicesEl2 = document.getElementById("choices2");
let choicesEl3 = document.getElementById("choices3");
let choicesEl4 = document.getElementById("choices4");
let answersEl = document.getElementById("answer");
let gameOverEl = document.getElementById("gameOver");
let yourScoreEl = document.getElementById("yourScore");
let highScoresEl = document.getElementById("highScores");
let highScoresDisplayEl = document.getElementById("highScoresDisplay");
let highScoreCloseEl = document.getElementById("highScoreClose");
let questionsCorrect = 0;
let highScores;
let score;
let endScore;
let highScoreName;

choicesEl1.addEventListener("click", userChoice);
choicesEl2.addEventListener("click", userChoice);
choicesEl3.addEventListener("click", userChoice);
choicesEl4.addEventListener("click", userChoice);

questionsCardEl.style.visibility = "hidden";
gameOverEl.style.visibility = "hidden";
yourScoreEl.style.visibility = "hidden";
highScoresDisplayEl.style.visibility = "hidden";
highScoreCloseEl.style.visibility = "hidden";

function countdown() {
    startTime--;
    timerEl.textContent = "Time Remaining: " + startTime;
    if (startTime === 0) {
        questionsCardEl.style.visibility = "hidden";
        gameOverEl.style.visibility = "visible";
        clearInterval(timer);
    }
};

let timer;

startQuizEl.addEventListener("click", function () {
    i = 0;
    startTime = 75;
    startQuizEl.style.visibility = "hidden";
    questionsCardEl.style.visibility = "visible";
    if (i == 0) {
        showQuestions();
    };
    timer = setInterval(countdown, 1000);
});
// clicking answers will change through questions.
function userChoice() {
    let userAnswer = parseInt(event.target.value);

    // console.log(questions[i].answer);
    if (questions[i].choices[userAnswer] === questions[i].answer) {
        questionsCorrect++;
        i++;
        // console.log(questionsCorrect);
    } else {
        startTime -= 15;
        i++;
    };

    if (i < 5) {
        // console.log(i);
        showQuestions();
    } else {
        score = startTime;
        questionsCardEl.style.visibility = "hidden";
        yourScoreEl.textContent = "Your Score is " + score + "!";
        yourScoreEl.style.visibility = "visible";
        clearInterval(timer);
        // endScore = localStorage.getItem("highScores");
        highScoreName = localStorage.getItem("highScoresName");

        if (score > localStorage.getItem("highScores")) {
            let name = prompt("You Got the High Score!!! Enter your name.")
            highScoresDisplayEl.textContent = localStorage.setItem("highScores", score);
            highScoresDisplayEl.appendChild = localStorage.setItem("highScoresName", name)
            // console.log(localStorage);
            displayHighScores();
        };

    }
};

function showQuestions() {

    titleEl.textContent = (questions[i].title);
    choicesEl1.textContent = (questions[i].choices[0]);
    choicesEl2.textContent = (questions[i].choices[1]);
    choicesEl3.textContent = (questions[i].choices[2]);
    choicesEl4.textContent = (questions[i].choices[3]);
};

function displayHighScores() {
    highScoresDisplayEl.style.visibility = "visible";
    startQuizEl.style.visibility = "hidden";
    yourScoreEl.style.visibility = "hidden";
    startTime = 75;
    timerEl.textContent = "Time Remaining: " + startTime;
    highScoresDisplayEl.textContent = "High Score: " + localStorage.getItem("highScoresName") + " - " + localStorage.getItem("highScores");
    highScoreCloseEl.style.visibility = "visible";

    // localStorage.setItem("highScores", )

};

highScoresEl.addEventListener("click", displayHighScores);

highScoreCloseEl.addEventListener("click", function () {
    highScoresDisplayEl.style.visibility = "hidden";
    startQuizEl.style.visibility = "visible";
    startTime = 75;
    highScoreCloseEl.style.visibility = "hidden";
})


