/*Creating constant variables. Not planning to re-assign these. Will change later on if needed. */
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

/*Let variables*/

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [

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
    },

]