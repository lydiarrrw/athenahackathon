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