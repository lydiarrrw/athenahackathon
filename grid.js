const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}

function dragStart() {
  fill.class += ' hold'
  setTimeout(() => (fill.class = 'invisible'), 0)
  console.log('start')
}

function dragEnd() {
  fill.class = 'fill'
  console.log('end')
}

function dragOver(e) {
  e.preventDefault()
  console.log('over')
}

function dragEnter(e) {
  e.preventDefault()
  this.class += ' hovered'
  console.log('enter')
}

function dragLeave() {
  this.class = 'empty'
  console.log('leave')
}

function dragDrop() {
  this.class = 'empty'
  this.append(fill)
  console.log('drop')
}

window.onload = function() {
  const items = document.querySelector('.products')
  for (let i = 0; i < 5; i++) {
    const img = document.querySelector('img')
    img.setAttribute('style', 'position: relative;')
    img.setAttribute('src', './images/recycle.png')
    items.appendChild(img)
    const xy = getRandomPosition(img)
    console.log(xy)
    img.style.top = xy[0] + 'px'
    img.style.left = xy[1] + 'px'
  }
}

function getRandomPosition(element) {
  const productArea = document.querySelector('.products')
  const x = productArea.offsetHeight - element.clientHeight
  const y = productArea.offsetWidth - element.clientWidth
  const randomX = Math.floor(Math.random() * x)
  const randomY = Math.floor(Math.random() * y)
  return [randomX, randomY]
}