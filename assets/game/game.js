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
    {}
]