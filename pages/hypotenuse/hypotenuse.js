const sideA = document.querySelector('#base-value-a')
const sideB = document.querySelector('#base-value-b')
const button = document.querySelector('.calculate-btn')
const outputElement = document.querySelector('#output-message')

button.addEventListener('click',calculateHypotenuse)

// calculating sum of squares 
function calculateSumOfSquares(a,b) {
  const sumOfSquares = a*a + b*b 
  return sumOfSquares
}

// calculating Hypotenuse
function calculateHypotenuse() {

  let a = Number(sideA.value)
  let b = Number(sideB.value)

  if(a && b) {
    if(a>0 && b>0) {
      const sumOfSquares = calculateSumOfSquares( a , b)
      const c = Math.sqrt(sumOfSquares)
      outputElement.innerHTML = `The Hypotenuse is <span>${c}</span>`
    }
    else {
      outputElement.innerHTML = 'Sides Cannot be Negative !!'
    }
  } else {
    outputElement.innerHTML = 'Enter both fields !!'
  }

}