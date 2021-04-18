const allProducts = [
  {
    name: "Wine Bottle",
    img: 'images/wine-bottle.png',
    bin: 'recycle',
    washing: 'wash',
    label: 'remove-label',
    lid: 'remove-lid',
    description: 'Make sure you rinse our your bottles before putting them in with glass recycling. If your council collects all recycling together, make sure the bottle is dry before storing it with paper and cardboard waste.'
  },
  {
    name: "Cardboard Pizza Box",
    img: 'images/box.png',
    bin: 'recycle',
    washing: 'wash',
    label: 'remove-label',
    lid: 'remove-lid',
    description: 'Your pizza box should be free of food waste before putting it into the recycling, otherwise it may contaminate everything else in there!'
  },
  {
    name: "Spray Cleaner",
    img: '',
    bin: 'recycle',
    washing: 'wash',
    label: 'remove-label',
    lid: 'remove-lid',
    description: 'Check out the label on your spray cleaner to see what type of plastic it is made put of. Inside the recycling symbol on the label, look for the number to see what type of plastic it is. Some places do not recycle any plastics other than types 1, 2 and 5. Also the spray top may not be recyclable. Check out your council\'s website to beforehand. '
  },
  {
    name: "Shampoo Bottle",
    img: '',
    bin: 'recycle',
    washing: 'wash',
    label: 'remove-label',
    lid: 'remove-lid',
    description: 'Besides making sure you bottle is free of any residual product, make sure to remove the cap or pump. These are often not recyclable and must be put into general waste.'
  },
  {
    name: "Post it Notes",
    img: '',
    bin: 'no-recycle',
    washing: 'no-wash',
    label: 'remove-label',
    lid: 'remove-lid',
    description: 'You may think all paper items are recyclable, but there are many exceptions to the rule. Firstly, the adhesive on the post it note is not recyclable and could contaminate other paper waste. Additionally, post- it notes are often too small to be picked up by scanners and therefore can not be readily recycled. Put these in general waste.'
  },
  {
    name: "plastic water bottle",
    img: '',
    bin: 'recycle',
    washing: 'no-wash',
    label: 'remove-label',
    lid: 'remove-lid',
    description: 'Separation is key to remember here. While water bottles themselves are easily recyclable, the caps are too small to be picked up by scanners and must go into general waste.'
  },
  {
    name: "Meal Deal Container",
    img: '',
    bin: 'no-recycle',
    washing: 'no-wash',
    label: 'no-remove-label',
    lid: 'no-remove-lid',
    description: 'When you finish your lunch, make sure no food waste is left. Then separate the clear film from the cardboard packaging. The clear film goes into general waste while the cardboard may be recycled.'
  },
  {
    name: "Coffee Cup",
    img: '',
    bin: 'no-recycle',
    washing: 'no-wash',
    label: 'no-remove-label',
    lid: 'no-remove-lid',
    description: 'We wish we could recycle our takeaway coffee cups but sadly, due to food contamination, they must go into general waste. You can sometimes recycle the lids however.'
  }

]

const productImg = allProducts.map(item => {
  return item.img
})

const productBin = allProducts.map(item => {
  return item.bin
})

const productWashing = allProducts.map(item => {
  return item.washing
})

const productLabel = allProducts.map(item => {
  return item.label
})

const productLid = allProducts.map(item => {
  return item.lid
})

//---------------------


function randomProducts() {
  // let imgArr = [];
  // for (let i = 0; i < 6; i++) {
  //   let rand = allProducts[Math.floor(Math.random() * allProducts.length)];
  //   imgArr.push(rand);

  // }

  // console.log(imgArr)
  const productsNew = allProducts.sort(() => Math.random() - 0.5)
  console.log(productsNew.slice(0, 5))
  return productsNew.slice(0, 5)

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


window.onload = function () {
  const items = document.querySelector('.products')
  for (let i = 0; i < 5; i++) {
    const img = document.querySelector('img')
    img.setAttribute('style', 'position: sticky;')
    img.setAttribute('src', productImg[i])
    img.classList.add(productBin[i])
    img.classList.add(productLabel[i])
    img.classList.add(productLid[i])
    img.classList.add(productWashing[i])
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

