'use strict'
//creating a Constructor for a store location
function Store(location, min, max, avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
}

//Function that generates total cookie ammount for random customer per hour
Store.prototype.hourly = function(){
  this.min = Math.ceil(this.min);
  this.max = Math.floor(this.max);
  var people = Math.floor(Math.random() * (this.max - this.min)) + this.min;
  console.log('Total People:' + this.avg);
  return(people * this.avg);
}

//Creating an array to push hourly generated ammount to a define time based off of 12 Hour format
var listArr[];

//business hours
var time = ['6AM:', '7AM:', '8AM:', '9AM:', '10AM:', '11AM:', '12PM:', '1PM:', '2PM:', '3PM:', '4PM:', '5PM:', '6PM:', '7PM:', '8PM:', 'Total:'];

//pushing ammounts from hourly function into an empty array
for (var i = 0; i < 15; i++){
  listArr.push(time[i]);
}


//add business location and details
var pikePlace = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 28, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
