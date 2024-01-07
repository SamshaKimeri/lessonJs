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

// Afficher les eléments d'un tableau dans la console
// let noms = ["par", "pour", "contre"];
// for (let i = 0; i < noms.length; i++) {
//   const element = noms[i];
//   console.log(noms[i]);
// }

// Multiplier chaque nombre du tableau par 2
// let nombre = [2, 6, 8, 10];
// for (let i = 0; i < nombre.length; i++) {
//   nombre[i] *= 2;
// }
// console.log(nombre);

// let nombres = [2, 4, 5, 6];
// let somme = 0;
// for (let i = 0; i < nombres.length; i++) {
//   somme += nombres[i];
// }
// console.log(somme);

// let nombres = [2, 6, 8, 3, 7];
// for (let i = 0; i < nombres.length; i++) {
//   if (nombres[i] > 5) {
//     console.log(nombres[i]);
//   }
// }

let nombres = [2, 10, 3, 11];
for (let i = 0; i < nombres.length; i++) {
  Math.max = nombres[i];
}
console.log(nombres);
