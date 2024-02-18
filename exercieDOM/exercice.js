let button1 = document.getElementById("button1");
let paragraphe1 = document.getElementById("paragraphe1");
button1.addEventListener("click", () => {
  let input1 = document.getElementById("input1").value;
  paragraphe1.textContent = input1;
  //   paragraphe1.textContent = "Vous avez cliqué sur le bouton";
  paragraphe1.style.color = "red";
});

// Exo2
let button2 = document.getElementById("button2");
let paragraphe2 = document.getElementById("paragraphe2");
button2.addEventListener("click", () => {
  let champTexte2 = document.getElementById("champTexte2").value;
  paragraphe2.textContent = champTexte2;
});

// Exo3
let button3 = document.getElementById("button3");
let infoUtilisateur3 = document.getElementById("infoUtilisateur3");
button3.addEventListener("click", () => {
  let name3 = document.getElementById("name3").value;
  let age3 = document.getElementById("age3").value;
  infoUtilisateur3.textContent = `Votre nom est : ${name3}, vous avez ${age3} ans`;
});

// Exo4
let button4 = document.getElementById("button4");
button4.addEventListener("click", () => {
  let couleurFond4 = document.getElementById("couleurFond4").value;
  couleurFond4.textContent = couleurFond4;
  document.body.style.backgroundColor = "red";
});

// Exo5
function convertirCelsusEnFahreneit(tempCelsus) {
  return (tempCelsus * 9) / 5 + 32;
}
let btnConvertir = document.getElementById("btnConvertir");
let resultat = document.getElementById("resultat");
btnConvertir.addEventListener("click", () => {
  let tempCelsus = document.getElementById("tempCelsus").value;
  let tempFahrenheit = convertirCelsusEnFahreneit(tempCelsus);
  resultat.textContent = `La température est ${tempFahrenheit} fareneit.`;
});

// Exo6
let btn6 = document.getElementById("btn6");
let pairOuImpair = document.getElementById("pairOuImpair");
btn6.addEventListener("click", () => {
  let number6 = document.getElementById("number6").value;
  if (number6 % 2 === 0) {
    pairOuImpair.textContent = `Le nombre ${number6} est pair.`;
  } else {
    pairOuImpair.textContent = `Le nombre ${number6} est impair.`;
  }
});

// Exo7
let btn7 = document.getElementById("btn7");
let resultat7 = document.getElementById("resultat7");
btn7.addEventListener("click", () => {
  let annee7 = document.getElementById("annee7").value;
  if ((annee7 % 4 === 0 && annee7 % 100 !== 0) || annee7 % 400 === 0) {
    resultat7.textContent = `${annee7} est une année bissextile`;
  } else {
    resultat7.textContent = `${annee7} n'est pas bissextile`;
  }
});

// Exo8
function aire(number8, number88) {
  return number8 * number88;
}
let number8 = document.getElementById("number8");
let number88 = document.getElementById("number88");
let btn8 = document.getElementById("btn8");
let resultat8 = document.getElementById("resultat8");
btn8.addEventListener("click", () => {
  let calculAire = aire(number8.value, number88.value);
  resultat8.textContent = `l'aire de ${number8.value} * ${number88.value} est de  ${calculAire} m²`;
});

// Exo9
function convertir(number9) {
  let tauxDeChange = 1.12;
  return number9 * tauxDeChange;
}
let number9 = document.getElementById("number9");
let btn9 = document.getElementById("btn9");
let resultat9 = document.getElementById("resultat9");
btn9.addEventListener("click", () => {
  let montantEuro = parseFloat(number9.value);
  if (isNaN(montantEuro)) {
    resultat9.textContent = `Veuillez entrer un chiffre`;
  } else {
    let montantDollars = convertir(montantEuro);
    resultat9.textContent = `${montantEuro} euros correspond à ${montantDollars} dollars`;
  }
});

// // Sélectionner les éléments champ de texte et bouton
// const montantEurosInput = document.getElementById("montantEuros");
// const convertirBtn = document.getElementById("convertirBtn");
// const resultatParagraphe = document.getElementById("resultat");
// // Taux de change : 1 euro = 1.12 dollars
// const tauxDeChange = 1.12;
// // Ajouter un gestionnaire d'événements pour le clic sur le bouton
// convertirBtn.addEventListener("click", function () {
//   // Récupérer le montant en euros saisi par l'utilisateur
//   const montantEuros = parseFloat(montantEurosInput.value);
//   // Vérifier si le montant saisi est un nombre
//   if (!isNaN(montantEuros)) {
//     // Convertir le montant en euros en dollars
//     const montantDollars = montantEuros * tauxDeChange;
//     // Afficher le résultat
//     resultatParagraphe.textContent = `${montantEuros} euros équivalent à ${montantDollars.toFixed(
//       2
//     )} dollars`;
//   } else {
//     // Afficher un message d'erreur si le montant saisi n'est pas un nombre
//     resultatParagraphe.textContent =
//       "Veuillez entrer un montant valide en euros.";
//   }
// });

// Exo 10
function aire(number10, number100) {
  return (number10 * number100) / 2;
}
let number10 = document.getElementById("number10");
let number100 = document.getElementById("number100");
let btn10 = document.getElementById("btn10");
let resultat10 = document.getElementById("resultat10");
btn10.addEventListener("click", () => {
  if (isNaN(number10.value) && isNaN(number100.value)) {
    resultat10.textContent = `Veuilez entrerr un chiffre`;
  } else {
    let calculAire = (number10.value, number100.value);
    resultat10.textContent = `${calculAire}`;
  }
});

