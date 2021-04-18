const finaleDate = new Date('March 19, 2022 00:00:00').getTime()

const timer = () => {
  const now = new Date().getTime()
  let diff = finaleDate - now
  // Showing the alert when the counter time finishes.
  if (diff < 0) {
    document.querySelector('.alert').style.display = 'block'
    document.querySelector('.container').style.display = 'none'
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24))
  let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60))
  let seconds = Math.floor(diff % (1000 * 60) / 1000)
  // Adding the zeros
  minutes <= 9 ? minutes = `0${minutes}` : minutes
  seconds <= 9 ? seconds = `0${seconds}` : seconds


  document.querySelector('#minutes').textContent = minutes
  document.querySelector('#seconds').textContent = seconds

}
timer()
// Calling the function every 1000 milliseconds.
setInterval(timer, 1000)