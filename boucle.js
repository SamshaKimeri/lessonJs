// Exo
// Comptez de zéro à 5
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// Comptez de 5 à zéro
// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

// Afficher les nombres pairs de 0 à 10
// for (let index = 0; index < 10; index += 2) {
//   console.log(index);
// }

// Afficher les nombres de 1 à 4
// for (let i = 0; i <= 4; i++) {
//   console.log(i);
// }

// Afficher les nombres de 1 à 5 dans la console
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// Afficher les nombres pair
// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// Afficher les nombres de 10 à 1 dans l'ordre décroissant
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// Afficher 5 fois "bonjour" dans la console
// for (let bonjour = 0; bonjour < 5; bonjour++) {
//   console.log("bonjour");
// }

// Afficher les nombres de 0 à 4 en les multipliant par 2
// for (let i = 0; i <= 5; i++) {
//   console.log(i * 2);
// }

// Afficher les carrés des nombres de 1 à 5
// for (let i = 1; i <= 5; i++) {
//   let carre = i * i;
//   console.log(carre);
// }

// Afficher les nombres pairs de 2 à 10
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// Afficher les nombres de 10 à 1 en decroissant
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// Afficher les nombres de 1 à 10, en
// doublant chaque nombre affiché
// for (let i = 0; i < 10; i++) {
//   console.log(i * 2);
// }

// Afficher les nombres pair de 0 à 20 avec MODULO
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Afficher les nombres au carré
// for (let i = 0; i <= 5; i++) {
//   console.log("Le carré de", i, "est", i * i);
// }

// Calculer une somme de 1 à 10 inclus
// let somme = 0;
// for (let i = 1; i <= 10; i++) {
//   somme += i;
// }
// console.log(somme);

//  !!!!!!!!!LES TABLEAUX!!!!!!
// Afficher chaque nom du tableau dans la console
// let noms = ["Alex", "Calin", "Ishka"];
// for (let i = 0; i < noms.length; i++) {
//   console.log(noms[i]);
// }

// Afficher les eléments d'un tableau dans la console
// let noms = ["par", "pour", "contre"];
// for (let i = 0; i < noms.length; i++) {
//   console.log(noms[i]);
// }

// Multiplier chaque nombre du tableau par 2
// let nombre = [2, 6, 8, 10];
// for (let i = 0; i < nombre.length; i++) {
//   nombre[i] *= 2;
// }
// console.log(nombre);

// Calculer la somme de tous les nombres du tableau
// let nombres = [2, 5, 10, 12];
// let somme = 0;
// for (let i = 0; i < nombres.length; i++) {
//   somme += nombres[i];
// }
// console.log(somme);

// let nombres = [2, 4, 5, 6];
// let somme = 0;
// for (let i = 0; i < nombres.length; i++) {
//   somme += nombres[i];
// }
// console.log(somme);

// Calculer la moyenne des notes

// let notes = [14, 10, 16, 8, 12]; // Tableau des notes des étudiants
// let somme = 0; // Initialise la variable pour stocker la somme des notes

// for (let i = 0; i < notes.length; i++) {
//   somme += notes[i]; // Ajoute chaque note à la somme
// }

// let moyenne = somme / notes.length; // Calcule la moyenne en divisant la somme par le nombre de notes

// console.log("La moyenne des notes est :", moyenne);

// Calculer la somme de tous les nombres du tableau
// let valeurs = [10, 20, 30, 40];
// let somme = 0;
// for (let i = 0; i < valeurs.length; i++) {
//   somme += valeurs[i];
// }
// console.log(somme);

// Multiplier chaque nombre du tableau par 2
// let nombres = [2, 4, 1, 3];
// for (let i = 0; i < nombres.length; i++) {
//   let resultat = nombres[i] * 2;
//   console.log(resultat);
// }

// Multiplier chaque nombre du tableau par 3
// let nombres = [1, 3, 2, 4];
// for (let i = 0; i < nombres.length; i++) {
//   let resultat = nombres[i] * 3;
//   console.log(resultat);
// }

// Aditionner tous les nombres du tableau
// let nombres = [2, 4, 6, 12];
// let somme = 0;
// for (let i = 0; i < nombres.length; i++) {
//   somme += nombres[i];
// }
// console.log(somme);

//  !!!!!!!LES TABLEAUX ET IF !!!!!
// Afficher les nombres pair
// let nombre = [2, 3, 4, 5, 6];
// for (let i = 0; i < nombre.length; i++) {
//   if (nombre[i] % 2 === 0) {
//     console.log(nombre[i]);
//   }
// }

// Afficher les nombres superieur à zéro
// let nombres = [1, 2, 3, -4, -5, -6];
// for (let i = 0; i < nombres.length; i++) {
//   if (nombres[i] >= 0) {
//     console.log(nombres[i]);
//   }
// }

// Verifier si le nombre 7 est présent
// Si il n'est pas présent
// si il est présent
// let nombre = [1, 3, 5, 7];
// let estPresent = false;
// for (let i = 0; i < nombre.length; i++) {
//   if (nombre[i] === 7) {
//     estPresent = true;
//     break;
//   }
// }
// if (estPresent) {
//   console.log("sept est présent");
// } else {
//   console.log("sept n'est pas présent");
// }

// let nombres = [2, 6, 8, 3, 7];
// for (let i = 0; i < nombres.length; i++) {
//   if (nombres[i] > 5) {
//     console.log(nombres[i]);
//   }
// }

// let nombres = [2, 4, 6, 3];
// let plusGrand = nombres[0];
// for (let i = 1; i < nombres.length; i++) {
//   if (nombres[i] > plusGrand) {
//     plusGrand = nombres[i];
//   }
// }
// console.log(plusGrand);

// let numeros = [4, 2, 6, 1];
// let grand = numeros[0];
// for (let i = 0; i < numeros.length; i++) {
//   if (grand < numeros[i]) {
//     grand = numeros[i];
//   }
// }
// console.log(grand);
