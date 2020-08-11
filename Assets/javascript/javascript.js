let question = document.getElementById('question');
let answers = document.getElementsByClassName('multiple-choice');

// set an object array for questions and answers
const questionsAndAnswers = [
    {
        "question": "question 1",
        "correctAnswer": "answer 1 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 2",
        "correctAnswer": "answer 1 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",

    },
    {
        "question": "question 3",
        "correctAnswer": "answer 1 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 4",
        "correctAnswer": "answer 1 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 5",
        "correctAnswer": "answer 1 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 6",
        "correctAnswer": "answer 1 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 7",
        "correctAnswer": "answer 1 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 8",
        "correctAnswer": "answer 1 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 9",
        "correctAnswer": "answer 1 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    },
    {
        "question": "question 10",
        "correctAnswer": "answer 1 - correct!",
        "answer2": "answer 2",
        "answer3": "answer 3",
        "answer4": "answer 4",
    }
];

// start the quiz
function createQuestions() {
    // pull a random question/answer array from questionsAndAnswers
    let questionNumber = Math.floor(Math.random() * questionsAndAnswers.length);

    // set the question randomly
    question.textContent = questionsAndAnswers[questionNumber].question;

    // set the answers
    answers[0].textContent = questionsAndAnswers[questionNumber].correctAnswer;
    answers[1].textContent = questionsAndAnswers[questionNumber].answer2;
    answers[2].textContent = questionsAndAnswers[questionNumber].answer3;
    answers[3].textContent = questionsAndAnswers[questionNumber].answer4;

    // if correct, display correct
    answers[0].addEventListener('click', function () {
        console.log('nice!')
        answers[0].classList.add("btn-outline-success");
        answers[0].textContent = "Correct! " + questionsAndAnswers[questionNumber].correctAnswer;
    });

    // if incorrect, display incorrect
    for (let i = 1; i < answers.length; i++) {
        answers[i].addEventListener('click', function () {
            console.log('bummer')
            answers[i].classList.add("btn-outline-danger");
            answers[i].textContent = "Incorrect " + answers[i].textContent;
        });
    }
}


createQuestions();
