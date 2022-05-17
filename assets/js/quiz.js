// Load DOM content before starting the game
document.addEventListener("DOMContentLoaded", function() {
    //enter.addEventListener('click', startQuiz);
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
//const introText = document.getElementById('header-text');
const questionAsked = document.getElementById('question');
const answerChoices = document.getElementById('answer-btns');
//const resultShow = document.getElementById('results');
//let enter = document.getElementById('enter');

let shuffledQuestions, currentQuestionIndex;

let score = 0;
//let questionCounter = 0;
//let acceptingAnswers = true;
//let correctAnwsers = true;
// Getting the storage object - I learned this from Sean from Tutor support, and from Brian Design on YouTube
let storageObject = localStorage.getItem('quiz-scores'); 
storageObject = JSON.parse(storageObject);

// FUNCTIONS

/**
 * Starts and runs the game
 */
function startQuiz() {
    startButton.classList.add('hide');
    questionContainer.classList.add('hide');
    answerChoices.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
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
        // this should only run after the game is complete
        localStorage.setItem('quiz-scores', JSON.stringify({...storageObject, scores: score}));
        scoresButton.innerText = 'Save';
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
 * Counts the scores and logs them to the console
 */
function selectAnswer(e) {
    if (e.target.dataset.correct) {
        score++;
        console.log(score);
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

// Img array for 1 specific question -- NOT WORKING YET
//imgAray = ['france_flag.png', 'netherlands_flag.png', 'spain_flag.png', 'sweden_flag.png'];
