
let elements = [];
let levels = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
// On initialise avec le nombre de caractères qui correspond au nombre d'étages
for (var i = 0; i<= levels ; i++) {
	elements.push(" ");
}

//On insère à chaque ligne un nouveau #
for (var i = 1; i <= levels ; i++) {
	elements.shift();
	elements.push("#");
	console.log(`${elements.join("")}`);
}


