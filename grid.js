const grid = document.querySelector('.grid')
const width = 20
const cells = []
const walls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27, 28, 29, 39, 40, 42, 43, 44, 45, 51, 52, 53, 55, 57, 59, 60, 65,
  67, 68, 69, 71, 75, 76, 77, 79, 80, 82, 84, 85, 87, 89, 91, 92, 93, 95, 96, 97, 99, 100, 102, 103, 104, 107, 109, 113, 115, 117, 119, 120, 122, 124, 125, 129,
  131, 132, 133, 135, 137, 139, 140, 142, 144, 145, 147, 148, 149, 151, 152, 153, 155, 157, 159, 160, 179, 180, 182, 183, 184, 185, 187, 188, 189, 190, 191, 192,
  193, 194, 196, 197, 199, 200, 231, 213, 214, 215, 216, 217, 219, 220, 222, 223, 224, 225, 227, 228, 229, 230, 231, 239, 240, 247, 249, 251, 253, 254, 255, 257, 259, 260, 261, 263, 265,
  267, 271, 273, 274, 275, 277, 279, 280, 281, 283, 285, 287, 288, 290, 291, 293, 295, 297, 299, 300, 301, 303, 305, 307, 311, 313, 315, 316, 317, 319, 320, 327,
  329, 331, 333, 335, 336, 337, 339, 340, 342, 343, 344, 345, 349, 359, 360, 363, 364, 367, 371, 372, 374, 375, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388,
  389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399]
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

