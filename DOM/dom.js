let baliseZoneProposition = document.getElementById("zoneProposition");
console.log(baliseZoneProposition);
console.log(baliseZoneProposition.clientHeight);

let baliseZonePropositionSpan = document.querySelector("#zoneProposition span");
console.log(baliseZonePropositionSpan);

let listeInputRadio = document.querySelectorAll(".zoneChoix input");
console.log(listeInputRadio);

for (let i = 0; i < listeInputRadio.length; i++) {
  console.log(listeInputRadio[i]);
}

// IMAGE
let image = document.getElementById("fleur");
// image.setAttribute("src", "tournesol.jpg");
image.src = "tournesol.jpg";

image.classList.remove("noirEtBlanc");

// CREATE ELEMENT
// let titrePage = "le titre de ma page";
// // let h1 = document.createElement("h1");
// // h1.innerText = titrePage;
// let body = document.querySelector("body");
// // body.appendChild(h1);
// let header = document.createElement("header");
// let html = `
//   <header>
//     <h1>${titrePage}</h1>
//   </header>
// `;
// body.innerHTML = html;

// let myH1 = document.createElement("h1");
// myH1.innerText = "blabla";
// body.appendChild(myH1);
// console.log(myH1);
// let nouvelElement = document.createElement("div");

// // Récupérer un élément parent existant
// let parentElement = document.getElementById("conteneur");
// // Ajouter le nouvel élément au parent
// parentElement.appendChild(nouvelElement);

// ADDEVENTLISTENER
let monBouton = document.getElementById("monBouton");
// monBouton.addEventListener("click", function () {
//   console.log("Vous avez cliqué sur le bouton");
// });
// OU AVEC FONCTION FLECHEE
monBouton.addEventListener("click", () => {
  console.log("Vous avez cliqué sur le bouton");
});

let bouton1 = document.getElementById("bouton1");
bouton1.addEventListener("click", () => {
  console.log("J'ai cliqué sur bouton1");
});

let bouton2 = document.getElementById("bouton2");
bouton2.addEventListener("click", () => {
  console.log("J'ai cliqué sur bouton2");
});

// ADDEVENTLISTENER ET EVENT
let listBoutons = document.querySelectorAll("#bouton3, #bouton4");
for (let i = 0; i < listBoutons.length; i++) {
  let boutonActuel = listBoutons[i];
  console.log(boutonActuel);
  // ajouter un gestionnaire d'événement pour le clic sur le bouton
  boutonActuel.addEventListener("click", (event) => {
    monBuut = event.target;
    console.log(`J'ai cliqué sur le bouton : ${monBuut.id}`);
    // avec event.target : affiche l'élément HTML qui a déclenché l'évenement
    console.log("Elemnt déclencheur : ", event.target);
    // avec event.key : sur quelles touches j'ai appuyée
    console.log("touche sur laquelle j'ai appuyée : ", event.key);
    // avec event.clientX et event.Y :
    // coordonnées de la souris au moment du clic
    console.log("coordonnée X de la souris : ", event.clientX);
    console.log("coordonnée Y  de la souris : ", event.clientY);
  });
}