// Utilisation de createElement
// Exo11
let btn11 = document.getElementById("btn11");
let divExo11 = document.getElementById("div-exo-11");
btn11.addEventListener("click", () => {
  let newParagraphe11 = document.createElement("p");
  newParagraphe11.textContent = "Bonjour et bienvenue sur ma page";
  divExo11.appendChild(newParagraphe11);
  btn11.style.display = "none";
});

// Exo12
let btn12 = document.getElementById("btn12");
let divExo12 = document.getElementById("div-exo-12");
btn12.addEventListener("click", () => {
  let newParagraphe12 = document.createElement("p");
  newParagraphe12.textContent =
    "Bonjour, voici un texte qui se place avant le bouton";
  divExo12.insertBefore(newParagraphe12, btn12);
});

// Exo13
let div13 = document.getElementById("div13");
let btn13 = document.getElementById("btn13");
let btn131 = document.getElementById("btn131");
let newParagraphe13;

btn13.addEventListener("click", () => {
  newParagraphe13 = document.createElement("p");
  newParagraphe13.textContent = "Bonjour et bienvenue";
  div13.appendChild(newParagraphe13);
});
btn131.addEventListener("click", () => {
  if (newParagraphe13) {
    newParagraphe13.remove();
  }
});

// Exo14
let div14 = document.getElementById("div14");
let btn14 = document.getElementById("btn14");
btn14.addEventListener("click", () => {
  let newParagraphe14 = document.createElement("p");
  newParagraphe14.textContent = "Bonjour";
  div14.appendChild(newParagraphe14);
});

// Exo15
let div15 = document.getElementById("div15");
let btn15 = document.getElementById("btn15");
// Créer une variable pour suivre l'état du message
var messageAffiche = false;
// Ajouter un gestionnaire d'événements pour le clic sur le bouton
btn15.addEventListener("click", function () {
  // Créer un nouvel élément paragraphe
  var nouveauParagraphe = document.createElement("p");
  // Choisir le message en fonction de l'état actuel
  var message;
  if (messageAffiche) {
    message = "Au revoir !";
  } else {
    message = "Bonjour !";
  }
  // Mettre à jour l'état du message pour le prochain clic
  messageAffiche = !messageAffiche;
  // Ajouter du texte au paragraphe
  nouveauParagraphe.textContent = message;
  // Ajouter le paragraphe à la fin du body
  div15.appendChild(nouveauParagraphe);
});

// Exo16
let btn16 = document.getElementById("btn16");
let div16 = document.getElementById("div16");
function ajouterParagraphe() {
  let newParagraphe16 = document.createElement("p");
  newParagraphe16.textContent = "J'ajoute un nouveau paragraphe";
  div16.appendChild(newParagraphe16);
}
btn16.addEventListener("click", ajouterParagraphe);

// Exo17
let myForm17 = document.getElementById("myForm17");
let output17 = document.getElementById("output17");
function handleFormSubmit(event) {
  event.preventDefault();
  let name17 = document.getElementById("name17").value;
  let age17 = document.getElementById("age17").value;
  let newparagraphe17 = document.createElement("p");
  newparagraphe17.textContent = "Nom : " + name17 + ", Age : " + age17 + " ans";
  output17.appendChild(newparagraphe17);
}
myForm17.addEventListener("submit", handleFormSubmit);

// Exo18
let output18 = document.getElementById("output18");
function handleFormSubmit(event) {
  event.preventDefault();
  let name18 = document.getElementById("name18").value;
  let message18 = document.getElementById("message18").value;
  let newParagraphe18 = document.createElement("p");
  newParagraphe18.textContent = name18 + message18;
  output18.appendChild(newParagraphe18);
}
let myForm18 = document.getElementById("myForm18");
myForm18.addEventListener("submit", handleFormSubmit);

// Exo19
let ul19 = document.getElementById("ul19");
let btn19 = document.getElementById("btn19");
btn19.addEventListener("click", () => {
  let name19 = document.getElementById("name19").value;
  let list19 = document.createElement("li");
  list19.textContent = name19;
  ul19.appendChild(list19);
  document.getElementById("name19").value = "";
});

// Exo20
// let array20 = ["pommes", "bananes", "oranges", "poires"];
// let listdiv = document.getElementById("list20");
// let ol20 = document.createElement("ol");
// array20.forEach(function (element) {
//   let li20 = document.createElement("li");
//   li20.textContent = element;
//   ol20.appendChild(li20);
// });
// listdiv.appendChild(ol20);
let array20 = ["pommes", "bananes", "oranges", "poires"];
let listDiv = document.getElementById("list2O");
// Créer une liste ordonnée
let ol20 = document.createElement("ol");
// Parcourir le tableau et créer des éléments de liste pour chaque élément
array20.forEach(function (element) {
  let li20 = document.createElement("li");
  li20.textContent = element;
  ol20.appendChild(li20); // Ajouter l'élément de liste à la liste ordonnée
});
// Ajouter la liste ordonnée à l'élément <div> avec l'ID "list2O"
listDiv.appendChild(ol20);

// Exo21
// Tableau de chaînes de caractères
let elements = ["Chien", "Chat", "Oiseau", "Lapin"];
// Sélectionner l'élément où la liste sera ajoutée
let listeDiv = document.getElementById("liste");
// Créer un élément de liste non ordonnée (ul)
let listeNonOrdonnee = document.createElement("ul");
// Parcourir le tableau et créer un élément de liste pour chaque élément
elements.forEach(function (element) {
  let listeElement = document.createElement("li");
  listeElement.textContent = element;
  listeNonOrdonnee.appendChild(listeElement);
});
// Ajouter la liste non ordonnée à l'élément de la page
listeDiv.appendChild(listeNonOrdonnee);
