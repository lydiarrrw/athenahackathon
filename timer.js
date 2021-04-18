let timeLeft = 30
const elem = document.getElementById('timer')
const timerId = setInterval(countdown, 1000)

function countdown() {
  if (timeLeft === -1) {
    clearTimeout(timerId)
    doSomething()
  } else {
    elem.innerHTML = timeLeft
    timeLeft--
  }
}

function doSomething() {
  alert('Time\'s Up!')
}