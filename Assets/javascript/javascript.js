// links to the DOM
let question = document.getElementById('question');
let answers = document.getElementsByClassName('multiple-choice');

// set an object array for questions and answers
const questionsAndAnswers = [
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

// start the quiz
function createQuestions() {
    // pull a random number from the questionsAndAnswers array and display the according question
    let questionNumber = Math.floor(Math.random() * questionsAndAnswers.length);

    question.textContent = questionsAndAnswers[questionNumber].question;

    // set the answers to an array
    let answerArr = [
        questionsAndAnswers[questionNumber].correctAnswer,
        questionsAndAnswers[questionNumber].answer2,
        questionsAndAnswers[questionNumber].answer3,
        questionsAndAnswers[questionNumber].answer4
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
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('click', function () {
            if (answers[i].textContent == questionsAndAnswers[questionNumber].correctAnswer) {
                answers[i].classList.add("btn-outline-success");
                answers[i].textContent = "Correct! " + answers[i].textContent;
            } else {
                answers[i].classList.add("btn-outline-danger");
                answers[i].textContent = "Incorrect " + answers[i].textContent;
            }
        });
    }

    // once something is clicked, you can't change your answer

    // after question is answered and next button is clicked, remove item from questionsAndAnswers array

}


createQuestions();
