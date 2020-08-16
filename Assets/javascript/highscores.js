// Links to DOM
const submitScoreBtn = document.getElementById('submit-score-btn');
const initialsForm = document.getElementById('initialsForm');
const form = document.getElementById('form');
const leaderboard1 = document.getElementById('leaderboard1');
let leaderboard2 = document.getElementById('leaderboard2');
const cardContainer = document.getElementById('card-container');

function submitScreen() {

    // hide leaderboard
    leaderboard1.classList.remove('hide')
    leaderboard2.classList.add('hide');
    console.log(leaderboard2)


    score = localStorage.getItem('Score');
    initials = initialsForm.value;

    // ADD SCORES INTO LOCAL STORAGE
    // define new row object
    newRow = {
        'initials': initials,
        'score': score
    }
    // Pull allScores array from local storage and parse
    let allScores = localStorage.getItem('allScores');
    if (allScores) {
        allScoresParse = JSON.parse(allScores);
    } else {
        allScoresParse = [];
    }
    // push new initials and score to allScores
    allScoresParse.push(newRow);
    // log allScores back into localStorage
    let allScoresString = JSON.stringify(allScoresParse);
    localStorage.setItem('allScores', allScoresString);

    // takes user to leaderboard
    submitScoreBtn.addEventListener('click', highScores);

}
function highScores() {
    // hide form

    leaderboard1.classList.add('hide')
    leaderboard2.classList.remove('hide')

    // get allScores from localStorage
    allScores = localStorage.getItem('allScores');
    allScoresParse = JSON.parse(allScores);

    // function to sort scores in decending order
    function compare(a, b) {
        const scoreA = Number(a.score);
        const scoreB = Number(b.score);

        let comparison = 0;
        if (scoreA > scoreB) {
            comparison = -1;
        } else if (scoreA < scoreB) {
            comparison = 1;
        }
        return comparison;
    }
    allScoresParse.sort(compare);


    for (let i = 0; i < allScoresParse.length; i++) {
        let scoreList = document.createElement('div');
        scoreList.classList.add('card-body');
        scoreList.textContent = allScoresParse[i].score + ": " + allScoresParse[i].initials;
        cardContainer.appendChild(scoreList);
    }
};

// Click submit score to run highScoreScreen func
submitScoreBtn.addEventListener('click', submitScreen);
submitScoreBtn.addEventListener('click', highScores);