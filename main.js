let quizEl = document.getElementById("quiz");
let timerEl = document.getElementById("timer");
let resultsEl = document.getElementById("results");
let startQuizEl = document.getElementById("startQuiz");
let startTime = 75;


startQuizEl.addEventListener("click", function () {
    let timer = setInterval(function () {
        startTime--;
        timerEl.innerHTML = startTime;
        if (startTime === 0) {
            clearInterval(timer);
        }
    }, 1000);

}
);


// function () {
//     let timer = setInterval(function () {
//         startTime--;
//         timerEl.innerHTML = startTime;
//         if (startTime === 0) {
//             clearInterval(timer);
//         }
//     }, 1000);

// };
