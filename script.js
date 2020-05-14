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
        imgSrc : "assets/html_icon.png",
        choiceA : "What you see on the browser",
        choiceB : "The standard markup language for documents designed to be displayed in a web browser",
        choiceC : "The standard markup language for things designed to be displayed ont the phone browser",
        correct : "B"
    }, {
        question : "What does HTML stand for?", 
        imgSrc : "assets/html_icon.png",
        choiceA : "Hypertext Markup Language",
        choiceB : "Hypertext Markdown Language",
        choiceC : "Hello There My Love",
        correct : "A"
    }, {
        question : "What is CSS?", 
        imgSrc : "assets/css_icon.jpg",
        choiceA : "A style sheet language used for writing the presentation of an object written in a markup language like HTML",
        choiceB : "A style sheet language used for describing the presentation of a document written in a markup language like HTML",
        choiceC : "It is something about styling",
        correct : "B"
    }, {
        question : "What does CSS stand for?", 
        imgSrc : "assets/css_icon.jpg",
        choiceA : "Cursor Style Sheets",
        choiceB : "Creative Style Sheets",
        choiceC : "Cascading Style Sheets",
        correct : "C"
    }, {
        question : "What is Javascript used for?", 
        imgSrc : "assets/js_icon.png",
        choiceA : "JavaScript is used to create elements for web pages",
        choiceB : "JavaScript is used to create responsive, interactive elements for web pages, enhancing the user experience",
        choiceC : "JavaScript is used to create responsive, interactive elements for web pages, and to make your life harder",
        correct : "B"
    }, {
        question : "What is the real name of Javascript?", 
        imgSrc : "assets/js_icon.png",
        choiceA : "ECMAScript",
        choiceB : "EICHScript",
        choiceC : "EMCAScript",
        correct : "A"
    }
];

//   variable creation   //
