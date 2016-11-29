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
var currentImages = [0, 1, 2];
var newRandomImage = [, , ];
var clickNumber = 0;
/*var timesImageClicked = [
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0
];
*/


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
  updatePictures();
  //changePicture1();
  //changePicture2();
  //changePicture3();
  clickNumber++;
  console.log('click number: ' + clickNumber + '  ==> ' + currentImages);
}

function updatePictures() {
//  var image1 = document.getElementById('image1');
//  var image2 = document.getElementById('image2');
//  var image3 = document.getElementById('image3');
  newRandomImage[0] = generateRandomNumber();
  newRandomImage[1] = generateRandomNumber();
  newRandomImage[2] = generateRandomNumber();

  while ( newRandomImage[0] === currentImages[0] ) {
    newRandomImage[0] = generateRandomNumber();
  }
  currentImages[0] = newRandomImage[0];

  while ( newRandomImage[1] === currentImages[1] || newRandomImage[1] === newRandomImage[0]) {
    newRandomImage[1] = generateRandomNumber();
  }
  currentImages[1] = newRandomImage[1];

  while (newRandomImage[2] === currentImages[2] || newRandomImage[2] === newRandomImage[1] || newRandomImage[2] === newRandomImage[0] ) {
    newRandomImage[2] = generateRandomNumber();
  }
  currentImages[2] = newRandomImage[2];

  var displayIndex0 = currentImages[0];
  image1.src = 'img/' + paths[displayIndex0];

  var displayIndex1 = currentImages[1];
  image2.src = 'img/' + paths[displayIndex1];

  var displayIndex2 = currentImages[2];
  image3.src = 'img/' + paths[displayIndex2];
}






function generateRandomNumber() {
  return Math.floor(Math.random() * paths.length);
}


/*

function changePicture1() {

  var image1 = document.getElementById('image1');
  var newRandomImage = generateRandomNumber();

  while ( newRandomImage = randomImage[0] || displayIndex === randomImage[0]) {
    newRandomImage = generateRandomNumber();
  }
  randomImage[0] = newRandomImage;
  image1.src = 'img/' + paths[newRandomImage];
}





function changePicture2() {
  var image2 = document.getElementById('image2');
  randomImage[1] = generateRandomNumber();

  while (randomImage[1] === randomImage[0]) {
    randomImage[1] = generateRandomNumber();
  }

  displayIndex = randomImage[1];
  image2.src = 'img/' + paths[displayIndex];
  //console.log(randomImage);
}


function changePicture3() {
  var image3 = document.getElementById('image3');
  randomImage[2] = generateRandomNumber();

  while (randomImage[2] === randomImage[0] || randomImage[2] === randomImage[1] ) {
    randomImage[2] = generateRandomNumber();
  }

  displayIndex = randomImage[2];
  image3.src = 'img/' + paths[displayIndex];
}

*/
