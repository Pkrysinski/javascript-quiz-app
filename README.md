# javascript-quiz-app

## Purpose

The purpose of this weeks challenge is to have us build a quiz based on JavaScript fundamentals we've covered in the bootcamp so far.  The Quiz will prompt a user to start via a button, which will trigger a timer to start in the top-right via an event listener.  The user will then be promped through a series of basic multiple-choice questions, and depending if the user is correct or not, will either reset the timer back to 10 seconds, or decriment it by some time (TODO: TBD on time to decriment).  The user will also be able to view their previous high scores in the upper-left hand corner.

## Link to Deployed Application

## Acceptence Criteria Notes

GIVEN I am taking a code quiz...

- - - - -
WHEN I click the start button
THEN a timer starts and I am presented with a question
>Timer logic has been implemented in the HTML and JS files.  The timer starts via use of an event listener, upon button click of the startQuiz button, which then starts the timers in the top-right to count down from 10 and decrement 1 second every second.

- - - - -
WHEN I answer a question
THEN I am presented with another question
- - - - -

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
- - - - -

WHEN all questions are answered or the timer reaches 0
THEN the game is over
- - - - -

WHEN the game is over
THEN I can save my initials and my score
