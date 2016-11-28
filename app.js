'use strict';


/*
var pic1 = new Picture('bag.jpg', 'one');
var pic2 = new Picture('banana.jpg', 'two');
var pic3 = new Picture('bathroom.jpg', 'three');


function Picture(url, id) {
  this.url = url;
  this.id = id;
}
*/



var paths = [
  'bag.jpg' , 'banana.jpg' , 'bathroom.jpg', 'boots.jpg',
  'breakfast.jpg' , 'bubblegum.jpg' , 'chair.jpg' , 'cthulhu.jpg',
  'dog-duck.jpg' , 'dragon.jpg' , 'pen.jpg' , 'pet-sweep.jpg',
  'scissors.jpg' , 'shark.jpg' , 'sweep.png' , 'tauntaun.jpg',
  'unicorn.jpg' , 'usb.gif' , 'water-can.jpg' , 'wine-glass.jpg'
];

var items = [];
var displayIndex = 0;


for(var i = 0; i < paths.length; i++) {
  var newItem = new ItemImage(paths[i]);
  items.push(newItem);
}

function ItemImage(path) {
  this.path = 'img/' + path;
  this.clicked = 0;
}


var displayArea1 = document.getElementById('image1');
var displayArea2 = document.getElementById('image2');
var displayArea3 = document.getElementById('image3');

displayArea1.addEventListener('click', clickHandler);
displayArea2.addEventListener('click', clickHandler);
displayArea3.addEventListener('click', clickHandler);

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

  changePicture1();
  changePicture2();
  changePicture3();
}




function changePicture1() {
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


function changePicture2() {
  var image2 = document.getElementById('image2');
  var randomIndex = generateRandomNumber();

  while (displayIndex === randomIndex) {
    randomIndex = generateRandomNumber();
  }

  displayIndex = randomIndex;
  image2.src = 'img/' + paths[randomIndex];

  function generateRandomNumber() {
    return Math.floor(Math.random() * paths.length);
  }
}


function changePicture3() {
  var image3 = document.getElementById('image3');
  var randomIndex = generateRandomNumber();

  while (displayIndex === randomIndex) {
    randomIndex = generateRandomNumber();
  }

  displayIndex = randomIndex;
  image3.src = 'img/' + paths[randomIndex];

  function generateRandomNumber() {
    return Math.floor(Math.random() * paths.length);
  }
}
