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

function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    nextQuestion();
}

function nextQuestion() {
    //showQuestion(questions[0]);
    //for (let i = 0; i < questions.length; i++){}
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

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

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
        question: 'What language do they speak in the Netherlands?',
        answers: [
            { text: 'Flemish', correct: false },
            { text: 'Dutch', correct: true },
            { text: 'French', correct: false },
            { text: 'German', correct: false }
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
        question: 'What does the Dutch flag look like?',
        answers: [
            { text: '' correct: false },
            { text: 'Dutch', correct: false },
            { text: 'French', correct: false },
            { text: 'German', correct: true }
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
        question: 'There do the Dutch use windmills for?',
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