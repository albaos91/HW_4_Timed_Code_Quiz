/   function creation   //

function beginQuiz() {
    // Start timer
    // Refer to activities 8 and 9 in week 04-Web-APIs

    // Make next question display
    question.textContent = questions[0].question;
    choiceA.textContent = questions[0].choiceA;
    choiceB.textContent = "The standard markup language for documents designed to be displayed in a web browser";
    choiceC.textContent = "The standard markup language for things designed to be displayed ont the phone browser";
    
    // When someone clicks on choiceA, choiceB, or choiceC
    choiceA.addEventListener("click", checkAnswer);
    choiceB.addEventListener("click", checkAnswer);
    choiceC.addEventListener("click", checkAnswer);

};

// Checks the answer
function checkAnswer(event) {
    console.log(event.target.id);
    // 1. If answer is wrong, timer decreases by 2 seconds and you tell them "wrong!"
    if (event.target.id === questions[0].correct) {
        // tell user they're right
    } else {
        // tell user they're wrong
        // decrease timer by 2 seconds
    }

    // 2. Move onto next question
    
}
// Add an eventListener to the button labeled startQ
startQ.addEventListener("click", beginQuiz);