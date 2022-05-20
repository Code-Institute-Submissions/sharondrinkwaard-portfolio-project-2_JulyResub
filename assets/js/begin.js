document.addEventListener("DOMContentLoaded", function () {
});

const enterButton = document.getElementById('enter');
enterButton.addEventListener('click', enterQuiz);

// ADD function to Disable Enter button until Username is filled in
// Alert user to fill in a username

function enterQuiz(enterButton) {
    if (document.getElementById('username-input').value === "") {
        enterButton.disabled = true;
    }
};

const form = document.getElementById('form-id');
form.onsubmit = function (event) {
    event.preventDefault();
    // Get the "name" value from the forms input called "name"
    const name = event.target.name.value;
    // Set the item into local storage under the key of "quiz-scores"
    localStorage.setItem('quiz-scores', JSON.stringify({
        name: name
    }));    
    };