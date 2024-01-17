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

// // Cette variable va contenir le mot ou la phrase entré par l'utilisateur
// let motUtilisateur;

// // Cette variable va contenir le score de l'utilisateur, il commence à zéro.
// let score = 0;

// // Si l'utilsateur a choisi "mots", on lui demande de taper les mots de la liste
// if (choix === "mots") {
//   // Si l'utilisateur a choisi "phrases", on lui demande de taper les phrases de la liste
// } else {
//   for (let i = 0; i < listePhrases.length; i++) {
//     motUtilisateur = prompt("Entrez la bonne phrase : " + listePhrases[i]);
//     if (motUtilisateur === listePhrases[i]);
//     score++;
//   }
//   console.log("Votre score est de : " + score + " sur " + listePhrases.length);
// }

function afficherResultat(score, nbMotsProposes) {
  // On affiche le score de l'utilisateur
  console.log("Votre score est de : " + score + " sur " + nbMotsProposes);
}

function choisirPhrasesOuMots() {
  // Tant que l'utilisateur n'a pas choisis "mots" ou "phrases", on lui redemande
  let choix = prompt("Veuillez choisir la liste : mots ou phrases");
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("écris : mots ou phrases");
  }
  return choix;
}

function lancerBoucleDeJeu(listePropositions) {
  let score = 0;
  for (let i = 0; i < listePropositions.length; i++) {
    motUtilisateur = prompt("Entrez le mot : " + listePropositions[i]);
    if (motUtilisateur === listePropositions[i]) {
      score++;
    }
  }
  return score;
}

function lancerJeu() {
  let choix = choisirPhrasesOuMots;
  let score = 0;
  let nbMotsProposes = 0;

  if (choix === "mots") {
    score = lancerBoucleDeJeu(listeMots);
    nbMotsProposes = listeMots.length;
  } else {
    score = lancerBoucleDeJeu(listePhrases);
    nbMotsProposes = listePhrases.length;
  }

  afficherResultat(score, nbMotsProposes);
}
