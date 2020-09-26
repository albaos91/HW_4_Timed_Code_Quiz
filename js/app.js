
// declare all elements //

const startQ = document.querySelector("#startQ");
const quiz = document.querySelector("#quiz");
const question = document.querySelector("#question");
const QImg = document.querySelector("#QImg");
const choiceA = document.querySelector("#A");
const choiceB = document.querySelector("#B");
const choiceC = document.querySelector("#C");
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

const lastQuestion = questions. length -1;
let runningQ = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let timer;

//   start the quiz   //

startQ.addEventListener("click", startQuiz);

function startQuiz(){
    startQ.style.display = "none";
    runQuestion();
    quiz.style.display = "block";
    Qprogress();
    Qcounter();
    timer = setInterval(Qcounter,1000);
    let score = 0;
}

//   function to run the questions   //

function runQuestion(){
    let q = question[runningQ];
    question.innerHTML = "<p>" + q.question + "</p>";
    QImg.innerHTML = "<img src="+ q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

//   list the question progress   //

function Qprogress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        Qprogress.innerHTML += "<div class='prog' id="+qIndex+"></div>";
    }
}

//   list correct answers   //

function checkAnswer(answer){
    if(answer == questions[runningQ].correct) {
        score ++;
    } else {timer('decrement()', 2000);}
    count = 0;
    if(runningQ < lastQuestion){
        runningQ++;
        runQuestion();
    } else{
        clearInterval(timer);
        score();
    }
}


//   create the time counter   //

function Qcounter () {
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
    }
}