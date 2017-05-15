//Creating object with min, max, avg
var storeLocation = [
  pikeplace = {
    name: 'Pike',
    min: 23,
    max: 65,
    avg: 6.3,
  },
  seaTac = {
    name: 'SeaTac',
    min: 3,
    max: 24,
    avg: 1.2,
  },
  seattleCenter = {
    name: 'Seattle Center',
    min: 11,
    max: 38,
    avg: 3.7
  },
  capitolHill = {
    name: 'Captiol Hill',
    min: 20,
    max: 38,
    avg: 2.3,
  },
  alki = {
    name: 'Alki',
    min: 2,
    max: 16,
    avg: 4.6,
  },
];

//Function that generates random cookie ammount per customer
function hourlyCookie(min, max, avg){
  min = Math.ceil(min);
  max = Math.floor(max);
  var people = Math.floor(Math.random() * (max - min)) + min;
  console.log('Total People;' + avg);
  return(people * avg);
}

hourlyCookie();

//function that creates list of store and grabs cookie per hour, then creates a list over the business day
function listStore(storeLocation)


}
