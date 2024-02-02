// let jour = 3;
// switch (jour) {
//   case 1:
//     console.log("lundi");
//     break;
//   case 2:
//     console.log("mardi");
//     break;
//   case 3:
//     console.log("mercredi");
//     break;
//   default:
//     console.log("Vous avez fait une erreur de frappe");
// }

// let fruit = "banane";
// switch (fruit) {
//   case "pomme":
//     console.log("les pommes sont rouges ou vertes");
//     break;
//   case "banane":
//     console.log("les bananes sont jaunes");
//     break;
//   default:
//     console.log("je ne connais pas cette couleur");
//     break;
// }

// let mois = 3;
// switch (mois) {
//   case 1:
//     console.log("janvier à 31 jour");
//     break;
//   case 2:
//     console.log("février à 28 ou 29 jours");
//     break;
//   default:
//     console.log("le mois est invalide");
//     break;
// }

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

// Les jours de la semaine
// let jour = parseInt(prompt("Entrez un numéro"));
// switch (jour) {
//   case 1:
//     console.log("Lundi");
//     break;
//   case 2:
//     console.log("Mardi");
//     break;
//   case 3:
//     console.log("Mercredi");
//     break;
//   default:
//     console.log("rentrer un nombre");
//     break;
// }

// Entrez une note
// let note = prompt("Entrer une note a,b,c,d,ou f :");
// switch (note) {
//   case "a":
//     console.log("90-100%");
//     break;
//   case " b":
//     console.log("80-89%");
//     break;
//   case "c":
//     console.log("70-79%");
//     break;
//   case "d":
//     console.log("60-69%");
//     break;
//   case "f":
//     console.log("0-59%");
//     break;
//   default:
//     console.log("note non valide");
//     break;
// }

// let jour = parseInt(prompt("Entrez un numéro pour le jour de la semaine"));
// switch (jour) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("C'est un jour ouvrable");
//     break;
//   case 6:
//   case 7:
//     console.log("C'est le week-end");
//     break;
//   default:
//     console.log("Rentrez un chiffre");
//     break;
// }

// Exercice : Convertisseur de température
// Demander à l'utilisateur de choisir une option
// let choix = parseInt(  prompt( "Choisissez une option : \ntapez 1: Convertir de Celsius vers Fahrenheit \ntapez 2: Convertir de Fahrenheit vers Celsius"
//   )
// );
// Utiliser un switch en fonction du choix de l'utilisateur
// switch (choix) {
//   case 1:
// Convertir de Celsius vers Fahrenheit
// let temperatureCelsius = parseFloat(
//   prompt("Saisissez la température en Celsius :")
// );
// let temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
// console.log(
//   `La température en Fahrenheit est : ${temperatureFahrenheit.toFixed(2)}°F`
// );
// break;
//   case 2:
// Convertir de Fahrenheit vers Celsius
// let temperatureFahrenheit2 = parseFloat(
//   prompt("Saisissez la température en Fahrenheit :")
// );
// let temperatureCelsius2 = ((temperatureFahrenheit2 - 32) * 5) / 9;
// console.log(
//   `La température en Celsius est : ${temperatureCelsius2.toFixed(2)}°C`
// );
// break;
//   default:
// console.log("Option non valide");
// }

// Combien de jours dans le mois choisi par l'utilisateur
// let mois = parseInt(
//   prompt(
//     "Tapez un mois : \ntapez 1 pour janvier \ntapez 2 pour février \ntapez 3 pour mars \ntapez 4 pour avril \ntapez 5 pour mai"
//   )
// );
// switch (mois) {
//   case 1:
//   case 5:
//     console.log("Reste 31 jours");
//     break;
//   case 3:
//   case 4:
//     console.log("Reste 30 jours");
//     break;
//   case 2:
//     console.log("Reste 28 jours");
//     break;
//   default:
//     console.log("N'est pas valide");
// }

// let boisson = prompt(
//   "Choisissez une boisson parmis celles proposées : \n - café \n - thé"
// );
// switch (boisson.toLowerCase()) {
//   case "café":
//     console.log("Nous allons vous servir votre café");
//     break;
//   case "thé":
//     console.log("Nous vous apprtons votre thé");
//     break;
//   default:
//     console.log("N'est pas valide");
//     break;
// }

// Exercice : Calculatrice basique
// Demander à l'utilisateur d'entrer deux nombres
let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));

// Demander à l'utilisateur d'entrer un opérateur
let operateur = prompt("Entrez un opérateur (+, -, *, /) :");

// Utiliser un switch pour effectuer l'opération et afficher le résultat
switch (operateur) {
  case "+":
    console.log(`Le résultat de l'addition est : ${nombre1 + nombre2}`);
    break;

  case "-":
    console.log(`Le résultat de la soustraction est : ${nombre1 - nombre2}`);
    break;

  case "*":
    console.log(`Le résultat de la multiplication est : ${nombre1 * nombre2}`);
    break;

  case "/":
    if (nombre2 !== 0) {
      console.log(`Le résultat de la division est : ${nombre1 / nombre2}`);
    } else {
      console.log("Erreur : Division par zéro.");
    }
    break;

  default:
    console.log("Opérateur non valide. Veuillez choisir parmi +, -, *, /.");
}
