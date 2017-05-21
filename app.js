
'use strict';
var form = document.getElementById('data_form');
var table = document.getElementById('shell');

function Store(place, min, max, avg) {
  this.place = place;
  this.min = min;
  this.max = max;
  this.avg = avg;
}

Store.prototype.cookiesAnHour = function(){
  var people = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  return people * this.avg;
};

var firstAndPike = new Store('First & Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 4.6);
var alki = new Store('Alki', 2, 16, 4.6);

var storeArr = [firstAndPike, seaTac, seattleCenter, capitolHill, alki];

function createHeader(){
  var timeArr = ['Store', '6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '200PM', '300PM', '400PM', '500PM', '600PM', '700PM', 'Total:'];
  var row_header = [];
  for (var i=0; i < timeArr.length; i++){
    row_header.push('<td>' + timeArr[i] + '</td>');
  }
  var row = row_header.join('');
  console.log(row_header);
  row_header = document.createElement('thead');
  row_header.innerHTML = row;
  document.body.appendChild(row_header);
}

Store.prototype.listSales = function(){
  var listArr = [];
  var cookieArr = [];

  listArr.push('<td>' + this.place + '</td>');
  for (var i=0; i < 14; i++){
    var currentHour = Math.floor(this.cookiesAnHour());
    console.log('Cookies: ', currentHour);
    listArr.push('<td>' + currentHour + '</td>');
    cookieArr.push(currentHour);
  }

  var totalCookies = 0;
  for (var k = 0; k < cookieArr.length; k++){
    totalCookies = totalCookies + cookieArr[k];
  }

  listArr.push('<td>' + totalCookies + '</td>');
  var fullList = listArr.join('');

  var new_row = document.createElement('tr');
  new_row.innerHTML = fullList;
  document.body.appendChild(new_row);
};

createHeader();
for (var i = 0; i < storeArr.length; i++){
  storeArr[i].listSales();
}

function makeStore(e){
  e.preventDefault();

  var place = e.target.place.value;
  var min = e.target.min.value;
  var max = e.target.max.value;
  var avg = e.target.avg.value;

  var newStore = new Store(place, min, max, avg);
  newStore.cookiesAnHour();
  form.reset();
}

form.addEventListener('submit', makeStore);
