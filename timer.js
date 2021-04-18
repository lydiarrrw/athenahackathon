let timeLeft = 30
const elem = document.getElementById('timer')
const timerId = setInterval(countdown, 1000)

function countdown() {
  if (timeLeft === -1) {
    clearTimeout(timerId)
    doSomething()
  } else {
    elem.innerHTML = 'Time: ' + timeLeft
    timeLeft--
  }
}

function doSomething() {
  alert('Time\'s Up!')
}

/* let timeLeft = 30
const elem = document.getElementById('timer')
const startButton = document.querySelector('#play')
startButton.addEventListener('click', event => {
  const timerId = setInterval(countdown, 1000)
  clearTimeout(timerId)
})
function countdown(timerId) {
  if (timeLeft === -1) {
    clearTimeout(timerId)
    doSomething()
  } else {
    elem.innerHTML = 'Time: ' + timeLeft
    timeLeft--
  }
}
function doSomething() {
  alert('Time\'s Up!')
} */