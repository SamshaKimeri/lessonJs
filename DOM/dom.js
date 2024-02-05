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
let titrePage = "le titre de ma page";
// let h1 = document.createElement("h1");
// h1.innerText = titrePage;
let body = querySelector("body");
// body.appendChild(h1);

let html = `
  <header>
    <h1>${titrePage}</h1>
  </header>
`;
body.innerHtml.html;

let nouvelElement = document.createElement("div");
// Récupérer un élément parent existant
let parentElement = document.getElementById("conteneur");
// Ajouter le nouvel élément au parent
parentElement.appendChild(nouvelElement);
