// Load DOM content before starting the game
document.addEventListener("DOMContentLoaded", function() {
    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
});
});

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const scoresButton = document.getElementById('scores-btn');
const questionContainer = document.getElementById('question-container');
const questionAsked = document.getElementById('question');
const answerChoices = document.getElementById('answer-btns');
const consoleButtons = document.getElementById('console');

let shuffledQuestions, currentQuestionIndex;

let score = 0;
// Getting the storage object - I learned this from Sean from Tutor support, and from Brian Design on YouTube
let storageObject = localStorage.getItem('quiz-scores'); 
storageObject = JSON.parse(storageObject);

// This links to the scores page, I used this instead of the previous 'onclick' event in HTML
scoresButton.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = 'highscores.html';
});

// FUNCTIONS

/**
 * Starts and runs the game
 */
function startQuiz() {
    // Using the 'hide' class makes buttons and links appear and disappear at the right time
    startButton.classList.add('hide');
    questionContainer.classList.add('hide');
    consoleButtons.classList.remove('hide');
    answerChoices.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionAsked.classList.remove('hide');
    nextQuestion();
}

/**
 * Shows the shuffled questions and shows the "next" button as long as the game is playing.
 * When the game is over, the score is being added to the storage object
 */
function nextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide');
    } else {
        localStorage.setItem('quiz-scores', JSON.stringify({...storageObject, scores: score}));
        scoresButton.classList.remove('hide');
    }
}

function showQuestion(question) {
    questionAsked.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerChoices.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerChoices.firstChild) {
        answerChoices.removeChild(answerChoices.firstChild);
    }
}

/** 
 * Counts the scores
 */
function selectAnswer(e) {

    if (e.target.dataset.correct) {
        score++;
        // This disables the buttons to be clicked again so the scores can only increase once per question
        e.target.style.pointerEvents = 'none';
    }
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerChoices.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
}

/** 
 * Sets the background color of the answers to red or green
*/
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/**
 * Clears the background color of correct and incorrect answers
 */
function clearStatusClass (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// QUIZ QUESTIONS AND ANSWERS ARRAY
const questions = [
    {
        question: 'In what continent is the Netherlands located?',
        answers: [
            { text: 'Europe', correct: true, correctAnwsers: true, points: 1 },
            { text: 'Asia', correct: false },
            { text: 'South America', correct: false },
            { text: 'Africa', correct: false },
        ]
    },
    {
        question: 'How many windmills are there in the Netherlands?',
        answers: [
            { text: '< 100', correct: false },
            { text: '> 1000', correct: true, correctAnwsers: true, points: 1 },
            { text: '< 500', correct: false },
            { text: '> 5000', correct: false }
        ]
    },
    {
        question: 'What language do they speak in the Netherlands?',
        answers: [
            { text: 'Flemish', correct: false },
            { text: 'Dutch', correct: true, correctAnwsers: true, points: 1 },
            { text: 'French', correct: false },
            { text: 'German', correct: false }
        ]
    },
    {
        question: 'What colors does the Dutch flag have?',
        answers: [
            { text: 'Black yellow and red', correct: false },
            { text: 'Red white and blue', correct: true, correctAnwsers: true, points: 1 },
            { text: 'Blue and white', correct: false },
            { text: 'Red and yellow', correct: false }
        ]
    },
    {
        question: 'What was the currency of the Netherlands before the euro was adopted?',
        answers: [
            { text: 'Guilder', correct: true, correctAnwsers: true, points: 1},
            { text: 'Pound', correct: false },
            { text: 'Dollar', correct: false },
            { text: 'Crown', correct: false }
        ]
    },
    {
        question: 'How many citizens does the Netherlands have?',
        answers: [
            { text: '8 million', correct: false },
            { text: '10 million', correct: false },
            { text: '17 million', correct: true, correctAnwsers: true, points: 1 },
            { text: '20 million', correct: false }
        ]
    },
    {
        question: 'Where do the Dutch use windmills for?',
        answers: [
            { text: 'To generate electricity', correct: false },
            { text: 'To pump water', correct: false },
            { text: 'Grind grain into flour', correct: false },
            { text: 'All answers are correct', correct: true, correctAnwsers: true, points: 1 }
        ]
    },
    {
        question: 'What is the literal translation of the word Netherlands?',
        answers: [
            { text: 'Smaller countries', correct: false },
            { text: 'Higher countries', correct: false },
            { text: 'Flat countries', correct: false },
            { text: 'Lower countries', correct: true, correctAnwsers: true, points: 1 }
        ]
    },
    {
        question: 'What is the average life expectancy of a Dutch person?',
        answers: [
            { text: 'Less than 70 years', correct: false },
            { text: 'Around 75 years', correct: false },
            { text: 'Around 82 years', correct: true, correctAnwsers: true, points: 1 },
            { text: 'Over 92 years', correct: false }
        ]
    },
    {
        question: 'What is the average height of Dutch men?',
        answers: [
            { text: '165cm', correct: false },
            { text: '183cm', correct: true, correctAnwsers: true, points: 1 },
            { text: '175cm', correct: false },
            { text: '170cm', correct: false }
        ]
    },
    {
        question: 'What alcoholic drink did the Dutch invent?',
        answers: [
            { text: 'Gin', correct: true, correctAnwsers: true, points: 1 },
            { text: 'Rum', correct: false },
            { text: 'Vodka', correct: false },
            { text: 'Amaretto', correct: false }
        ]
    }
];