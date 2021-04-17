const grid = document.querySelector('.grid')
const width = 18
const cells = []
const walls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 25, 28, 35, 36, 38, 39, 40, 41, 43, 46, 48, 49, 50, 51, 53, 54, 56, 57, 58, 59, 66, 67, 68, 69, 71, 72, 79, 80, 81, 82, 89, 90, 92, 94, 95, 97, 98, 99, 100, 102, 103, 104, 105, 107, 108, 110, 112, 121, 123, 125, 126, 128, 129, 130, 132, 133, 134, 135, 136, 137, 139, 141, 143, 150, 155, 162, 164, 165, 166, 168, 173, 175, 176, 177, 179, 180, 182, 183, 184, 186, 187, 190, 191, 193, 194, 195, 197, 198, 200, 201, 202, 211, 212, 213, 215, 216, 223, 224, 225, 226, 233, 234, 236, 237, 238, 239, 246, 249, 251, 252, 254, 257, 259, 262, 264, 267, 269, 270, 272, 275, 277, 278, 279, 280, 282, 283, 284, 285, 287, 288, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323]
const pen = [248, 250, 268, 269, 270, 289]
const winner = document.querySelector('.finalScore')
const result = document.querySelector('.image')

let foodCount = 0
let energizerCount = 0
const scoreKeeper = document.querySelector('.score')
let greyMode = false
let lives = 3
const livesLeft = document.querySelector('.life')
//console.log(livesLeft)
const energizer = [21, 38, 361, 358]
let pacman = 47
let score = 0

let pinkGhost = 268
let greenGhost = 248
let orangeGhost = 269
let blueGhost = 270


//GRID & WALLS

for (let index = 0; index < width ** 2; index++) {
  const cell = document.createElement('div')

  if (walls.includes(index)) {
    cell.classList.add('walls')
  } else {
    cell.classList.add('notwalls')
  }

  if (energizer.includes(index)) {
    cell.classList.add('energy')
    energizerCount++
  } else if (pen.includes(index)) {
    cell.classList.add('pen')
  } else if (cell.classList.contains('notwalls')) {
    cell.classList.add('food1')
    foodCount++
  }


  grid.appendChild(cell)
  cells.push(cell)
  //cell.innerHTML = index
  cell.style.width = `${100 / width}%`
  cell.style.height = `${100 / width}%`

}

