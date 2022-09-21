const calculateButton = document.querySelector('.calculate-btn')
const base = document.querySelector('#base-value')
const height = document.querySelector('#height-value')
const outputElement = document.querySelector('#output-message')

calculateButton.addEventListener('click',calculateArea)

function calculateArea() {

  const baseLength = base.value 
  const heightLength = height.value 
  const product = baseLength * heightLength
  const area = 1/2 * product
  outputElement.innerText = "The area is " + area + "cm²"
}