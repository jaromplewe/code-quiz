// links to the DOM
let question = document.getElementById('question');
let answers = document.getElementsByClassName('multiple-choice');
let nextQuestionBtn = document.getElementById('next-question-btn');

// set an object array for questions and answers
var questionsAndAnswers = [
    {
        "question": "question 1",
        "correctAnswer": "answer 1-1 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 2",
        "correctAnswer": "answer 1-2 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",

    },
    {
        "question": "question 3",
        "correctAnswer": "answer 1-3 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
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
var questionNumber;

// start the quiz
function createQuestions(questionsArray) {

    console.log(questionsArray.length)

    // pull a random number from the questionsArray array and display the according question
    let questionNumber = Math.floor(Math.random() * questionsArray.length);

    question.textContent = questionsArray[questionNumber].question;

    // set the answers to an array
    let answerArr = [
        questionsArray[questionNumber].correctAnswer,
        questionsArray[questionNumber].answer2,
        questionsArray[questionNumber].answer3,
        questionsArray[questionNumber].answer4
    ]

    // shuffle the question order using the fisher-yates alg.
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

    shuffle(answerArr);

    // display the shuffled answers
    answers[0].textContent = answerArr[0];
    answers[1].textContent = answerArr[1];
    answers[2].textContent = answerArr[2];
    answers[3].textContent = answerArr[3];

    // if correct, display correct. 
    // else, display incorrect
    let answered = false;

    
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('click', checkAnswer)
        
        function checkAnswer() {
            if (answered === false) {
                if (answers[i].textContent == questionsArray[questionNumber].correctAnswer) {
                    answers[i].classList.add("btn-outline-success");
                    answers[i].textContent = "Correct! " + answers[i].textContent;
                } else {
                    answers[i].classList.add("btn-outline-danger");
                    answers[i].textContent = "Incorrect " + answers[i].textContent;
                }
            }
            answered = true;
        };
    }

    // record score to local storage


    // once an answer is clicked, you can't change your answer

    // after question is answered and 'Next Question' button is clicked, remove item from questionsArray array
    console.log(questionsArray)
    return;
    
}

nextQuestionBtn.addEventListener('click', removeArr)
function removeArr() {
    questionsAndAnswers.splice((questionNumber - 1), 1)

    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("btn-outline-success");
        answers[i].classList.remove("btn-outline-danger");
    }
    answered = false;
    createQuestions(questionsAndAnswers);
}


createQuestions(questionsAndAnswers);

// nextQuestionBtn.addEventListener('click', createQuestions(questionsAndAnswers));

