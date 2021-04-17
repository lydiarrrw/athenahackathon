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
let trashman = 47
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

// console.log(cells.length)
// console.log(walls.length)
// console.log(foodCount)
// console.log(energizerCount)

function gameover() {
  if (lives === 0) {
    winner.innerHTML = `The ghosts beat you! Your score is ${score}`
    //console.log('loser')
    cells[trashman].classList.remove('binman')
    livesLeft.innerHTML = lives
    grid.classList.remove('grid')
    grid.classList.add('hidegrid')
    result.classList.add('roshman')
  } else if (foodCount === 0
    && energizerCount === 0) {
    cells[trashman].classList.remove('binman')
    winner.innerHTML = `You win! Your score is ${score}`
    grid.classList.remove('grid')
    grid.classList.add('hidegrid')
    result.classList.add('roshmanwins')
    //console.log('winner') 
  }
}

//===============KEYBOARD CONTROLS=======================

document.addEventListener('keydown', function start(event) {
  const key = event.key

  gameover(greenGhost, 'greenGhost')
  gameover(pinkGhost, 'pinkGhost')
  gameover(blueGhost, 'blueGhost')
  gameover(orangeGhost, 'orangeGhost')

  if (key === 's'
    && lives >= 1) {

    cells[trashman].classList.remove('binman')
    trashman += 1
    cells[trashman].classList.add('binman')
    startGhost(pinkGhost, 'pinkGhost', 268, 'moveAlongPink')
    startGhost(blueGhost, 'blueGhost', 248, 'moveAlongBlue')
    startGhost(greenGhost, 'greenGhost', 269, 'moveAlongGreen')
    startGhost(orangeGhost, 'orangeGhost', 270, 'moveAlongOrange')

  }
  if (lives === 0) {
    document.removeEventListener('keydown', start)
  }


  if (key === 'ArrowRight'
    && cells[trashman + 1].classList.contains('notwalls')
    && cells[trashman].classList.contains('energy')) {
    cells[trashman].classList.remove('energy')
    cells[trashman].classList.remove('binman')
    trashman += 1 //right
    score += 200
    energizerCount--
    cells[trashman].classList.add('binman')
  } else if (key === 'ArrowRight'
    && cells[trashman + 1].classList.contains('notwalls')
    && (cells[trashman].classList.contains('food1'))) {
    cells[trashman].classList.remove('binman')
    cells[trashman].classList.remove('food1')
    trashman += 1 //right
    score += 10
    foodCount--
    cells[trashman].classList.add('binman')
  } else if (key === 'ArrowRight'
    && cells[trashman + 1].classList.contains('notwalls')
    && !(cells[trashman].classList.contains('food1'))) {
    cells[trashman].classList.remove('binman')
    trashman += 1 //right
    cells[trashman].classList.add('binman')
  } else if (key === 'ArrowLeft'
    && cells[trashman - 1].classList.contains('notwalls')
    && cells[trashman].classList.contains('energy')) {
    cells[trashman].classList.remove('energy')
    cells[trashman].classList.remove('binman')
    trashman -= 1 //left
    score += 200
    energizerCount--
    cells[trashman].classList.add('binman')
  } else if (key === 'ArrowLeft'
    && cells[trashman - 1].classList.contains('notwalls')
    && cells[trashman].classList.contains('food1')) {
    cells[trashman].classList.remove('binman')
    cells[trashman].classList.remove('food1')
    trashman -= 1 //left
    score += 10
    foodCount--
    cells[trashman].classList.add('binman')
  } else if (key === 'ArrowLeft'
    && cells[trashman - 1].classList.contains('notwalls')
    && !(cells[trashman].classList.contains('food1'))) {
    cells[trashman].classList.remove('binman')
    trashman -= 1 //left
    cells[trashman].classList.add('binman')
  } else if (key === 'ArrowDown'
    && cells[trashman + width].classList.contains('notwalls')
    && cells[trashman].classList.contains('energy')) {
    cells[trashman].classList.remove('energy')
    cells[trashman].classList.remove('binman')
    trashman += width //down
    score += 200
    energizerCount--
    cells[trashman].classList.add('binman')
  } else if (key === 'ArrowDown'
    && cells[trashman + width].classList.contains('notwalls')
    && !(cells[trashman].classList.contains('food1'))) {
    cells[trashman].classList.remove('binman')
    trashman += width // down
    cells[trashman].classList.add('binman')
  } else if (key === 'ArrowDown'
    && cells[trashman + width].classList.contains('notwalls')
    && cells[trashman].classList.contains('food1')) {
    cells[trashman].classList.remove('binman')
    cells[trashman].classList.remove('food1')
    trashman += width // down
    score += 10
    foodCount--
    cells[trashman].classList.add('binman')
  } else if (key === 'ArrowUp'
    && cells[trashman - width].classList.contains('notwalls')
    && cells[trashman].classList.contains('energy')) {
    cells[trashman].classList.remove('energy')
    cells[trashman].classList.remove('binman')
    trashman -= width //up
    score += 200
    energizerCount--
    cells[trashman].classList.add('binman')
  } else if (key === 'ArrowUp'
    && cells[trashman - width].classList.contains('notwalls')
    && !(cells[trashman].classList.contains('food1'))) {
    cells[trashman].classList.remove('binman')
    trashman -= width //up
    cells[trashman].classList.add('binman')
  } else if (key === 'ArrowUp'
    && cells[trashman - width].classList.contains('notwalls')
    && cells[trashman].classList.contains('food1')) {
    cells[trashman].classList.remove('binman')
    cells[trashman].classList.remove('food1')
    trashman -= width //up
    score += 10
    foodCount--
    cells[trashman].classList.add('binman')
  }
  //console.log(score)


  if (cells[trashman].classList.contains('energy')) {
    greyMode = true
    greyGhostMode(pinkGhost)
    greyGhostMode(orangeGhost)
    greyGhostMode(blueGhost)
    greyGhostMode(greenGhost)

  }

  function greyGhostMode(ghost) {
    setTimeout(() => {
      greyMode = false
    }, 5000)

  }


  scoreKeeper.innerHTML = score

  livesLeft.innerHTML = lives


})


