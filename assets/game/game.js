//Creating constant variables. Not planning to re-assign these. Will change later on if needed. 
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const timerText = document.getElementById('timer');

//Let variables

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    //Array of objects
    {
        question:"Div is a ...?",
        choice1: "element",
        choice2: "selector",
        choice3: "attribute",
        choice4: "property",
        answer: 1,
    },

    {
        question:"What phrase is in Camel Case?",
        choice1: "myfalseboolean",
        choice2: "myFalseBoolean",
        choice3: "MyFalseBoolean",
        choice4: "my_false_boolean",
        answer: 2,
    },

    {
        question: "Math.floor does what?",
        choice1: "Is a built-in object that has properties and methods for mathematical constants and functions.",
        choice2: "Returns a random number between 0 (inclusive),  and 1 (exclusive).",
        choice3: "Returns the largest integer less than or equal to a given number.",
        choice4: "Returns the square root of the sum of squares of its arguments.",
        answer: 3,
    },

    {
        question: "Which statement below is true?",
        choice1: "50 === -50",
        choice2: "46 > 46",
        choice3: "22 !== 22",
        choice4: "10001 <= 10001",
        answer: 4,
    },

    {
        question: "console.log does what?",
        choice1: "Is a method that outputs a message to the web console.",
        choice2: "Invokes a function.",
        choice3: "Is a attribute that specifies the type of button",
        choice4: "This allows you to find all HTML elements with the same class name.",
        answer: 1,
    }
]

//Timer
const startingMinute = 1;
let time = startingMinute * 60;

const countDownE1 = document.getElementById('timer');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownE1.innerHTML = `${minutes} : ${seconds}`;
    time --;

};


//Constants

const correctBonus = 20;
const maxQuestions = 5;

//When the game initiates, everything is set to 0
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};
getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= maxQuestions){
        //GO to the end page
        return window.location.assign('../end/end.html');
    }
    
    //Chooses a random question per the questionIndex
    questionCounter++;

    //Displays the number of what question the user is on.
    questionCounterText.innerText = questionCounter + "/" + maxQuestions;

    var questionIndex = Math.floor(Math.random() * availableQuestions.length);

    currentQuestion = availableQuestions[questionIndex];

    question.innerText = currentQuestion.question;

    //Ensures that the choices correspond with the question above
    choices.forEach( choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    //Gets rid of the question we just used
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

//This allows for us to get a reference to which choice they selected.
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;

        var selectedChoice = e.target;

        var selectedAnswer = selectedChoice.dataset["number"];
    
        //sets the default to incorrect so that when the answer is selected correctly, the if will cause it to display correct.
        var classToApply = 'incorrect';
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
        };
        if(classToApply === 'correct'){
            incrementScore(correctBonus);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);    
    })
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();