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

// / Afficher chaque nom du tableau dans la console
const noms = ["cachalot", "Pétunia", "Serviette"];
let point = 0;
for (let i = 0; i < noms.length; i++) {
  let tapeMot = prompt("entrez le mot " + noms[i]);
  if (tapeMot === noms[i]) {
    point++;
  }
}
console.log(point);
