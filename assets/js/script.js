// Query Selector Variables
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");

// Global Variables
var timer;
var timerCount;

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        startButton.disabled = false;
      }
    }, 1000);
  }

// The startGame function is called when the start button is clicked
function startQuiz() {
    timerCount = 10;
    timerElement.textContent = timerCount;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
  }

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);
