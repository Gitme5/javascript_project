
const arn0 = "UUACGCAGUAGA"
const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

const serine = ['UCU','UCC','UCA','UCG','AGU','AGC'];
const proline = ['CCU', 'CCC', 'CCA','CCG'];
const leucine = ['UUA', 'UUG'];
const phenylalanine = ['UUU', 'UUC'];
const arginine = ['CGU','CGC', 'CGA','CGG','AGA','AGG'];
const tyrosine = ['UAU', 'UAC'];


function arn_to_protein(arn) {

	// Séapation en codons
	codonsTab = arn.match(/.{1,3}/g)
	console.log(codonsTab)

	// Correspondance des acides aminés
	protein = [];
	codonsTab.forEach(codons => {

		if (serine.includes(codons)) {
			protein.push("Sérine");
		}
		else if (proline.includes(codons)) {
			protein.push("Proline");	
		}
		else if (leucine.includes(codons)) {
			protein.push("Leucine");
		}
		else if (phenylalanine.includes(codons)) {
			protein.push("Phénylalanine");
		}
		else if (arginine.includes(codons)) {
			protein.push("Arginine");
		}
		else if (tyrosine.includes(codons)) {
			protein.push("Tyrosine");
		}
		else { 
	        console.log("Aucune correspondance trouvée")
	    }	

	});

	// Constitution de la protéïne
	console.log(protein)
	console.log("La protéine correspondante est " + protein.join("-"))
	return protein.join("-");

}

console.log("Conversion ARN_0 : " + arn_to_protein(arn0))
console.log("Conversion ARN_1 : " + arn_to_protein(arn1))
console.log("Conversion ARN_2 : " + arn_to_protein(arn2))

