function randomProducts() {
  const imgArr = []
  for (let i = 0; i < 6; i++) {
    const imgs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const rand = imgs[Math.floor(Math.random() * 10)]
    imgArr.push(rand)
  }
  console.log(imgArr)
}
                
randomProducts()
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
  fill.classList.add('hold')
  setTimeout(() => (fill.class = 'invisible'), 0)
}

function dragEnd() {
  fill.class = 'fill'
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
  this.classList.add('hovered')
}

function dragLeave() {
  this.class = 'empty'
}

function dragDrop() {
  this.class = 'empty'
  this.append(fill)
}

window.onload = function() {
  const items = document.querySelector('.products')
  for (let i = 0; i < 5; i++) {
    const img = document.querySelector('img')
    img.setAttribute('style', 'position: sticky;')
    img.setAttribute('src', './images/recycle.png')
    items.appendChild(img)
    const xy = getRandomPosition(img)
    img.style.top = xy[0] + 'px'
    img.style.left = xy[1] + 'px'
  }
}

function getRandomPosition(element) {
  const productArea = document.querySelector('.products')
  const y = productArea.offsetHeight - element.clientHeight
  const x = productArea.offsetWidth - element.clientWidth
  const randomX = Math.floor(Math.random() * x)
  const randomY = Math.floor(Math.random() * y)
  return [randomX, randomY]
}