//===============MOBILE CONTROLS=======================

document.addEventListener('click', function start(event) {
  const button = event.target.innerHTML
  //console.log(button)

  gameover(greenGhost, 'greenGhost')
  gameover(pinkGhost, 'pinkGhost')
  gameover(blueGhost, 'blueGhost')
  gameover(orangeGhost, 'orangeGhost')

  if (button === 'START' && lives >= 1) {

    cells[trashman].classList.remove('binman')
    trashman += 1
    cells[trashman].classList.add('binman')
    startGhost(pinkGhost, 'pinkGhost', 268, 'moveAlongPink')
    startGhost(blueGhost, 'blueGhost', 248, 'moveAlongBlue')
    startGhost(greenGhost, 'greenGhost', 269, 'moveAlongGreen')
    startGhost(orangeGhost, 'orangeGhost', 270, 'moveAlongOrange')

  }
  if (lives === 0) {
    document.removeEventListener('keydown', start)
  }


  if (button === 'RIGHT'
    && cells[trashman + 1].classList.contains('notwalls')
    && cells[trashman].classList.contains('energy')) {
    cells[trashman].classList.remove('energy')
    cells[trashman].classList.remove('binman')
    trashman += 1 //right
    score += 200
    energizerCount--
    cells[trashman].classList.add('binman')
  } else if (button === 'RIGHT'
    && cells[trashman + 1].classList.contains('notwalls')
    && (cells[trashman].classList.contains('food1'))) {
    cells[trashman].classList.remove('binman')
    cells[trashman].classList.remove('food1')
    trashman += 1 //right
    score += 10
    foodCount--
    cells[trashman].classList.add('binman')
  } else if (button === 'RIGHT'
    && cells[trashman + 1].classList.contains('notwalls')
    && !(cells[trashman].classList.contains('food1'))) {
    cells[trashman].classList.remove('binman')
    trashman += 1 //right
    cells[trashman].classList.add('binman')
  } else if (button === 'LEFT'
    && cells[trashman - 1].classList.contains('notwalls')
    && cells[trashman].classList.contains('energy')) {
    cells[trashman].classList.remove('energy')
    cells[trashman].classList.remove('binman')
    trashman -= 1 //left
    score += 200
    energizerCount--
    cells[trashman].classList.add('binman')
  } else if (button === 'LEFT'
    && cells[trashman - 1].classList.contains('notwalls')
    && cells[trashman].classList.contains('food1')) {
    cells[trashman].classList.remove('binman')
    cells[trashman].classList.remove('food1')
    trashman -= 1 //left
    score += 10
    foodCount--
    cells[trashman].classList.add('binman')
  } else if (button === 'LEFT'
    && cells[trashman - 1].classList.contains('notwalls')
    && !(cells[trashman].classList.contains('food1'))) {
    cells[trashman].classList.remove('binman')
    trashman -= 1 //left
    cells[trashman].classList.add('binman')
  } else if (button === 'DOWN'
    && cells[trashman + width].classList.contains('notwalls')
    && cells[trashman].classList.contains('energy')) {
    cells[trashman].classList.remove('energy')
    cells[trashman].classList.remove('binman')
    trashman += width //down
    score += 200
    energizerCount--
    cells[trashman].classList.add('binman')
  } else if (button === 'DOWN'
    && cells[trashman + width].classList.contains('notwalls')
    && !(cells[trashman].classList.contains('food1'))) {
    cells[trashman].classList.remove('binman')
    trashman += width // down
    cells[trashman].classList.add('binman')
  } else if (button === 'DOWN'
    && cells[trashman + width].classList.contains('notwalls')
    && cells[trashman].classList.contains('food1')) {
    cells[trashman].classList.remove('binman')
    cells[trashman].classList.remove('food1')
    trashman += width // down
    score += 10
    foodCount--
    cells[trashman].classList.add('binman')
  } else if (button === 'UP'
    && cells[trashman - width].classList.contains('notwalls')
    && cells[trashman].classList.contains('energy')) {
    cells[trashman].classList.remove('energy')
    cells[trashman].classList.remove('binman')
    trashman -= width //up
    score += 200
    energizerCount--
    cells[trashman].classList.add('binman')
  } else if (button === 'UP'
    && cells[trashman - width].classList.contains('notwalls')
    && !(cells[trashman].classList.contains('food1'))) {
    cells[trashman].classList.remove('binman')
    trashman -= width //up
    cells[trashman].classList.add('binman')
  } else if (button === 'UP'
    && cells[trashman - width].classList.contains('notwalls')
    && cells[trashman].classList.contains('food1')) {
    cells[trashman].classList.remove('binman')
    cells[trashman].classList.remove('food1')
    trashman -= width //up
    score += 10
    foodCount--
    cells[trashman].classList.add('binman')

  }

  if (cells[trashman].classList.contains('energy')) {
    greyMode = true
    greyGhostMode(pinkGhost)
    greyGhostMode(orangeGhost)
    greyGhostMode(blueGhost)
    greyGhostMode(greenGhost)
  }

  function greyGhostMode(ghost) {
    setTimeout(() => {
      greyMode = false
    }, 5000)

  }
  scoreKeeper.innerHTML = score
  livesLeft.innerHTML = lives
})


