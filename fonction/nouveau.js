let win = document.getElementById("win");
let score = document.getElementById("score");


let scorePlayer = 0;
let scoreComputer = 0;
let total = 0;

let btnShi = document.getElementById("btnShi");
btnShi.addEventListener("click", () => {
  let aleatoire = Math.floor(Math.random() * 3) + 1;
  console.log(aleatoire);
  if (aleatoire === 1) {
    console.log("égalité");
    win.textContent = "Nous sommes à égalité !";
  } else if (aleatoire === 2) {
    console.log("vous gagnez");
    win.textContent = "Félicitation ! vous gagnez !";
    scorePlayer++;
  } else {
    console.log("elle gagne");
    win.textContent = "Je gagne, désolée !";
    scoreComputer++;
  }
  console.log(`Votre score est de ${scorePlayer} sur 5`);
  console.log(`Mon score est de ${scoreComputer} sur 5`);
  score.innerHTML = `Votre score est de ${scorePlayer} sur 5 <br>  Mon score est de ${scoreComputer} sur 5`;
});

let btnFu = document.getElementById("btnFu");
btnFu.addEventListener("click", () => {
  let aleatoire = Math.floor(Math.random() * 3) + 1;
  console.log(aleatoire);
  if (aleatoire === 1) {
    console.log("égalité");
    win.textContent = "Nous sommes à égalité !";
  } else if (aleatoire === 2) {
    console.log("vous gagnez");
    win.textContent = "Félicitation ! vous gagnez !";
    scorePlayer++;
  } else {
    console.log("elle gagne");
    win.textContent = "Je gagne, désolée !";
    scoreComputer++;
  }
  console.log(`Votre score est de ${scorePlayer} sur 5`);
  console.log(`Mon score est de ${scoreComputer} sur 5`);
  score.innerHTML = `Votre score est de ${scorePlayer} sur 5 <br>  Mon score est de ${scoreComputer} sur 5`;
});

let btnMi = document.getElementById("btnMi");
btnMi.addEventListener("click", () => {
  let aleatoire = Math.floor(Math.random() * 3) + 1;
  console.log(aleatoire);
  if (aleatoire === 1) {
    console.log("égalité");
    win.textContent = "Nous sommes à égalité !";
  } else if (aleatoire === 2) {
    console.log("vous gagnez");
    win.textContent = "Félicitation ! vous gagnez !";
    scorePlayer++;
  } else {
    console.log("elle gagne");
    win.textContent = "Je gagne, désolée !";
    scoreComputer++;
  }
  console.log(`Votre score est de ${scorePlayer} sur 5`);
  console.log(`Mon score est de ${scoreComputer} sur 5`);
  score.innerHTML = `Votre score est de ${scorePlayer} sur 5 <br>  Mon score est de ${scoreComputer} sur 5`;
});
if (scoreComputer === 5 || scorePlayer === 5) {
  document.getElementById("score") = 0;
}
scoreComputer = 0;
scorePlayer = 0;
win.textContent = "";


// while (scorePlayer < 5) {
//   scorePlayer++;
// }
// console.log("c'est gagné");

// let compteur = 0;
// while (compteur < 5) {
//   console.log("le compteur est : " + compteur);
//   compteur++;
// }
// console.log("la boucle est terminée");

// essai = 0;
//     nombreAleatoire = Math.floor(Math.random() * 10) + 1;
//     document.getElementById("numberEx11").value = 0;

// let options = ["Pierre", "Papier", "Ciseaux"];
// const choixAleatoire = options[Math.floor(Math.random() * options.length)];
// console.log(choixAleatoire);
