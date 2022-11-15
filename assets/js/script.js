// Query Selector Variables
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var questionsEL = document.querySelector(".questions");
var answersEL = document.querySelector(".answers");


// Global Variables
var timer;
var timerCount;
var currentQuestion = 0;
var totalCorrectAnswers = 0;

var allQuestions = {
  'Commonly used data types DO NOT include: ' : ['alerts', 'booleans', 'strings', 'numbers', 0],
  'String values must be enclosed within _________ when being assigned to variables:' : ['commas', 'brackets' , 'quotes', 'parenthesis', 2],
  'A very useful tool used during development and bebugging  for printing content to the debugger is: ' : ['JavaScript', 'terminal/bash', 'for loops', 'console.log', 3],
  'The "function" and "var" are known as: ' : ['Keywords', 'Data types', 'Declaration statements', 'Prototypes', 2],
  'DOM stands for : ' : ['Director of Magic', 'Department of Maniacs', 'Dust on Machines', 'Document Object Model', 3],
  'Is this a true or false question?' : ['True', 'False', 1]
};

function loadQuestion(currentQuestion) {
  // This function loads all the question into the questionsEL
  // It grabs the current question based on the 'currentQuestion'-variable
  
    var question = Object.keys(allQuestions)[currentQuestion];
    
    questionsEL.innerHTML = '';
    questionsEL.innerHTML = question;   

};

function loadAnswers(currentQuestion) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the currentQuestion-variable
  // Every answer is added with an 'onclick'-function
  
    var answers = allQuestions[Object.keys(allQuestions)[currentQuestion]];
    
    answersEL.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createButton = document.createElement('button'),
          text = document.createTextNode(answers[i]);
      
          createButton.appendChild(text);
          createButton.addEventListener("click", checkAnswer(i, answers));
          createButton.setAttribute(
            "style", "background-color: purple; color: white; border-radius: 4px;"
          );
      
      
      answersEL.appendChild(createButton);
    }
  };

  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        //TODO: Increment "totalCorrectAnswers" by 1, store in local storage
        totalCorrectAnswers += 1; 
      } else {
        //TODO: Remove time from clock
        timerCount = timerCount - 3;
      }
      
      if (currentQuestion < Object.keys(allQuestions).length -1) {
        currentQuestion += 1;
        
        loadQuestion(currentQuestion);
        loadAnswers(currentQuestion);
      } else {
        questionsEL.innerHTML = 'All done!';
        answersEL.innerHTML = '';

        //Show the "Start Quiz" button when the quiz is over
        document.getElementById("start-button").style.visibility="visible";

        console.log(totalCorrectAnswers);
      }
                              
    };
  }


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timerCount = 60;
    timerElement.textContent = timerCount;

    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        startButton.disabled = true;
      }
    }, 1000);
};

// The startGame function is called when the start button is clicked
function startQuiz() {

    // Prevents start button from being clicked when round is in progress
    currentQuestion = 0;

    // Hide the "Start Quiz" button when the quiz starts
    document.getElementById("start-button").style.visibility="hidden";

    startTimer();
    loadQuestion(currentQuestion);
    loadAnswers(currentQuestion);
};

// Attach event listener to start button to call startGame function on click
function init() {
  startButton.addEventListener("click", startQuiz);

  startButton.setAttribute(
    "style", "background-color: white; color: purple; box-shadow: 10px 5px 5px purple;"
  );
};



// Calls init() so that it fires when page opened
init();
