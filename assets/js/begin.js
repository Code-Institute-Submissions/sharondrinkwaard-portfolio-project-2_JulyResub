// Load DOM content before starting the game
document.addEventListener("DOMContentLoaded", function () {
});

const enterButton = document.getElementById('enter'); // Not in use?
const form = document.getElementById('form-id');

// Alerts the user when there is no username filled in and prevents the 'Enter' button from functioning.
form.addEventListener('submit', event => {
    event.preventDefault();
    window.location.href = 'quiz.html';
});

form.onsubmit = function (event) {
    event.preventDefault();
    // Gets the "name" value from the forms input called "name"
    const name = event.target.name.value;
    // Sets the item into local storage under the key of "quiz-scores"
    localStorage.setItem('quiz-scores', JSON.stringify({
        name: name
    }));    
    };