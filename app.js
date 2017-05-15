//Creating object with min, max, avg
var storeLocation = [
  {
    nameP: 'Pike',
    min: 23,
    max: 65,
    avg: 6.3,
  },
  {
    nameS: 'SeaTac',
    min: 3,
    max: 24,
    avg: 1.2,
  },
  {
    nameSC: 'Seattle Center',
    min: 11,
    max: 38,
    avg: 3.7
  },
  {
    nameCH: 'Captiol Hill',
    min: 20,
    max: 38,
    avg: 2.3,
  },
  {
    nameA: 'Alki',
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
function listStore(store){

}
