'use strict';


var paths = [
  'bag.jpg' , 'banana.jpg' , 'bathroom.jpg', 'boots.jpg',
  'breakfast.jpg' , 'bubblegum.jpg' , 'chair.jpg' , 'cthulhu.jpg',
  'dog-duck.jpg' , 'dragon.jpg' , 'pen.jpg' , 'pet-sweep.jpg',
  'scissors.jpg' , 'shark.jpg' , 'sweep.png' , 'tauntaun.jpg',
  'unicorn.jpg' , 'usb.gif' , 'water-can.jpg' , 'wine-glass.jpg'
];

var items = [];
var currentImages = [0, 1, 2];

var newRandomImage = [ , , ];
var clickNumber = 0;
var timesClickedArray = [];


for(var i = 0; i < paths.length; i++) {
  var newItem = new ItemImage(paths[i]);
  items.push(newItem);
}

function ItemImage(path) {
  this.path = 'img/' + path;
  this.clicked = 0;
  this.shown = 0;
}

var displayArea1 = document.getElementById('image1');
var displayArea2 = document.getElementById('image2');
var displayArea3 = document.getElementById('image3');

displayArea1.addEventListener('click', clickHandler);
displayArea2.addEventListener('click', clickHandler);
displayArea3.addEventListener('click', clickHandler);



function clickHandler(event) {

  if (clickNumber >= 25) {
    updateChart();
  }
  else {
    clickNumber++;
    console.log('after click number: ' + clickNumber + ':');
    var targetString = event.target.src;
    var targetPath = targetString.split('/img/')[1];

    var itemPath;
    for (var i = 0; i < items.length; i++) {
      itemPath = items[i].path.split('img/')[1];
      if (itemPath === targetPath) {
        items[i].clicked += 1;
      }
    }
    updateTimesClicked();
    updatePictures();
  }
}

function updatePictures() {

  newRandomImage[0] = generateRandomNumber();
  newRandomImage[1] = generateRandomNumber();
  newRandomImage[2] = generateRandomNumber();

  while (
    newRandomImage[0] === currentImages[0] ||
    newRandomImage[0] === currentImages[1] ||
    newRandomImage[0] === currentImages[2] ) {
    newRandomImage[0] = generateRandomNumber();
  }
  currentImages[0] = newRandomImage[0];

  while (
    newRandomImage[1] === currentImages[0] ||
    newRandomImage[1] === currentImages[1] ||
    newRandomImage[1] === currentImages[2] ||
    newRandomImage[1] === newRandomImage[0]) {
    newRandomImage[1] = generateRandomNumber();
  }
  currentImages[1] = newRandomImage[1];

  while (
    newRandomImage[2] === currentImages[0] ||
    newRandomImage[2] === currentImages[1] ||
    newRandomImage[2] === currentImages[2] ||
    newRandomImage[2] === newRandomImage[0] ||
    newRandomImage[2] === newRandomImage[1] ) {
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

function updateTimesClicked() {
  var timesClicked = [
    items[0].clicked, items[1].clicked, items[2].clicked, items[3].clicked, items[4].clicked,
    items[5].clicked, items[6].clicked, items[7].clicked, items[8].clicked, items[9].clicked,
    items[10].clicked, items[11].clicked, items[12].clicked, items[13].clicked, items[14].clicked,
    items[15].clicked, items[16].clicked, items[17].clicked, items[18].clicked, items[19].clicked
  ];
  console.log('Times clicked array: ' + timesClicked);
  timesClickedArray = timesClicked;
}




// Chart Stuff

function updateChart() {
  var labels = paths;
  console.log(timesClickedArray);
  var data = timesClickedArray;

  var ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        label: '# of Clicks',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
