// Links to DOM
const submitScoreBtn = document.getElementById('submit-score-btn');
const initialsForm = document.getElementById('initialsForm');

function highScoreScreen() {

    // Edit the highScoreScore variable
    // localStorage.setItem('highScore', localStorage.getItem('Score'));
    // highScoreScore = (localStorage.getItem('highScore'));
    // localStorage.setItem('initials')
    console.log('hello')
    
    score = localStorage.getItem('Score');
    initials = initialsForm.value;

    // ADD SCORES INTO LOCAL STORAGE
    // define new row object
    newRow = {
        'initials' : initials,
        'score' : score
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

    // Click 'submit score'
    // submitScoreBtn.addEventListener('click', function () {
    

    // });
    // adds initials with current score and stringify's them

    // adds the string to local storage
    // takes user to leaderboard

    // Parse highScoreScore and display on leaderboard
}

// Click submit score to run highScoreScreen func
submitScoreBtn.addEventListener('click', highScoreScreen);