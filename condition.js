let motTapeOk = true;

if (motTapeOk) {
  console.log("bravo, vous avez correctement tapé le mot");
} else {
  console.log("Echec, le mot est incorrect");
}

// const motApplication = "Bonjour!";
// let motUtilisateur = prompt("Entrez le mot :" + motApplication);
// console.log(motUtilisateur);
// if (motUtilisateur === motApplication) {
//   console.log("bravo!");
// } else {
//   console.log("Vous avez fait une erreur");
// }

// exo :
// Créez une variable appelée age et assignez-lui une valeur numérique représentant l'âge d'une personne.
// Utilisez une structure if...else pour vérifier si la personne est majeure (âgée de 18 ans ou plus) ou mineure (moins de 18 ans).
// Affichez dans la console un message approprié selon le cas : "Vous êtes majeur(e)" si l'âge est supérieur ou égal à 18, sinon "Vous êtes mineur(e)".
let age = 12;
if (isNaN(age)) {
  console.log("ce n'est pas un nombre");
} else if (age >= 18) {
  console.log("Vous êtes majeur");
} else {
  console.log("Vous êtes mineur");
}
//     OU 2 EME REPONSE
// let age = 20;
// if (age >= 18) {
//   console.log("Vous êtes majeur(e)");
// } else {
//   console.log("Vous êtes mineur(e)");
// }

// Exo;
// Créez une variable note représentant une note sur 20.
// Utilisez des structures conditionnelles pour afficher dans la console une mention correspondante à la note :
// Si la note est supérieure ou égale à 16, affichez "Très bien !".
// Si la note est comprise entre 12 et 15 inclus, affichez "Bien !".
// Si la note est comprise entre 9 et 11 inclus, affichez "Acceptable.".
// Si la note est inférieure à 9, affichez "Insuffisant.".

let note = 12;
if (note >= 16) {
  console.log("tres bien");
} else if (note >= 12 && note <= 15) {
  console.log("bien");
} else if (note >= 9 && note <= 11) {
  console.log("acceptable");
} else if (note < 9) {
  console.log("Insuffisant");
}

//EXO 1
// const btn1 = document.getElementById("btn1");
// btn1.addEventListener("click", function() {
//     let input1 = document.getElementById("input1").value;
// })

let jour = 3;
switch (jour) {
  case 1:
    console.log("lundi");
    break;
  case 2:
    console.log("mardi");
    break;
  case 3:
    console.log("mercredi");
    break;
  default:
    console.log("Vous avez fait une erreur de frappe");
}

// for (let i = 10; i >= 0; i -= 2) {
//   console.log(i);
// }
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let fruit = "banane";
switch (fruit) {
  case "pomme":
    console.log("les pommes sont rouges ou vertes");
    break;
  case "banane":
    console.log("les bananes sont jaunes");
    break;
  default:
    console.log("je ne connais pas cette couleur");
    break;
}

let mois = 3;
switch (mois) {
  case 1:
    console.log("janvier à 31 jour");
    break;
  case 2:
    console.log("février à 28 ou 29 jours");
    break;
  default:
    console.log("le mois est invalide");
    break;
}

// Quelle est la meilleure actrice?
// let meilleurFilm = "Black Swan";
// let meilleureActrice = "";

// switch (meilleurFilm) {
//   case "La Môme":
//     meilleureActrice = "Marion Cotillard";
//     break;
//   case "Mama Mia":
//     meilleureActrice = "Meryl Streep";
//     break;
//   case "Black Swan":
//     meilleureActrice = "Natalie Portman";
//     break;
// }
// console.log(meilleureActrice);
