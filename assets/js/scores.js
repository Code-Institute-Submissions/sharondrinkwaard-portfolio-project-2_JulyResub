// Getting the storage object including name and score
let storageObject = localStorage.getItem('quiz-scores');
storageObject = JSON.parse(storageObject);

const scoresButton = document.getElementById('scores-btn');
const startButton = document.getElementById('start-btn');
const highScoresList = document.getElementById('highScoresList');
scoresButton.addEventListener('click', showScores);

function showScores() {
    console.log(storageObject);
    highScoresList.innerHTML = storageObject.name + ' : ' + storageObject.scores + ' points';
    startButton.innerText = 'Start again';
    startButton.classList.remove('hide');
    scoresButton.classList.add('hide');
}