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
};

//Create prototype that pushes an array
Store.prototype.hour = function(){
  var hourlySales = [];

  for (var i = 0; i < 14; i++){
    hourlySales.push(this.hourly);
  }
  var totalSales = 0;

  for (var j = 0; j < hourlySales.length; j++){
    totalSales = hourlySales[j] + totalSales;
    console.log(totalSales);
    hourlySales.push(totalSales);
    return totalSales;
  }

};

var places = [pikePlace, seaTac, seattleCenter, capitolHill, alki];
var data = [];

//add business location and details
var pikePlace = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 28, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
