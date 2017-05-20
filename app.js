'use strict';

var form = document.getElementById('data_form');
var table = document.getElementById('shell');

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
  var total = 0;
  for (var i = 0; i < 14; i++){
    var sales = this.hourly();
    this.cookieSales.push(this.hourly());
    total += Math.ceil(sales);
  }
  this.cookieSales.push(total);
};

function makeStore(building, min, max, avg) {
  var makeStore = new Store(building, min, max, avg);
  var row = document.createElement('tr');
  // row.innerHTML = this.cookieSales.join('');
  table.appendChild(row);
  console.log('makeStore', makeStore);
}

makeStore();

Store.prototype.render();


//add business building and details
var pikePlace = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 28, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var building = [pikePlace, seaTac, seattleCenter, capitolHill, alki];

Store.prototype.getSales = function(){
  var table = document.getElementById('shell');
  var data = [];

  data.push('<td>' + this.building + '</td>');

  for (var i = 0; i <this.cookieSales.length; i++){
    data.push(
      '<td>' + this.cookieSales[i] + '</td>'
      );
  }

  var new_row;
  new_row = document.createElement('tr');
  new_row.innerHTML = data.join('');
  table.appendChild(new_row);
};

for (var i = 0; i < building.length; i++){
  building[i].generateSales();
  building[i].getSales();
}


function newStore(event) {
  event.preventDefault();

  var building = event.target.building.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);

  var addStore = new Store(building, min, max, avg);
  addStore.getSales();
  addStore.render();
  form.reset();
}


form.addEventListener('submit', newStore);
