const listeMots = ["caca", "Pétunia", "Serviette"];
let score = 0;
let motUtilisateur = prompt("Entrez le mot :" + listeMots[0]);

if (motUtilisateur === listeMots[0]) {
  score++;
}

motUtilisateur = prompt("Entrez le mot :" + listeMots[1]);
if (motUtilisateur === listeMots[1]) {
  score++;
}

motUtilisateur = prompt("Entrez le mot :" + listeMots[2]);
if (motUtilisateur === listeMots[2]) {
  score++;
}
console.log(score);

// for (let i = 0; i < listeMots.length; i++) {
//   let motUtilisateur = prompt("entrez le mot " + listeMots[i]);
//   if (motUtilisateur === listeMots[i]) {
//     score++;
//   } else {
//     console.log("nop");
//   }
// }
// console.log(score);
