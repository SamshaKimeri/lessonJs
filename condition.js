// let motTapeOk = true;

// if (motTapeOk) {
//   console.log("bravo, vous avez correctement tapé le mot");
// } else {
//   console.log("Echec, le mot est incorrect");
// }

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
// let age = 12;
// if (isNaN(age)) {
//   console.log("ce n'est pas un nombre");
// } else if (age >= 18) {
//   console.log("Vous êtes majeur");
// } else {
//   console.log("Vous êtes mineur");
// }
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

// let note = 12;
// if (note >= 16) {
//   console.log("tres bien");
// } else if (note >= 12 && note <= 15) {
//   console.log("bien");
// } else if (note >= 9 && note <= 11) {
//   console.log("acceptable");
// } else if (note < 9) {
//   console.log("Insuffisant");
// }

//EXO 1
// const btn1 = document.getElementById("btn1");
// btn1.addEventListener("click", function() {
//     let input1 = document.getElementById("input1").value;
// })

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

// for (let i = 10; i >= 0; i -= 2) {
//   console.log(i);
// // }
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
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

// let x = 4;
// let y = 3;
// if (x > 1) {
//   console.log("x contient une valeur supérieure à 1");
// }
// if (x == y) {
//   console.log("x et y contiennent la même valeur");
// }
// if (y) {
//   console.log("la valeur de  y est évalué à true");
// }

// let x = 1;
// let y = 1;
// if (x > 1 == false) {
//   console.log("x contient une valeur inférieur à 1");
// }
// if ((x == y) == false) {
//   console.log("x et y ne contiennent pas la même valeur");
// }
// if (y == false) {
//   console.log("la valeur de y est évalué à false");
// }

// let x = 2;
// if (x > 1) {
//   console.log("x contient une valeur strictement supérieur à 1");
// } else {
//   console.log("x contient une valeur inferieure ou égale à 1");
// }

// let x = "1";
// if (x > 1) {
//   console.log("x contient une valeur strictement supérieure à 1");
// } else if (x == 1) {
//   console.log("x contient la valeur 1");
// } else {
//   console.log("x contient une valeur strictement inférieure à 1");
// }

// let x = 2;
// let y = 4;
// if (x >= 0 && x <= 10) {
//   console.log("entre 0 et 10");
//   document.getElementById("p1").innerHTML =
//     "x contient une valeur comprise entre 0 et 10";
// }
// if (y < -10 || y > 10) {
//   console.log("y plus petit que -10 ou plus grand que 10");
//   document.getElementById("p2").innerHTML =
//     "y contient une valeur plus petite que -10 ou plus grande que 10";
// }
// if (!(x <= 2)) {
//   console.log("x strictement supérieur à 2");
//   document.getElementById("p3").innerHTML =
//     "x contient une valeur strictement supérieur à 2";
// }

// let x = 1;
// let y = -20;
// let z = 3;
// if ((x <= 25 - 15 && x >= 0) || y < 0) {
//   //   document.getElementById("p1").innerHTML =
//   console.log(
//     "cette phrase s'affiche si x contient une valeur comprise entre 0 et 10 OU si y contient une valeur strictement négative(ou si ces deux conditions sont réunies)"
//   );
// }
// if (x <= 25 - 15 && (x >= 0 || y < 0)) {
//   // document.getElementById("p2").innerHTML =
//   console.log(
//     "cette phrase s'affiche si x contient une valeur inférieure ou égale à 10 ET si soit x contient une valeur supérieure à O, soit y contient une valeur strictement négative(soit les deux conditions sont réunies)"
//   );
// }
// if (!z == true) {
//   // document.getElementById("p3").innerHTML =
//   console.log("contient une valeur évalué à false");
// }

// Opérateur ternaire
// let age = 20;
// Utilisation de l'opérateur ternaire pour déterminer si une personne est majeure ou mineure
// let statut = (age >= 18) ? "Majeur" : "Mineur";
// console.log(statut);  // Affichera "Majeur" si l'âge est supérieur ou égal à 18, sinon affichera "Mineur"

// Lorsqu'une variable est null, cela indique souvent l'absence intentionnelle de valeur.
//  Cela peut être utile pour initialiser une variable avant de lui attribuer une valeur
//  spécifique, ou pour indiquer qu'une variable ne pointe actuellement vers aucun objet.
// let utilisateurConnecte = null;
// ... Plus de code ...
// Plus tard dans le programme, on attribue une valeur à la variable
// if (condition) {
// utilisateurConnecte = obtenirUtilisateurConnecte();
// } else {
// utilisateurConnecte = null;  // Par exemple, déconnecter l'utilisateur
// }
// Utilisation de la variable
// if (utilisateurConnecte !== null) {
// console.log("L'utilisateur est connecté : " + utilisateurConnecte.nom);
// } else {
// console.log("Aucun utilisateur n'est actuellement connecté.");
// }

