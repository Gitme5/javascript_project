//Invite saisie de la question
question = prompt("Quoi encore ?");

// Mise en majuscule pour comparaison
questionUpper = question.toUpperCase();

// Découpage de la question pour vérifier le contenu
tab = []
for(let index in question) {
	letters = question[index]
	tab.push(letters)
}


switch (true){

	case tab[tab.length - 1] === "?" :
	console.log("Ouais Ouais...");
	break;	

	case question === questionUpper && question !== "":
	console.log("Pwa, calme-toi...");
	break;

	case question.includes("Fortnite") || question.includes("fortnite"):
	console.log("on s' fait une partie soum-soum ?");
	break;

	case question === "" :
	console.log("t'es en PLS ?");
	break;

	default:
    console.log("Balek !");
    break;



}


