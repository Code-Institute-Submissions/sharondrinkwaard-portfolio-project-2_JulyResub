// Load DOM content
document.addEventListener("DOMContentLoaded", function () {
    highScoresList.innerHTML = storageObject.name + ' : ' + storageObject.scores + ' points';
    startButton.innerText = 'Start again';
    startButton.classList.remove('hide');
});

// Getting the storage object including name and score
let storageObject = localStorage.getItem('quiz-scores');
storageObject = JSON.parse(storageObject);

const startButton = document.getElementById('start-btn');
const highScoresList = document.getElementById('highScoresList');

// Directs to the home page, instead of the onclick event previously used
startButton.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = 'index.html';
});