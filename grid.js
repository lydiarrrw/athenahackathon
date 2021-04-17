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

function getRandomPosition(element) {
  const grid = document.querySelector('.grid')
	var x = grid.offsetHeight-element.clientHeight;
	var y = grid.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}
window.onload = function() {
  const grid = document.querySelector('.grid')
	var img = document.createElement('img');
	img.setAttribute("style", "position: relative;");
	img.setAttribute("src", "./images/recycle.png");
  grid.appendChild(img);
	var xy = getRandomPosition(img);
  console.log(xy)
	img.style.top = xy[0] + 'px';
	img.style.left = xy[1] + 'px';
}
