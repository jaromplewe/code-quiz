// links to the DOM
const question = document.getElementById('question');
const answers = document.getElementsByClassName('multiple-choice');
const buttons = document.querySelectorAll('button');
const nextQuestionBtn = document.getElementById('next-question-btn');
const highScore = document.getElementById('high-score');
const currentScore = document.getElementById('current-score');
const timer = document.getElementById('timer');
const buttonsNextQuestion = document.getElementById('buttons-nextQuestion');
const startButton = document.getElementById('start-quiz-btn');
const viewLeaderboard = document.getElementById('viewLeaderboard');


// Global vaiables
let questionNumber;
let score = 0;
let highScoreScore = "";
let timeLeft = 60;
let answered = false;
let currentHighScore;
let initialsValue;

// set an object array for questions and answers
const questionsAndAnswers = [
    {
        "question": "How can you set a breakpoint in your code?",
        "correctAnswer": "debugger;",
        "answer2": "<br>",
        "answer3": "breakpoint;",
        "answer4": "console.log()",
    },
    {
        "question": "I'd like to add 1 to a games score, which of the following WILL NOT accomplish my task?",
        "correctAnswer": "score++ 1",
        "answer2": "score++;",
        "answer3": "score =+ 1;",
        "answer4": "score = score + 1;",

    },
    {
        "question": "Which of the following is the correct syntax for a 'for loop?'",
        "correctAnswer": "for (let i = 0; i < 10; i++)",
        "answer2": "for (let i = 0; i < 10; i = 1)",
        "answer3": "for (let i = 0; i + 10; i++)",
        "answer4": "for (i = 0; i < 10; i++)",
    },
    {
        "question": "Which of the following is the correct notation for an object?",
        "correctAnswer": "{'example': example}",
        "answer2": "{'example'}",
        "answer3": "{'#example'}",
        "answer4": "[example, example]",
    },
    {
        "question": "Which of the following is NOT acceptable criteria for an 'if' statement?",
        "correctAnswer": "if (example = example)",
        "answer2": "if (example == example)",
        "answer3": "if (example <= example)",
        "answer4": "if (example === example)",
    },
    {
        "question": "Which of the following is the correct notation for an object?",
        "correctAnswer": "[example, example]",
        "answer2": "{'example': example}",
        "answer3": '"example"',
        "answer4": "{'#example'}",
    },
    {
        "question": "What is the correct syntax to start this function? __ function beginQuiz() {}; __",
        "correctAnswer": "beginQuiz();",
        "answer2": "beginQuiz;",
        "answer3": "startFunction.beginQuiz",
        "answer4": "beginQuiz.startFunction",
    },
    {
        "question": "What is the correct syntax for a click listener?",
        "correctAnswer": "example.addEventListener('click', function());",
        "answer2": "example.onclick(function());",
        "answer3": "example.clickListener(function());",
        "answer4": "addEventListener.example('click', function());",
    },
    {
        "question": "Which of the following is the correct syntax to add a class to an element using javascript?",
        "correctAnswer": "element.classList.add('hide');",
        "answer2": "element.classAdd('hide');",
        "answer3": "element('addClass', 'hide');",
        "answer4": "element.classList = 'hide';",
    },
    {
        "question": "Which of the following is the correct syntax to link an HTML element to the javascript file using it's ID?",
        "correctAnswer": "let example = document.getElementById('example');",
        "answer2": "let example = getElementById('example');",
        "answer3": "let example = document.getElementById.example;",
        "answer4": "example.document.getElementById('example');",
    }
];
const qAndAShuffled = shuffle(questionsAndAnswers);

// Shuffle arrays using the fisher-yates alg.
function shuffle(array) {
    let newPos,
        temp;
    for (let i = array.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[newPos];
        array[newPos] = temp;
    }
    return array;
}

// start the quiz
function displayQuestions() {

    // show buttons-nextQuestion
    buttonsNextQuestion.classList.remove('hide');
    nextQuestionBtn.classList.remove('hide');

    // Hide startButton
    startButton.classList.add('hide');

    // Define Current questionNumber
    if (questionNumber === undefined) {
        questionNumber = 0;
    } else if (questionNumber >= 0) {
        questionNumber++;
        console.log(questionNumber)
    }

    // change nextQuestionBtn to submitQuizBtn
    if (questionNumber >= 9) {
        nextQuestionBtn.textContent = "Submit Quiz"
        nextQuestionBtn.addEventListener('click', function () {
            function hslink() { location.href = "highscores.html" };
            hslink();
            
            // makeStuffHappen()
        });

    }

    // define answerArr
    let answerArr = [
        qAndAShuffled[questionNumber].correctAnswer,
        qAndAShuffled[questionNumber].answer2,
        qAndAShuffled[questionNumber].answer3,
        qAndAShuffled[questionNumber].answer4
    ]

    // display the question title
    question.textContent = qAndAShuffled[questionNumber].question;

    // display the shuffled answers
    shuffle(answerArr);
    answers[0].textContent = answerArr[0];
    answers[1].textContent = answerArr[1];
    answers[2].textContent = answerArr[2];
    answers[3].textContent = answerArr[3];
}

// Mark answer correct or incorrect
function markAnswer() {

    // change button color acording to users choice
    // add to local storage score
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('click', checkAnswer)

        function checkAnswer() {
            if (answered === false) {
                if (answers[i].textContent == qAndAShuffled[questionNumber].correctAnswer) {
                    // revert colors
                    answers[i].classList.add("btn-outline-success");
                    answers[i].textContent = "Correct! " + answers[i].textContent;
                    // change score
                    score++;
                    currentScore.textContent = "Current Score: " + score;
                    localStorage.setItem('Score', score);
                } else {
                    // revert colors
                    answers[i].classList.add("btn-outline-danger");
                    answers[i].textContent = "Incorrect " + answers[i].textContent;
                }
            }
            answered = true;
        };
    };
}

// Move user to the next question
function nextQuestion() {
    if (answered === true) {
        // remove coloring
        for (let i = 0; i < answers.length; i++) {
            answers[i].classList.remove("btn-outline-success");
            answers[i].classList.remove("btn-outline-danger");
        }
        answered = false;

        makeStuffHappen();
    }
}

// Start timer, stop when time hits 0
function startTimer() {
    timer.textContent = "Timer: " + timeLeft;
    let timeInterval = setInterval(function countdown() {
        timeLeft--;
        timer.textContent = "Timer: " + timeLeft;
        if (timeLeft == 0) {
            clearInterval(timeInterval);
            function hslink() { location.href = "highscores.html" };
            hslink();
        }
    }, 1000);
}



// MAKE STUFF HAPPEN
function makeStuffHappen() {

    // Display the questions on the screen using displayQuestions
    displayQuestions();

    // Display correct and incorrect, log to local storage.
    markAnswer();

    // go to the next question using next question button
    nextQuestionBtn.addEventListener('click', nextQuestion)

}

// Click the Start button to start quiz
startButton.addEventListener('click', makeStuffHappen)
// Timer starts when Start button is clicked
startButton.addEventListener('click', startTimer)

// view leaderboard button
viewLeaderboard.addEventListener('click', function hslink() { location.href = "highscores.html" });
// hslink(););



