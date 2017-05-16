//Creating object with min, max, avg
var storeLocation = [
  pikeplace = {
    name: 'Pike',
    minCost: 23,
    maxCost: 65,
    avgCost: 6.3,
  },
  seaTac = {
    name: 'SeaTac',
    minCost: 3,
    maxCost: 24,
    avgCost: 1.2,
  },
  seattleCenter = {
    name: 'Seattle Center',
    minCost: 11,
    maxCost: 38,
    avgCost: 3.7
  },
  capitolHill = {
    name: 'Captiol Hill',
    minCost: 20,
    maxCost: 38,
    avgCost: 2.3,
  },
  alki = {
    name: 'Alki',
    minCost: 2,
    maxCost: 16,
    avgCost: 4.6,
  },
];

//variable to declare business hours.. opening to close
function businessHours(){
  var time = ['6AM:', '7AM:', '8AM:', '9AM:', '10AM:', '11AM:', '12PM:', '1PM:', '2PM:', '3PM:', '4PM:', '5PM:', '6PM:', '7PM:', '8PM:'];
  for (var i = 0; i < 15; i++){
    console.log(time[i]);
  }
}
//Function that generates random cookie ammount per customer
function hourlyCookie(min, max, avg){
  min = Math.ceil(min);
  max = Math.floor(max);
  var people = Math.floor(Math.random() * (max - min)) + min;
  console.log('Total People:' + avg);
  return(people * avg);
}

//function that creates list of store and grabs cookie per hour, then creates a list over the business day
function listSales(store) {
  var list = document.createElement('ul');
  var listArr = [];
  var cookieArr = [];






  var hour = Math.floor(hourlyCookie(store.minCost, store.maxCost, store.avgCost));
