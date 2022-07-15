const submitButton = document.querySelector('#submit-btn')
const quizForm = document.querySelector('.quiz-form')

const outputElement = document.querySelector('.quiz-score')

const correctAnswers = ['90°', 'Right Angle', '12, 16, 20', 'Equilateral triangle', '100°', '30°', 'a + b + c', '45°'];
submitButton.addEventListener('click',calculateScore)

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);

  for(let value of formResults.values()) {
      if (value === correctAnswers[index]) {
          score++;
      }
      index++;
  }
  
  outputElement.innerHTML = `Your Score is <span>${score}</span>/8`
}