// L'utilisateur saisi un nombre
// On affiche si le nombre est pair ou impair
// let nombre = parseInt(prompt("Saisissez un nombre"));
// if (nombre % 2 === 0) {
//   console.log("Le nombre est pair");
// } else {
//   console.log("Le nombre est impair");
// }

// OU ALORS
// let nombre = prompt("Veuillez saisir un nombre : ");
// // Convertir l'entrée en un nombre entier
// nombre = parseInt(nombre);
// // Vérifier si le nombre est pair ou impair
// if (isNaN(nombre)) {
//   console.log("Veuillez saisir un nombre valide.");
// } else {
//   if (nombre % 2 === 0) {
//     console.log("Le nombre est pair.");
//   } else {
//     console.log("Le nombre est impair.");
//   }
// }

// L'utilisateur entre son mot de passe
// let motDePasse = prompt("Veuillez taper votre mot de passe");
// if (motDePasse === "motdepasse123") {
//   console.log("le mot de passe est exact");
// } else {
//   console.log("Veuillez retaper le mot de passe");
// }
// // Exercice : Calcul de la moyenne
// // Demander à l'utilisateur de saisir trois notes
// let note1 = parseFloat(prompt("Saisissez la première note (sur 20) :"));
// let note2 = parseFloat(prompt("Saisissez la deuxième note (sur 20) :"));
// let note3 = parseFloat(prompt("Saisissez la troisième note (sur 20) :"));
// // Vérifier si les entrées sont des nombres valides
// if (isNaN(note1) || isNaN(note2) || isNaN(note3)) {
//     console.log("Veuillez saisir des notes valides (chiffres).");
// } else {
//     // Calculer la moyenne
//     let moyenne = (note1 + note2 + note3) / 3;
//     // Vérifier si l'utilisateur a réussi ou échoué
//     if (moyenne >= 10) {
//         console.log("Félicitations ! Vous avez réussi avec une moyenne de " + moyenne.toFixed(2));
//     } else {
//         console.log("Désolé, vous avez échoué avec une moyenne de " + moyenne.toFixed(2));
//     }
// }

// Comparer deux nombres
// let nombre1 = prompt("saisir un prmier nombre");
// let nombre2 = prompt("saisir un deuxième nombre");
// if (isNaN(nombre1) || isNaN(nombre2)) {
//   console.log("Veuillez entrer des nombres");
// } else {
//   if (nombre1 > nombre2) {
//     console.log(`${nombre1} est plus grand que ${nombre2}`);
//   } else if (nombre1 < nombre2) {
//     console.log(`${nombre2} est plus grand que ${nombre1}`);
//   } else {
//     console.log("Les deux nombres sont égaux");
//   }
// }

// Etes vous majeur ou mineur
// let age = prompt("Saisissez votre âge");
// if (isNaN(age)) {
//   console.log("Saisissez un âge");
// } else {
//   if (age >= 18) {
//     console.log("Vous pouvez voter");
//   } else {
//     console.log("Vous n'avez pas l'age");
//   }
// }

// Exercice : Calcul de frais de livraison
// Demander à l'utilisateur de saisir le montant total de ses achats
// let montantTotal = parseFloat(
// prompt("Entrez le montant total de vos achats :")
// );
// Vérifier si l'entrée est un nombre valide
// if (isNaN(montantTotal)) {
// console.log("Veuillez saisir un montant valide.");
// } else {
// Appliquer une réduction si le montant total est supérieur ou égal à 50
// if (montantTotal >= 50) {
// let reduction = 0.1 * montantTotal; // 10% de réduction
// let montantFinal = montantTotal - reduction;
// console.log("Félicitations ! Vous avez droit à une réduction de 10%.");
// console.log(
// "Montant total après réduction : " + montantFinal.toFixed(2) + " euros"
// );
// } else {
// console.log(
// "Désolé, pas de réduction applicable pour les montants inférieurs à 50 euros."
// );
// console.log(
// "Montant total à payer : " + montantTotal.toFixed(2) + " euros"
// );
// }
// }

// Vérifier quel type de triangle
// let cote1 = prompt("Rentrer une première longueur");
// let cote2 = prompt("Rentrer une deuxième longueur");
// let cote3 = prompt("Rentrer une troisième longueur");
// if (cote1 === cote2 && cote1 === cote3 && cote2 === cote3) {
//   console.log("équilatéral");
// } else if (cote1 === cote2 || cote1 === cote3 || cote2 === cote3) {
//   console.log("isocèle");
// } else {
//   console.log("scalène");
// }
// {
// }
