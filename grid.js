const allProducts = [
  {
    name: 'Wine Bottle',
    img: 'images/wine.png',
    bin: 'recycle',
    washing: 'wash',
    label: 'remove-label',
    lid: 'remove-lid',
    description: 'Make sure you rinse our your bottles before putting them in with glass recycling. If your council collects all recycling together, make sure the bottle is dry before storing it with paper and cardboard waste.'
  },
  {
    name: 'Cardboard Pizza Box',
    img: 'images/pizza.png',
    bin: 'recycle',
    washing: 'wash',
    label: 'remove-label',
    lid: 'remove-lid',
    description: 'Your pizza box should be free of food waste before putting it into the recycling, otherwise it may contaminate everything else in there!'
  },
  {
    name: 'Spray Cleaner',
    img: 'images/water-spray.png',
    bin: 'recycle',
    washing: 'wash',
    label: 'remove-label',
    lid: 'remove-lid',
    description: 'Check out the label on your spray cleaner to see what type of plastic it is made put of. Inside the recycling symbol on the label, look for the number to see what type of plastic it is. Some places do not recycle any plastics other than types 1, 2 and 5. Also the spray top may not be recyclable. Check out your council\'s website to beforehand. '
  },
  {
    name: 'Shampoo Bottle',
    img: 'images/shampoo.png',
    bin: 'recycle',
    washing: 'wash',
    label: 'remove-label',
    lid: 'remove-lid',
    description: 'Besides making sure you bottle is free of any residual product, make sure to remove the cap or pump. These are often not recyclable and must be put into general waste.'
  },
  {
    name: 'Post it Notes',
    img: 'images/notes.png',
    bin: 'no-recycle',
    washing: 'no-wash',
    label: 'remove-label',
    lid: 'remove-lid',
    description: 'You may think all paper items are recyclable, but there are many exceptions to the rule. Firstly, the adhesive on the post it note is not recyclable and could contaminate other paper waste. Additionally, post- it notes are often too small to be picked up by scanners and therefore can not be readily recycled. Put these in general waste.'
  },
  {
    name: 'Plastic water bottle',
    img: 'images/water.png',
    bin: 'recycle',
    washing: 'no-wash',
    label: 'remove-label',
    lid: 'remove-lid',
    description: 'Separation is key to remember here. While water bottles themselves are easily recyclable, the caps are too small to be picked up by scanners and must go into general waste.'
  },
  {
    name: 'Meal Deal Container',
    img: 'images/meal.png',
    bin: 'no-recycle',
    washing: 'no-wash',
    label: 'no-remove-label',
    lid: 'no-remove-lid',
    description: 'When you finish your lunch, make sure no food waste is left. Then separate the clear film from the cardboard packaging. The clear film goes into general waste while the cardboard may be recycled.'
  },
  {
    name: 'Coffee Cup',
    img: 'images/coffee.png',
    bin: 'no-recycle',
    washing: 'no-wash',
    label: 'no-remove-label',
    lid: 'no-remove-lid',
    description: 'We wish we could recycle our takeaway coffee cups but sadly, due to food contamination, they must go into general waste. You can sometimes recycle the lids however.'
  }
]


function randomProducts() {
  const productsNew = allProducts.sort(() => Math.random() - 0.5)
  console.log(productsNew.slice(0, 5))
  return productsNew.slice(0, 5)
}

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


const recycleBin = document.querySelector('.recycle-it')
const trashBin = document.querySelector('.bin-bag')
const items = document.querySelector('.fill')

function dragEnd() {
  fill.class = 'fill'
  // if (recycleBin && items.classList.contains('recycle')) {
//   console.log('hello')
//   items.classList.add('invisible')
// } else if (trashBin && items.classList.contains('no-recycle')) {
//   console.log('it is trash')
//   items.classList.add('invisible')
// } else {
//   console.log('nothing')
// }

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

let draggedItem = null

window.onload = function () {
  const items = document.querySelector('.products')
  const products = randomProducts()
  for (let i = 0; i < products.length; i++) {
    const img = document.querySelector('.fill')
    img.setAttribute('style', 'position: sticky;')
    img.setAttribute('src', products[i].img)
    img.classList.add(products[i].bin)
    img.classList.add(products[i].label)
    img.classList.add(products[i].lid)
    img.classList.add(products[i].washing)
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

//  * Modal rules
document.querySelectorAll('.close').forEach(item => {
  item.addEventListener('click', event => {
    event.target.parentNode.style.display = 'none'
  })
})
document.querySelector('#info').addEventListener('click', event => {
  console.log('in your click')
  document.querySelectorAll('.modal').forEach(item => {
    item.classList.add('show-modal')
  })
})
document.querySelectorAll('.skip').forEach(item => {
  item.addEventListener('click', event => {
    console.log('in your skip click')
    document.querySelectorAll('.modal').forEach(item => {
      item.classList.remove('show-modal')
    })
  })
})
