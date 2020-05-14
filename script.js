// declare all elements //

const startQ = document.querySelector("#startQ");
const quiz = document.querySelector("#quiz");
const question = document.querySelector("#question");
const QImg = document.querySelector("#QImg");
const  choiceA = document.querySelector("#A");
const  choiceB = document.querySelector("#B");
const  choiceC = document.querySelector("#C");
const counter = document.querySelector("#counter");
const timeGauge = document.querySelector("#timeGauge");
const progress = document.querySelector("#progress"); 
const score = document.querySelector("#score"); 

//  create questions  //

let questions = [
    {
        question : "What is HTML?", 
        imgSrc : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        correct : 
    }
]
