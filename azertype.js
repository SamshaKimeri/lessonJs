// const listeMots = ["caca", "Pétunia", "Serviette"];
// let score = 0;
// let motUtilisateur = prompt("Entrez le mot :" + listeMots[0]);

// if (motUtilisateur === listeMots[0]) {
//   score++;
// }

// motUtilisateur = prompt("Entrez le mot :" + listeMots[1]);
// if (motUtilisateur === listeMots[1]) {
//   score++;
// }

// motUtilisateur = prompt("Entrez le mot :" + listeMots[2]);
// if (motUtilisateur === listeMots[2]) {
//   score++;
// }
// console.log(score);

// const listeMots = ["ca", "pe", "se"];
// let score = 0;
// for (let i = 0; i < listeMots.length; i++) {
//   let utilisateur = prompt("Entrez le mot : " + listeMots[i]);
//   if (utilisateur === listeMots[i]) {
//     score++;
//   }
// }
// console.log(score);

const listePhrases = "phrases";
const listeMots = "mots";
let utilisateur = prompt(
  "Entrez le mot : " + listeMots + " ou la phrase : " + listePhrases
);

while (utilisateur === listeMots || listePhrases) {
  // utilisateur = prompt("écris");
  console.log("vous avez choisi " + (listeMots || listePhrases));
}

if (utilisateur === listeMots) {
  const listeMots = ["ca", "pe", "se"];
  let score = 0;
  for (let i = 0; i < listeMots.length; i++) {
    let utilisateur = prompt("Entrez le mot : " + listeMots[i]);
    if (utilisateur === listeMots[i]) {
      score++;
    }
  }
  console.log(score);
} else {
  const listePhrases = ["pdp", "lv", "m"];
  let score = 0;
  for (let i = 0; i < listePhrases.length; i++) {
    let utilisateur = prompt("Entrez la bonne phrase : " + listePhrases[i]);
    if (utilisateur === listePhrases[i]);
    score++;
  }
}
console.log(score);
