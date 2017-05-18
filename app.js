'use strict';

function Store(building, min, max, avg){
  this.building = building;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieSales = [];
  this.total = 0;
}

 //Function that generates total cookie ammount for random customer per hour
Store.prototype.hourly = function(){
  var people = Math.floor(Math.random() * (this.max - this.min)) + this.min;
  console.log('Total People:' + this.avg);
  return Math.floor(people * this.avg);
};

//Function that takes total sales and pushes it back to Constructor
Store.prototype.generateSales = function(){
  for (var i = 0; i < 15; i++){
    this.cookieSales.push(this.hourly());
  }
};

//add business building and details
var pikePlace = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 28, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var building = [pikePlace, seaTac, seattleCenter, capitolHill, alki];
for (var i = 0; i < building.length; i++){
  building[i].generateSales();
}

Store.prototype.getSales = function(){
  var table = document.getElementsByClassName('shell');
  var data = [];

  for (var i = 0; i < building.length; i++){
    data.push(
      '<td>' + this.cookieSales[0] + '</td>' +
      '<td>' + this.cookieSales[1] + '</td>' +
      '<td>' + this.cookieSales[2] + '</td>' +
      '<td>' + this.cookieSales[3] + '</td>' +
      '<td>' + this.cookieSales[4] + '</td>' +
      '<td>' + this.cookieSales[5] + '</td>' +
      '<td>' + this.cookieSales[6] + '</td>' +
      '<td>' + this.cookieSales[7] + '</td>' +
      '<td>' + this.cookieSales[8] + '</td>' +
      '<td>' + this.cookieSales[9] + '</td>' +
      '<td>' + this.cookieSales[10] + '</td>' +
      '<td>' + this.cookieSales[11] + '</td>' +
      '<td>' + this.cookieSales[12] + '</td>' +
      '<td>' + this.cookieSales[13] + '</td>' +
      '<td>' + this.cookieSales[14] + '</td>' +
      '<td>' + this.cookieSales[15] + '</td>'
    );
  }

  var new_row;

  for (var j = 0; j < data.length; j++){
    new_row = document.createElement('tr');
    new_row.innerHTML = data[j];
    table.appendChild(new_row);
  }
};
