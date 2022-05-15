
// Getting tue username Object including name and score
let storageObject = localStorage.getItem('quiz-scores');
storageObject = JSON.parse(storageObject);

const scoresButton = document.getElementById('scores-btn');
const highScoresList = document.getElementById('highScoresList');
scoresButton.addEventListener('click', showScores);

function showScores() {
    console.log(storageObject)
    highScoresList.innerHTML = storageObject.name + ':' + storageObject.scores;
    
}


