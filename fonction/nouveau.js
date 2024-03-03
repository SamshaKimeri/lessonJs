let win = document.getElementById("win");
let score = document.getElementById("score");
let scoreTotal = document.getElementById("scoreTotal");
let scorePlayer = 0;
let scoreComputer = 0;

// let total = 0;
if (scorePlayer >= 5) {
  alert("Bravo ! Vous avez remporté la partie !");
}

let btnShi = document.getElementById("btnShi");
btnShi.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  scoreTotal.innerText = "Qui va gagner la partie ?";
  let aleatoire = Math.floor(Math.random() * 3) + 1;
  console.log(aleatoire);
  if (aleatoire === 1) {
    console.log("égalité");
    win.textContent = "Nous sommes à égalité !";
  } else if (aleatoire === 2) {
    console.log("vous gagnez");
    win.textContent = `Félicitation ! ${name} vous gagnez !`;
    scorePlayer++;
  } else {
    console.log("elle gagne");
    win.textContent = "Je gagne, désolée !";
    scoreComputer++;
  }
  console.log(`Votre score est de ${scorePlayer} sur 5`);
  console.log(`Mon score est de ${scoreComputer} sur 5`);
  score.innerHTML = `${name} Votre score est de ${scorePlayer} sur 5 <br>  Mon score est de ${scoreComputer} sur 5`;
  victory();
  reset();
});

let btnFu = document.getElementById("btnFu");
btnFu.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  scoreTotal.innerText = "Qui va gagner la partie ?";
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
  score.innerHTML = `${name} Votre score est de ${scorePlayer} sur 5 <br>  Mon score est de ${scoreComputer} sur 5`;
  victory();
  reset();
});

let btnMi = document.getElementById("btnMi");
btnMi.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  scoreTotal.innerText = "Qui va gagner la partie ?";
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

  score.innerHTML = `${name} Votre score est de ${scorePlayer} sur 5 <br>  Mon score est de ${scoreComputer} sur 5`;
  victory();
  reset();
});

console.log(`score player : ${scorePlayer}`);

function victory() {
  if (scorePlayer === 5) {
    scoreTotal.innerText = "Bravo, vous avez gagné la manche !";
  } else if (scoreComputer === 5) {
    let name = document.getElementById("name").value;
    scoreTotal.innerText = `Désolé, ${name} cette fois-ci je gagne ! ("`;
  }
}

function reset() {
  if (scorePlayer === 5 || scoreComputer === 5) {
    scorePlayer = 0;
    scoreComputer = 0;
    // scoreTotal.innerText = "Qui va gagner la partie ?";
  }
}

// if (scoreComputer === 5 || scorePlayer === 5) {
//   if (scorePlayer === 5) {
//     scoreTotal.textContent = "Bravo ! Vous avez remporté la partie !";
//   } else {
//     scoreTotal.textContent = "Je gagne la partie, désolée !";
//   }
// }
// scoreComputer = 0;
// scorePlayer = 0;
// win.textContent = "";

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
let win = document.getElementById("win");
let score = document.getElementById("score");
let scoreTotal = document.getElementById("scoreTotal");
let scorePlayer = 0;
let scoreComputer = 0;

let btnShi = document.getElementById("btnShi");
let btnFu = document.getElementById("btnFu");
let btnMi = document.getElementById("btnMi");

btnShi.addEventListener("click", () => {
  playGame(1);
});

btnFu.addEventListener("click", () => {
  playGame(2);
});

btnMi.addEventListener("click", () => {
  playGame(3);
});

function playGame(playerChoice) {
  let options = ["Shi", "Fu", "Mi"];
  let computerChoice = Math.floor(Math.random() * 3);
  let result = compareChoices(playerChoice, computerChoice);

  if (result === "Win") {
    scorePlayer++;
  } else if (result === "Lose") {
    scoreComputer++;
  }

  score.textContent = `${options[playerChoice]} vs ${options[computerChoice]}`;
  win.textContent = result;

  if (scorePlayer === 5 || scoreComputer === 5) {
    if (scorePlayer === 5) {
      scoreTotal.textContent = "Bravo ! Vous avez remporté la partie !";
    } else {
      scoreTotal.textContent = "Je gagne la partie, désolée !";
    }

    scorePlayer = 0;
    scoreComputer = 0;
  }
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === 0 && computerChoice === 1) ||
    (playerChoice === 1 && computerChoice === 2) ||
    (playerChoice === 2 && computerChoice === 0)
  ) {
    return "Win";
  } else {
    return "Lose";
  }
}
