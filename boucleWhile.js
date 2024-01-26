// let compteur = 0;
// while (compteur < 5) {
//   console.log("le compteur est : " + compteur);
//   compteur++;
// }
// console.log("la boucle est terminée");

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let compteur = 0;
// while (compteur < 5) {
//   compteur++;
// }
// console.log(compteur);

// Ecris ok
// tant que tu n'ecris pas ok
// la boucle continue
// let mot = prompt("Ecris ok");
// while (mot !== "ok") {
//   mot = prompt("écris");
// }
// console.log("vous avez écris ok");

// l'utilisateur doit trouver le nombre 7
// const nombreSecret = 7;
// let tentative = 0;
// let devine = parseInt(prompt("Devine le nombre entre 1 et 10 : "));
// while (devine !== nombreSecret) {
//   devine = parseInt(prompt("Incorrect. Essaie encore : "));
//   tentative++;
// }
// console.log(
//   "félicitations ! vous avez trouvé le nombre en " + tentative + " fois. "
// );

// L'utilisateur entre des nombres entier positif
// additionner ces nombres
// La boucle se termine lorsque un nombre est négatif
// let somme = 0;
// let nombre = parseInt(
//   prompt("Entrez un nombre (entrez un nombre négatif pour terminer) :")
// );
// while (nombre >= 0) {
//   somme += nombre;
//   nombre = parseInt(
//     prompt("Entrez un nombre (entrez un nombre négatif pour terminer) :")
//   );
// }
// console.log("La somme des nombres que vous avez entrés est : " + somme);

// let nombreLimite = parseInt(prompt("entrer un nombre : "));
// let compteur = 1;
// while (compteur <= nombreLimite) {
//   console.log(compteur);
//   compteur++;
// }

// l'utilisateur entre un nombre
// multiplier ce nombre par 2
// jusqu'à 100
// let nombre = parseInt(prompt("entrer"));
// while (nombre * 2 <= 100) {
//   nombre = nombre * 2;
//   console.log("Le double de " + nombre / 2 + " est : " + nombre);
// }

// L'utilisateur entre un nombre
// Multiplier ce nombre par 2
// Demander à l'utilisateur d'entrer un nombre entier
// let nombre = parseInt(prompt("Entrez un nombre entier :"));
// Utiliser la boucle while pour multiplier le nombre par 2 jusqu'à ce qu'il atteigne ou dépasse 100
// while (nombre < 100) {
// Afficher le résultat à chaque itération
// console.log(nombre);
// Multiplier le nombre par 2
// nombre *= 2;
// }
// Afficher le résultat final
// console.log(nombre);

// Demander à l'utilisateur d'entrer un nombre
// Calculer la factorielle de ce nombre
// let nombre = parseInt(prompt("Entrez un nombre entier positif :"));
// -Vérifie si l'entrée est un nombre positif
// if (nombre < 0) {
//   console.log("Veuillez entrer un nombre entier :  ");
// } else {
//   -Initialise la variable pour stocker la factorielle
//   let factorielle = 1;
//  -On calcule la factorielle avec while
//   let i = 1;
//   while (i <= nombre) {
//     factorielle *= i;
//     i++;
//   }
//   console.log(nombre + factorielle);
// }

// Demande à l'utilisateur d'entrer un nombre entier positif
// let nombreLimite = parseInt(prompt("Entrez un nombre entier positif :"));
// Vérifie si l'entrée est un nombre positif
// if (nombreLimite > 0) {
// Initialisation de la variable pour compter
// let compteur = 1;
// Utilisation d'une boucle while pour afficher les nombres en sautant de 2 en 2
// while (compteur <= nombreLimite) {
// console.log(compteur);
// compteur += 2; // On saute de 2 en 2
// }
// } else {
// console.log("Veuillez entrer un nombre entier positif.");
// }

// Afficher les nombres 1 à 5 dans la console
// let i = 0;
// while (i < 5) {
//   i++;
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

// let nombreTermes = 10;
// let termeCourant = 0;
// let termeSuivant = 1;
// let compteur = 0;
// console.log("Séquence de Fibonacci :");
// while (compteur < nombreTermes) {
//   console.log(termeCourant);
//   let temp = termeCourant + termeSuivant;
//   termeCourant = termeSuivant;
//   termeSuivant = temp;
//   compteur++;
// }

// Demander à l'utilisateur de rentrer un nombre
// Calculer la somme de tous les nombre pairs
// let nombreSaisi = parseInt(prompt("Entrez un nombre entier positif :"));
// let somme = 0; // Initialiser la variable somme à 0
// let compteur = 1; // Initialiser le compteur à 1
// Utiliser une boucle while pour itérer à travers les nombres de 1 jusqu'au nombre saisi
// while (compteur <= nombreSaisi) {
// Vérifier si le nombre actuel est pair en utilisant l'opérateur modulo (%)
// if (nombreSaisi % 2 === 0) {
// Si le nombre est pair, l'ajouter à la somme
// somme += compteur;
// }
// compteur++; // Passer au nombre suivant
// }
// console.log(`La somme des nombres pairs jusqu'à ${nombreSaisi} est : ${somme}`);

// let nombre = parseInt(prompt("Entrez un nombre entier positif"));
// let somme = 0;
// let compteur = 1;
// while (compteur <= nombre) {
//   somme += compteur;
//   compteur++;
// }
// console.log(`La somme des nombres de 1 à ${nombre} est : ${somme}`);

let nombre = parseInt(prompt("Entrez un nombre entier"))

