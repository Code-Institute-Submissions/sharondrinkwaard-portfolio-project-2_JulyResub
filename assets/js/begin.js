document.addEventListener("DOMContentLoaded", function () {


});

//form.addEventListener('submit');
const form = document.getElementById('form-id');

form.onsubmit = function (event) {
    event.preventDefault();

    // get the "name" value from the forms input called "name"
    const name = event.target.name.value;

    // set the item into local storage under the key of "quiz-scores"
    localStorage.setItem('quiz-scores', JSON.stringify({
        name: name
    }));
}