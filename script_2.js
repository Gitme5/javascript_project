let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
let result = 1

for(let count = number; count >= 1; count--){
  result = result * count;
}

console.log(`Le résultat est : ${result}`) 
