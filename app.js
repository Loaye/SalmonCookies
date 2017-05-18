'use strict';
 //creating a Constructor for a store location
function Store(loc, min, max, avg){
  this.loc = location;
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

//Creating function to fill table header with time
function hours(){
  var time = ['6AM:', '7AM:', '8AM:', '9AM:', '10AM:', '11AM:', '12PM:', '1PM:', '2PM:', '3PM:', '4PM:', '5PM:', '6PM:', '7PM:', 'Total:']
  var table = document.getElementsByClassName('operation_hours');
  var operationArr = [];

  for (var i = 0; i < 15; i++){
    operationArr.push(
      '<td>' + time[0] + '</td>' +
      '<td>' + time[1] + '</td>' +
      '<td>' + time[2] + '</td>' +
      '<td>' + time[3] + '</td>' +
      '<td>' + time[4] + '</td>' +
      '<td>' + time[5] + '</td>' +
      '<td>' + time[6] + '</td>' +
      '<td>' + time[7] + '</td>' +
      '<td>' + time[8] + '</td>' +
      '<td>' + time[9] + '</td>' +
      '<td>' + time[10] + '</td>' +
      '<td>' + time[11] + '</td>' +
      '<td>' + time[12] + '</td>' +
      '<td>' + time[13] + '</td>' +
      '<td>' + time[14] + '</td>' +
      '<td>' + time[15] + '</td>'
    );
  }

  var new_row;

  for (var j = 0; j < operationArr.length; j++){
    new_row = document.createElement('tr');
    new_row.innerHTML = operationArr[j];
    table.appendChild(new_row);
  }
}
console.log(hours);

 //add business location and details
var pikePlace = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 28, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var
