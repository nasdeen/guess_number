'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log((document.querySelector('.number').textContent = '🔐'));
// console.log((document.querySelector('.score').textContent = '30'));

// //DOM manipulation for input field

// document.querySelector('.guess').value = 27;
// console.log(document.querySelector('.guess').value);

//HANDLING CLICK EVENTS

//document.querySelector('.btn check').textContent = 'Click';
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = '🎉 Enter a Number!';
//   }
// });

//BUILDING THE GAME LOGIC

// RANDOM NUMBER

let secretNumber = Math.trunc(Math.random() * 20) + 1; // random numbers from 0 -20
let highscore = 0;
let score = 20;

//The Event listener and Event handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //if there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🎉 Enter a Number!';

    //     //when player wins
  } else if (guess === secretNumber) {
    console.log(
      (document.querySelector('.message').textContent = '👌 Correct Number')
    );
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    console.log((document.querySelector('.number').textContent = secretNumber));

    //IMPLEMENTING HIGHSCORE
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //     //If guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent =
          '📈 Number is Too High')
      );
      score--; // decrease the score by 1
      console.log((document.querySelector('.score').textContent = score));
    } else {
      console.log(
        (document.querySelector('.message').textContent = 'You Lost the Game')
      );

      console.log((document.querySelector('.score').textContent = 0));
    }

    //     //If guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent =
          '📈 Number is Too Low')
      );
      score--; // decrease the score by 1
      console.log((document.querySelector('.score').textContent = score));
    } else {
      console.log(
        (document.querySelector('.message').textContent = 'You Lost the Game')
      );

      console.log((document.querySelector('.score').textContent = 0));
    }
  }
});

// Code challenge ***Reset*** Again button
document.querySelector('.again').addEventListener('click', function () {
  //console.log('Yes Nas');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  console.log('');
});

//IMPLEMENTING HIGHSCORES
