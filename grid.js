function randomProducts() {
  let imgArr = [];
  for (let i = 0; i < 6; i++) {
  const imgs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let rand = imgs[Math.floor(Math.random() * 10)];
    imgArr.push(rand);
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
  fill.class += 'hold'
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
  this.class += 'hovered'
}

function dragLeave() {
  this.class = 'empty'
}
function dragDrop() {
  this.class = 'empty'
  this.append(fill)
}

function getRandomPosition(element) {
  const grid = document.querySelector('.grid')
  const x = grid.offsetHeight - element.clientHeight
  const y = grid.offsetWidth - element.clientWidth
  const randomX = Math.floor(Math.random() * x)
  const randomY = Math.floor(Math.random() * y)
  
  return [randomX,randomY]
}

window.onload = function() {
  const grid = document.querySelector('.grid')
  const img = document.createElement('img')
  img.setAttribute('style', 'position: relative;')
  img.setAttribute('src', './images/recycle.png')
  grid.appendChild(img)
  const xy = getRandomPosition(img)
  console.log(xy)
  img.style.top = xy[0] + 'px'
  img.style.left = xy[1] + 'px'
}