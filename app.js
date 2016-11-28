'use strict';


var paths = [
  'bag.jpg' , 'banana.jpg' , 'bathroom.jpg', 'boots.jpg',
  'breakfast.jpg' , 'bubblegum.jpg' , 'chair.jpg' , 'cthulhu.jpg',
  'dog-duck.jpg' , 'dragon.jpg' , 'pen.jpg' , 'pet-sweep.jpg',
  'scissors.jpg' , 'shark.jpg' , 'sweep.png' , 'tauntaun.jpg',
  'unicorn.jpg' , 'usb.gif' , 'water-can.jpg' , 'wine-glass.jpg'
];



var items = [];
var displayIndex = 0;

var displayArea = document.getElementById('image1');

for(var i = 0; i < paths.length; i++) {
  var newItem = new ItemImage(paths[i]);
  items.push(newItem);
}

displayArea.addEventListener('click', clickHandler);

function clickHandler(event) {
  var targetString = event.target.src;
  var targetPath = targetString.split('images')[1];
  var itemPath;

  for (var i = 0; i < items.length; i++) {
    itemPath = items[i].path.split('img')[1];
    if (itemPath === targetPath) {
      items[i].clicked += 1;
    }
  }

  changePicture();
}

function ItemImage(path) {
  this.path = 'img/' + path;
  this.clicked = 0;
}

function changePicture() {
  var image1 = document.getElementById('image1');
  var randomIndex = generateRandomNumber();

  while (displayIndex === randomIndex) {
    randomIndex = generateRandomNumber();
  }

  displayIndex = randomIndex;
  image1.src = 'img/' + paths[randomIndex];

  function generateRandomNumber() {
    return Math.floor(Math.random() * paths.length);
  }
}
