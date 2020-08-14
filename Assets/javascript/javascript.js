// links to the DOM
const question = document.getElementById('question');
const answers = document.getElementsByClassName('multiple-choice');
const buttons = document.querySelectorAll('button');
const nextQuestionBtn = document.getElementById('next-question-btn');
const highScore = document.getElementById('high-score');
const currentScore = document.getElementById('current-score');
const timer = document.getElementById('timer');
const blueButtonCol = document.getElementById('blue-button-col');

// Create elements in the DOM
let startButton = document.createElement('div');

// Global vaiables
let questionNumber;
let score = 0;
let highScoreScore = 0;
let timeLeft = 60;
let answered = false;
let currentHighScore;

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
        "question": "question 4",
        "correctAnswer": "answer 1-4 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 5",
        "correctAnswer": "answer 1-5 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 6",
        "correctAnswer": "answer 1-6 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 7",
        "correctAnswer": "answer 1-7 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 8",
        "correctAnswer": "answer 1-8 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 9",
        "correctAnswer": "answer 1-9 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 10",
        "correctAnswer": "answer 1-10 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    }
];
const qAndAShuffled = shuffle(questionsAndAnswers);

// Display Start screen
function startScreen() {
    // hide buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add('hide');
    };

    // Display start text
    question.textContent = "The object is simple: Answer 10 questions in 60 seconds. Let's find out what you're really capable of. Are you up for the task? Press the Start Quiz button to enter hell.";

    // Create start quiz button
    startButton.classList.add('btn-primary');
    startButton.classList.add('btn');
    startButton.textContent = 'Start Quiz';
    blueButtonCol.appendChild(startButton)

    console.log(startButton)

    startButton.addEventListener('click', makeStuffHappen);

}

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
    // Unhide the buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('hide');
    };

    // Hide startButton
    startButton.classList.add('hide');

    // Define Current questionNumber
    if (questionNumber === undefined) {
        questionNumber = 0;
    } else if (questionNumber >= 0) {
        questionNumber++;
        console.log(questionNumber)
    } 
    
    // change button to submit score
    if (questionNumber >= 9) {
        nextQuestionBtn.textContent = 'Submit Score';
    } if (questionNumber >= 10) {
        alert('all out of questions');
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

    // define answered to determine if user has clicked on an answer
    // let answered = false;

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
                    highScore.textContent = "High Score: " + highScoreScore;
                    localStorage.setItem('Score', score);
                    localStorage.setItem('High Score', highScoreScore);
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

// Log High score to local storage
function highScoreStorage() {
    
    if (localStorage.getItem('High Score') === '...') {
        localStorage.setItem('High Score', score)
    } else if (localStorage.getItem('High Score') >= score) {
        localStorage.setItem('High Score', localStorage.getItem('High Score'))
    }
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

    // Log high score to local storage
    highScoreStorage();

}

// Original start
startScreen();

// Run the timer
// startTimer();