//===============GHOST MOVEMENT=======================

function startGhost(ghost, string, number, moveAlong) {
  // ADD GHOULS
  cells.forEach((cell) => {
    cell.classList.remove(string)
  })
  cells[ghost].classList.remove(string)
  cells[ghost].classList.add(string)



  // GHOUL MOVEMENT

  const ghostsMoves = setInterval(() => {


    const randNum = Math.floor((Math.random() * 2) + 1)
    //console.log(randNum + 'original number')

    const newRandNum = Math.floor((Math.random() * 3) + 1)
    //console.log(newRandNum + 'new number')


    if (cells[ghost].classList.contains('greyGhost')
      && cells[ghost].classList.contains('binman')) {
      //console.log('grey ghost mode')
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove('greyGhost')
      cells[ghost].classList.remove(string)
      ghost = number
      cells[ghost].classList.add(string)
    }

    cells[ghost].classList.remove('greyGhost')


    if (cells[ghost].classList.contains('binman')
      && lives === 0) {
      clearInterval(ghostsMoves)
      console.log('gameover2')
      gameover(greenGhost, 'greenGhost')
      gameover(pinkGhost, 'pinkGhost')
      gameover(blueGhost, 'blueGhost')
      gameover(orangeGhost, 'orangeGhost')
      cells[ghost].classList.remove(string)
      ghost = number
      cells[ghost].classList.add(string)

    }

    else if (cells[ghost].classList.contains('binman')
      && lives >= 1) {
      //console.log('next life')
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      setTimeout(() => {
        lives--
        console.log(lives)
        gameover(greenGhost, 'greenGhost')
        gameover(pinkGhost, 'pinkGhost')
        gameover(blueGhost, 'blueGhost')
        gameover(orangeGhost, 'orangeGhost')
        cells[ghost].classList.remove(string)
        ghost = number
        cells[ghost].classList.add(string)
        cells[trashman].classList.remove('binman')
        trashman = 47
        cells[trashman].classList.add('binman')
        startGhost(ghost, string, number)
      }, 600)

      clearInterval(ghostsMoves)

    }

    else if (lives === 0) {
      document.addEventListener('keydown', (event))
    }




    //--------MOVE IN A LINE --------
    //-----------------------------
    // move upwards in a line
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && (cells[ghost + width].classList.contains(moveAlong) || cells[ghost + width].classList.contains('walls'))
      && !(cells[ghost - width].classList.contains('walls'))
    ) {

      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= width
      cells[ghost].classList.add(string)

      // move downwards in a line
    } else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && (cells[ghost - width].classList.contains(moveAlong) || cells[ghost - width].classList.contains('walls'))
      && !(cells[ghost + width].classList.contains('walls'))
    ) {

      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += width
      cells[ghost].classList.add(string)

      // move left in a line
    } else if (cells[ghost].classList.contains(string)
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && (cells[ghost + 1].classList.contains(moveAlong) || cells[ghost + 1].classList.contains('walls'))
      && !(cells[ghost - 1].classList.contains('walls'))
    ) {

      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= 1
      cells[ghost].classList.add(string)


      // move right in a line
    } else if (cells[ghost].classList.contains(string)
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && (cells[ghost - 1].classList.contains(moveAlong) || cells[ghost - 1].classList.contains('walls'))
      && !(cells[ghost + 1].classList.contains('walls'))
    ) {

      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += 1
      cells[ghost].classList.add(string)




      //-----TWO DIRECTIONS POSSIBLE----
      //--------------------------------

      //right blocked and top blocked rand 1 = go down
    } else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && randNum === 1) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += width
      cells[ghost].classList.add(string)
    }

    //right blocked and top blocked rand 2 = go left
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && randNum === 2) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= 1
      cells[ghost].classList.add(string)
    }

    // If right is blocked and bottom is blocked + rand 1 = up
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && randNum === 1) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= width
      cells[ghost].classList.add(string)
    }

    // If right is blocked and bottom is blocked + rand 2 = left
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && randNum === 2) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= 1
      cells[ghost].classList.add(string)
    }

    // If left blocked and bottom is blocked + rand 1 = go up
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && randNum === 1) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= width
      cells[ghost].classList.add(string)
    }
    // If left blocked and bottom is blocked + rand 2 = go right
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && randNum === 2) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += 1
      cells[ghost].classList.add(string)
    }


    // If left blocker and top blocked + rand 1 = go down

    else if (cells[ghost].classList.contains(string)
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && randNum === 1) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += width
      cells[ghost].classList.add(string)
    }

    // If left blocked and top blaocked + rand 2 = go right
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && randNum === 2) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += 1
      cells[ghost].classList.add(string)
    }


    //---- THREE DIRECTIONS POSSIBLE----
    //------------------------------------------

    // Top, bottom and left are empty - new rand 1(left)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && newRandNum === 1) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= 1
      cells[ghost].classList.add(string)
    }

    // Top, bottom and left are empty - new rand 2 (bottom)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && newRandNum === 2) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += width
      cells[ghost].classList.add(string)
    }

    // Top, bottom and left are empty - new rand 3 (top)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && newRandNum === 3) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= width
      cells[ghost].classList.add(string)
    }

    // Top, bottom and right are empty - new rand 1(right)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && newRandNum === 1) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += 1
      cells[ghost].classList.add(string)
    }

    // Top, bottom and right are empty -  new rand 2 (bottom)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && newRandNum === 2) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += width
      cells[ghost].classList.add(string)
    }

    // Top, bottom and right are empty - new rand 3 (up)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && newRandNum === 3) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= width
      cells[ghost].classList.add(string)
    }

    // Bottom, right and left are empty - new rand 1(left)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && newRandNum === 1) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= 1
      cells[ghost].classList.add(string)
    }


    // Bottom, right and left are empty -  new rand 2 (down)
    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && newRandNum === 2) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += width
      cells[ghost].classList.add(string)
    }
    // Bottom, right and left are empty -  new rand 3 (right)

    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && !(cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && newRandNum === 1) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += 1
      cells[ghost].classList.add(string)
    }

    // Top, left and right are empty - new rand 1(left)

    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && newRandNum === 1) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= 1
      cells[ghost].classList.add(string)
    }
    // Top, left and right are empty - new rand 2 (up)

    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && newRandNum === 2) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= width
      cells[ghost].classList.add(string)
    }

    // Top, left and right are empty - new rand 3 (right)

    else if (cells[ghost].classList.contains(string)
      && !(cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && !(cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && !(cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && newRandNum === 3) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += 1
      cells[ghost].classList.add(string)
    }


    //---- STOP  GETTING STUCK IN CORNERS ----
    //----------------------------------------------
    // If right, top and left are blocked = go down
    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && cells[ghost + width].classList.contains(moveAlong)
    ) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += width
      cells[ghost].classList.add(string)
    }


    // If right, bottom and left are blocked = go up

    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && cells[ghost - width].classList.contains(moveAlong)
    ) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= width
      cells[ghost].classList.add(string)
    }

    // If bottom, top and right are blocked = go left

    else if (cells[ghost].classList.contains(string)
      && (cells[ghost + 1].classList.contains('walls') || cells[ghost + 1].classList.contains(moveAlong))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && (cells[ghost + width].classList.contains('walls') || cells[ghost + width].classList.contains(moveAlong))
      && cells[ghost - 1].classList.contains(moveAlong)
    ) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= 1
      cells[ghost].classList.add(string)
    }
    // If bottom, top and left are blocked = go right

    else if (cells[ghost].classList.contains(string)
      && (cells[ghost - 1].classList.contains('walls') || cells[ghost - 1].classList.contains(moveAlong))
      && (cells[ghost - width].classList.contains('walls') || cells[ghost - width].classList.contains(moveAlong))
      && (cells[ghost + width].classList.contains('walls' || cells[ghost + width].classList.contains(moveAlong)))
      && cells[ghost + 1].classList.contains(moveAlong)
    ) {
      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += 1
      cells[ghost].classList.add(string)
    }

    // ---- random direction when reach up/down

    // if left is move along, right is wall move upwards in a line rand 1
    else if (cells[ghost].classList.contains(string)
      && cells[ghost - 1].classList.contains(moveAlong)
      && cells[ghost + 1].classList.contains('walls')
      && cells[ghost + width].classList.contains('notwalls')
      && cells[ghost - width].classList.contains('notwalls')
      && randNum === 1) {

      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= width
      cells[ghost].classList.add(string)
    }
    // if left move along, right is wall move downward in a line rand 2
    else if (cells[ghost].classList.contains(string)
      && cells[ghost - 1].classList.contains(moveAlong)
      && cells[ghost + 1].classList.contains('walls')
      && cells[ghost + width].classList.contains('notwalls')
      && cells[ghost - width].classList.contains('notwalls')
      && randNum === 2) {

      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += width
      cells[ghost].classList.add(string)
    }
    // if right is move along, left wall move upwards in a line rand 1
    else if (cells[ghost].classList.contains(string)
      && cells[ghost + 1].classList.contains(moveAlong)
      && cells[ghost - 1].classList.contains('walls')
      && cells[ghost + width].classList.contains('notwalls')
      && cells[ghost - width].classList.contains('notwalls')
      && randNum === 1) {

      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= width
      cells[ghost].classList.add(string)
    }
    // if right move along, move downward in a line rand 2
    else if (cells[ghost].classList.contains(string)
      && cells[ghost + 1].classList.contains(moveAlong)
      && cells[ghost - 1].classList.contains('walls')
      && cells[ghost + width].classList.contains('notwalls')
      && cells[ghost - width].classList.contains('notwalls')
      && randNum === 2) {

      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += width
      cells[ghost].classList.add(string)
    }
    // if top is move along, bottom wall move left in a line rand 1
    else if (cells[ghost].classList.contains(string)
      && cells[ghost - width].classList.contains(moveAlong)
      && cells[ghost + width].classList.contains('walls')
      && cells[ghost + 1].classList.contains('notwalls')
      && cells[ghost - 1].classList.contains('notwalls')
      && randNum === 1) {

      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= 1
      cells[ghost].classList.add(string)
    }

    // if top move along, bottom wall, move right in a line rand 2
    else if (cells[ghost].classList.contains(string)
      && cells[ghost - width].classList.contains(moveAlong)
      && cells[ghost + width].classList.contains('walls')
      && cells[ghost + 1].classList.contains('notwalls')
      && cells[ghost - 1].classList.contains('notwalls')
      && randNum === 2) {

      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += 1
      cells[ghost].classList.add(string)
    }

    // if bottom is move along, top wall move left in a line rand 1
    else if (cells[ghost].classList.contains(string)
      && cells[ghost + width].classList.contains(moveAlong)
      && cells[ghost - width].classList.contains('walls')
      && cells[ghost + 1].classList.contains('notwalls')
      && cells[ghost - 1].classList.contains('notwalls')
      && randNum === 1) {

      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost -= 1
      cells[ghost].classList.add(string)
    }
    // if bottom move along, top wall, move right in a line rand 2
    else if (cells[ghost].classList.contains(string)
      && cells[ghost + width].classList.contains(moveAlong)
      && cells[ghost - width].classList.contains('walls')
      && cells[ghost + 1].classList.contains('notwalls')
      && cells[ghost - 1].classList.contains('notwalls')
      && randNum === 1) {

      //--
      cells[ghost - 1].classList.remove(moveAlong)
      cells[ghost + 1].classList.remove(moveAlong)
      cells[ghost - width].classList.remove(moveAlong)
      cells[ghost + width].classList.remove(moveAlong)
      //---
      cells[ghost].classList.remove(string)
      cells[ghost].classList.add(moveAlong)
      ghost += 1
      cells[ghost].classList.add(string)
    }




    if (greyMode === true) {
      cells[ghost].classList.add('greyGhost')
    }
  }, 350)

  //===============================
  //===============================


}
