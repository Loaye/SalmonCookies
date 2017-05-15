//Creating object with min, max, avg
var firstAndPike = {
  min: 23,
  max: 65,
  avg: 6.3,
};

firstAndPike();

var seaTac = {
  min: 3,
  max: 24,
  avg: 1.2,
};

seaTac();

var seattleCenter = {
  min: 11,
  max: 38,
  avg: 3.7
};

seattleCenter();

var capHill = {
  min: 20,
  max: 38,
  avg: 2.3,
};

capHill();

var alki = {
  min: 2,
  max: 16,
  avg: 4.6,
};

alki();

//Creating function to generate random customers per hour
var oneBetweenHundred = (Math.floor(Math.random() * 100));

function randomCustomerAmmount(){
  return oneBetweenHundred();
}

randomCustomerAmmount();

//Function that generates random cookie ammount between min and max

function cookieAnHour(min, max, avg){
  cookieMin = Math.ceil(min);
  cookieMax = Math.floor(max);
  var cookieAvg = Math.floor(Math.random() * (cookieMax - cookieMin)) + cookieMin;
  return(cookieAvg);
}

cookieAnHour();

//function that creates list of store and grabs cookie per hour, then creates a list over the business day
function listStore(store){

}
