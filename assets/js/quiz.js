const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const introText = document.getElementById('header-text');
const questionAsked = document.getElementById('question');
const answerChoices = document.getElementById('answer-btns');

let shuffledQuestions, currentQuestionIndex;




startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);

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
    }
]