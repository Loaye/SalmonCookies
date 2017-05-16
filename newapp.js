'use strict'
//creating a Constructor for a store location
function Store(location, min, max, avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
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
    this.hourlySales.push(this.hourly);
  }
  var totalSales = 0;

  for (var j = 0; j < this.hourlySales.length; j++){
    totalSales = hourlySales[j] + totalSales;
    console.log(totalSales);
    this.hourlySales.push(totalSales);
    return totalSales;
  }
};

//add business location and details
var pikePlace = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 28, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var places = [pikePlace, seaTac, seattleCenter, capitolHill, alki];
var table = document.getElementById('shell');
var data = [];

for (var k = 0; k < places.length; k++){
  data.push(
    '<td>' + places.location + '</td>' +
    '<td>' + places[0] + '</td>' +
    '<td>' + places[1] + '</td>' +
    '<td>' + places[2] + '</td>' +
    '<td>' + places[3] + '</td>' +
    '<td>' + places[4] + '</td>' +
    '<td>' + places[5] + '</td>' +
    '<td>' + places[6] + '</td>' +
    '<td>' + places[7] + '</td>' +
    '<td>' + places[8] + '</td>' +
    '<td>' + places[9] + '</td>' +
    '<td>' + places[10] + '</td>' +
    '<td>' + places[11] + '</td>' +
    '<td>' + places[12] + '</td>' +
    '<td>' + places[13] + '</td>' +
    '<td>' + places[14] + '</td>'
  );
}

var newRow;

for (var l = 0; l < data.length; l++){
  newRow = document.createElement('tr');
  newRow.innerHTML = data[l];
  table.appendChild(newRow);
}
