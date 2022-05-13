const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const introText = document.getElementById('header-text');
const questionAsked = document.getElementById('question');
const answerChoices = document.getElementById('answer-btns');

let shuffledQuestions, currentQuestionIndex;


startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
});

let score = 0;
let questionCounter = 0;
let acceptingAnswers = true;




// Functions

/**
 * Starts and runs the game
 */
function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    nextQuestion();
}

function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionAsked.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerChoices.appendChild(button)
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerChoices.firstChild) {
        answerChoices.removeChild(answerChoices.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerChoices.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart',
        startButton.classList.remove('hide')
    }
    
}
/** 
 * Sets the background color of the chosen answer to red or green
*/
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
/**
 * Clears the background color of correct and incorrect answers
 */
function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


/**
 * Gets the current score from the DOM and increments the correct of incorrect score
 */
function incrementCorrectScore() {
    let newScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++newScore;
}
function incremenWrongScore() {
    let newScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++newScore;
}

// Quiz questions array
const questions = [
    {
        question: 'In what continent is the Netherlands located?',
        answers: [
            { text: 'Europe', correct: true },
            { text: 'Asia', correct: false },
            { text: 'South America', correct: false },
            { text: 'Africa', correct: false },
        ]
    },
    {
        question: 'What language do they speak in the Netherlands?',
        answers: [
            { text: 'Flemish', correct: false },
            { text: 'Dutch', correct: true },
            { text: 'French', correct: false },
            { text: 'German', correct: false }
        ]
    },
    {
        question: 'What colors does the Dutch flag have?',
        answers: [
            { text: 'Black yellow and red', correct: false },
            { text: 'Red white and blue', correct: true },
            { text: 'Blue and white', correct: false },
            { text: 'Red and yellow', correct: false }
        ]
    },
    {
        question: 'What was the currency of the Netherlands before the euro was adopted?',
        answers: [
            { text: 'Guilder', correct: true },
            { text: 'Pound', correct: false },
            { text: 'Dollar', correct: false },
            { text: 'Crown', correct: false }
        ]
    },
    {
        question: 'Where do the Dutch use windmills for?',
        answers: [
            { text: 'To generate electricity', correct: true },
            { text: 'To pump water', correct: true },
            { text: 'Grind grain into flour', correct: true },
            { text: 'All answers are correct', correct: true }
        ]
    },
    {
        question: 'What is the literal translation of the word Netherlands?',
        answers: [
            { text: 'Smaller countries', correct: false },
            { text: 'Higher countries', correct: false },
            { text: 'Flat countries', correct: false },
            { text: 'Lower countries', correct: true }
        ]
    },
    {
        question: 'What is the average height of Dutch men?',
        answers: [
            { text: '165cm', correct: false },
            { text: '183cm', correct: true },
            { text: '175cm', correct: false },
            { text: '170cm', correct: false }
        ]
    },
    {
        question: 'What alcoholic drink did the Dutch invent?',
        answers: [
            { text: 'Gin', correct: true },
            { text: 'Rum', correct: false },
            { text: 'Vodka', correct: false },
            { text: 'Amaretto', correct: false }
        ]
    }
]
// Img array for 1 specific question -- NOT WORKING YET
imgAray = ['france_flag.png', 'netherlands_flag.png', 'spain_flag.png', 'sweden_flag.png'];