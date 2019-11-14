const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// Les entrepreneurs nés dans les années 70
let liste = []

for(let index in entrepreneurs) {
  seventies = entrepreneurs[index];
  //console.log(index); // index va aller jusqu'au nombre d'éléments dans le tableau
  //console.log(entrepreneurs[index]); //Renvoi chaque ligne
  //console.log(entrepreneurs[index].year); //Renvoi chaque année
  if (seventies.year >= 1970 && seventies.year <= 1980)
  {
    //console.log(seventies)
    liste.push(seventies)
  }

}
//console.log(liste)
console.log("Les entrepreneurs nés dans les années 70 sont :")
for(let index in liste) {
  console.log(liste[index].first + " " + liste[index].last + " " + liste[index].year )
}


// Arrays des Noms et Prénoms des entrepreneurs
let names = [];
for(let index in entrepreneurs) {
  peopleNames = entrepreneurs[index];
  names.push(peopleNames.first + " " + peopleNames.last);
}
console.log(names)



// Quel age auraient les entrepreneurs aujourd'hui
let ages = [];
currentYear = 2019;
for(let index in entrepreneurs) {
  peopleAge = entrepreneurs[index];
  let age = currentYear - peopleAge.year;
  console.log(peopleAge.first + " " + peopleAge.last + " aurait " + age + " ans");
}


// Classement des entrepreneurs par ordre alphabétique
console.log(entrepreneurs.sort(function(a,b){return ('' + a.last).localeCompare(b.last)}))




