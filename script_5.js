const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];



// On vérifie que tous les livres ont été empruntés au moins une fois
let count = 0; 
for(let index in books) {
  booksRent = books[index];  //On vérifie s'il y a des livres qui n'ont jamais été loués
  if (booksRent.rented === 0) {   
    count += 1;
  }
}

if (count === 0) {
  console.log("Tous les livres ont été loués au moins une fois")
}
else if (count === 1){
  console.log(" 1 livre n'a jamais été loué")
} 
else {
  console.log(`${count} livres n'ont jamais été loué`)
}


// On cherche le livre qui a été le plus emprunté
let topRent = 0;
best = []
for(let index in books) {
  booksRent = books[index];  //On vérifie s'il y a des livres qui n'ont jamais été loués
  console.log(booksRent)
  console.log(booksRent.rented)
  if (booksRent.rented > topRent) {   
    topRent = booksRent.rented;
    best = booksRent
  }
 
}
console.log(best)
console.log(`Le livre le plus loué est ${best.title}`)



// On cherche le livre qui a été le moins emprunté
lowRent = books[0].rented; // on initialise le plus bas pour comparer avec les autres 

low = [];

for(let index in books) {
  booksRent = books[index];  //On vérifie s'il y a des livres qui n'ont jamais été loués

  if (booksRent.rented < lowRent) {   
    lowRent = booksRent.rented;
    low = booksRent
  }

}
console.log(low)
console.log(`Le livre le moins loué est ${low.title}`)



// Recherche et suppression du livre à l'ID 873495
for(let index in books) {
  booksRent = books[index];  //On vérifie s'il y a des livres qui n'ont jamais été loués
  console.log(booksRent.id)
  if (booksRent.id === 873495) {   
    searchBook = booksRent;
    console.log(booksRent);
    console.log(`Le livre avec l'ID 873495 est ${booksRent.title}`)
    break;
  }

}


// Recherche et suppression du livre à l'ID 133712
for(let index in books) {
  booksRent = books[index];  //On vérifie s'il y a des livres qui n'ont jamais été loués
  if (booksRent.id === 133712) {   
    console.log(booksRent);
    console.log(`Le livre avec l'ID 133712 est ${booksRent.title}`)
    books.splice(index, 1);
    console.log("Le livre est supprimé")
    break;
  }

}

// Classement des entrepreneurs par ordre alphabétique
console.log(books.sort(function(a,b){return ('' + a.title).localeCompare(b.title)}))


