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
// let startTime = 75;
// let i = 0;

choicesEl1.addEventListener("click", userChoice);
choicesEl2.addEventListener("click", userChoice);
choicesEl3.addEventListener("click", userChoice);
choicesEl4.addEventListener("click", userChoice);

questionsCardEl.style.visibility = "hidden";
gameOverEl.style.visibility = "hidden";
yourScoreEl.style.visibility = "hidden";
highScoresDisplayEl.style.visibility = "hidden";

function countdown() {
    startTime--;
    timerEl.textContent = startTime;
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

    console.log(questions[i].answer);
    if (questions[i].choices[userAnswer] === questions[i].answer) {
        questionsCorrect++;
        i++;
        console.log(questionsCorrect);
    } else {
        startTime -= 15;
        i++;
    };

    if (i < 5) {
        console.log(i);
        showQuestions();
    } else {
        let score = startTime;
        questionsCardEl.style.visibility = "hidden";
        yourScoreEl.textContent = "Your Score is " + score + "!";
        yourScoreEl.style.visibility = "visible";
        clearInterval(timer);

    }
};

function showQuestions() {

    titleEl.textContent = (questions[i].title);
    choicesEl1.textContent = (questions[i].choices[0]);
    choicesEl2.textContent = (questions[i].choices[1]);
    choicesEl3.textContent = (questions[i].choices[2]);
    choicesEl4.textContent = (questions[i].choices[3]);
};

function displayHighScores () {
highScoresDisplayEl.style.visibility = "visible";
startQuizEl.style.visibility = "hidden";
yourScoreEl.style.visibility = "hidden";

};

highScoresEl.addEventListener("click", displayHighScores);

highScoreCloseEl.addEventListener("click", function(){
    highScoresDisplayEl.style.visibility = "hidden";
    startQuizEl.style.visibility = "visible";
})
