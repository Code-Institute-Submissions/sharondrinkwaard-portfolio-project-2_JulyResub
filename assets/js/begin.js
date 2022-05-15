document.addEventListener("DOMContentLoaded", function() {
    
    
});

//form.addEventListener('submit');
const form = document.getElementById('form-id');
form.onsubmit = function(event) {
    event.preventDefault();

    //const name = document.getElementById('form-id').getAttribute('name');
    name = event.target.name;
    ﻿localStorage.setItem('quiz-scores', JSON.stringify({ name: name}));
    }

