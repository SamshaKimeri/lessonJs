// exo1
// function multiplier(numberOne, numberTwo) {
//   return numberOne * numberTwo;
// }
let buttonEx1 = document.getElementById("buttonEx1");
let resultEx1 = document.getElementById("resultEx1");
buttonEx1.addEventListener("click", () => {
  let numberOne = document.getElementById("numberOne").value;
  let numberTwo = document.getElementById("numberTwo").value;
  let total = numberOne * numberTwo;
  resultEx1.textContent = `Le total de ${numberOne} * ${numberTwo} est :  ${total}`;
  resultEx1.style.backgroundColor = "red";
  resultEx1.style.width = "500px";
  resultEx1.style.textAlign = "center";
});

// exo2
let paraEx2 = document.getElementById("paraEx2");
let buttonEx2 = document.getElementById("buttonEx2");
buttonEx2.addEventListener("click", () => {
  paraEx2.classList.toggle("visibleEx2");
});

// exo3
let btnEx3 = document.getElementById("btnEx3");
btnEx3.addEventListener("click", () => {
  let colorEx3 = document.getElementById("colorEx3").value;
  document.body.style.backgroundColor = colorEx3;
});
let coloEx3 = document
  .getElementById("coloEx3")
  .addEventListener("click", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });

// exo4
let imgEx4 = document.getElementById("imgEx4");
let btnEx4 = document.getElementById("btnEx4");
btnEx4 = addEventListener("click", () => {
  let urlEx4 = document.getElementById("urlEx4").value;
  let newImgEx4 = document.createElement("img");
  newImgEx4.src = urlEx4;
  imgEx4.appendChild(newImgEx4);
});

// exo5
let resultEx5 = document.getElementById("resultEx5");
let btnEx5 = document.getElementById("btnEx5");
btnEx5 = addEventListener("click", () => {
  let numberEx5 = document.getElementById("numberEx5").value;
  let modulo = numberEx5 % 5;

  resultEx5.textContent = `Si l'on divise ${numberEx5} par 5, le reste est de ${modulo}`;
});

// exo6
function calculAgeEnJour(nombreEnAnnees) {
  return nombreEnAnnees * 365;
}
let ageEx6 = document.getElementById("ageEx6");
let btnEx6 = document.getElementById("btnEx6");
btnEx6 = addEventListener("click", () => {
  let nombreEnAnnees = document.getElementById("numberEx6").value;
  let nombreEnJour = calculAgeEnJour(nombreEnAnnees);
  ageEx6.textContent = `Vous avez vécu ${nombreEnJour} jours`;
});

// Exo7
let jourReste7 = 0;
let ageEnJour7 = 0;
let ageEnJour77 = 0;
function calculAgeEnJour7() {
  let numberEx7 = document.getElementById("numberEx7").value;
  let numberEx77 = document.getElementById("numberEx77").value;

  if (numberEx77 < numberEx7) {
    alert("Veuillez entrer un autre nombre");
  } else {
    ageEnJour7 = numberEx7 * 365;
    ageEnJour77 = numberEx77 * 365;
    jourReste7 = ageEnJour77 - ageEnJour7;
  }
  let ageEx7 = document.getElementById("ageEx7");
  ageEx7.textContent = `Vous avez vécu ${ageEnJour7} jours.Il y a encore ${jourReste7} jours avant vos ${numberEx77} ans`;
}
let btnEx7 = document.getElementById("btnEx7");
btnEx7.addEventListener("click", calculAgeEnJour7);

// Exo8
let btn8 = document.getElementById("btn8");
let smiley8 = document.getElementById("smiley8");

btn8.addEventListener("click", function () {
  let confirme = confirm("Voulez-vous confirmer votre choix ?");
  if (confirme) {
    // alert("supprimé");
    smiley8.innerHTML = `<img src="chatsouriant.png" >`;
  } else {
    // alert("ok");
    smiley8.innerHTML = `<img src="chattriste.png" >`;
  }
});

// Exo9
let ageEx9 = document.getElementById("ageEx9");
let btnEx9 = document.getElementById("btnEx9");
btnEx9.addEventListener("click", () => {
  let numberEx9 = document.getElementById("numberEx9").value;
  let votreNombre = "";

  switch (numberEx9) {
    case "0":
      votreNombre = "zéro";
      break;
    case "1":
      votreNombre = "un";
      break;
    case "2":
      votreNombre = "deux";
      break;
    case "3":
      votreNombre = "trois";
      break;
    case "4":
      votreNombre = "quatre";
      break;
    case "5":
      votreNombre = "cinq";
      break;
    default:
      alert("Veuillez saisir un nombre valide");
      break;
  }
  ageEx9.textContent = `Le nombre que vous avez choisit est :  ${votreNombre} `;
});

// Exo9 bis
let btnValider = document.getElementById("valider9");
let inputNombre = document.getElementById("nombre9");
let divResultat = document.getElementById("resultat9");
btnValider.addEventListener("click", () => {
  let nombre9 = parseInt(inputNombre.value);
  if (nombre9 >= 0 && nombre9 <= 5) {
    let nombresEnLettres = ["zéro", "un", "deux", "trois", "quatre", "cinq"];
    divResultat.textContent = `Vous avez choisi le nombre ${nombresEnLettres[nombre9]}`;
  } else {
    alert("Veuillez entrer un nombre entre 0 et 5");
  }
});

// Exo10
let ul10 = document.getElementById("ul10");
let btnEx10 = document.getElementById("btnEx10");
btnEx10.addEventListener("click", () => {
  let textEx10 = document.getElementById("textEx10").value;
  if (textEx10 !== "") {
    let list10 = document.createElement("li");
    list10.textContent = `${textEx10}`;
    ul10.appendChild(list10);
    document.getElementById("textEx10").value = "";
  }
});

// Exo11 et 12
let essai = 0;
let nombreAleatoire = Math.floor(Math.random() * 10) + 1;
let resultatEx11 = document.getElementById("resultatEx11");
let btnEx11 = document.getElementById("btnEx11");
btnEx11.addEventListener("click", () => {
  essai++;
  console.log(essai);
  let numberEx11 = document.getElementById("numberEx11").value;
  console.log(nombreAleatoire);
  if (nombreAleatoire > numberEx11) {
    resultatEx11.textContent = "trop petit";
  } else if (nombreAleatoire < numberEx11) {
    resultatEx11.textContent = "trop grand";
  } else {
    resultatEx11.textContent = "gagné";
    essai = 0;
    nombreAleatoire = Math.floor(Math.random() * 10) + 1;
    document.getElementById("numberEx11").value = 0;
  }
  if (essai === 3) {
    alert("perdu");
    console.log(essai);
    console.log(nombreAleatoire);
    essai = 0;
    nombreAleatoire = Math.floor(Math.random() * 10) + 1;
    document.getElementById("numberEx11").value = 0;
  }
});

// exo13
let btn13 = document.getElementById("btn13");
let smiley13 = document.getElementById("smiley13");
let window13 = document.getElementById("window13");

btn13.addEventListener("click", () => {
  window13.style.display = "block";
});

let window13BtnOk = document.getElementById("window13BtnOk");
window13BtnOk.addEventListener("click", () => {
  smiley13.innerHTML = `<img src="chatsouriant.png" >`;
  window13.style.display = "none";
});

let window13BtnNok = document.getElementById("window13BtnNok");
window13BtnNok.addEventListener("click", () => {
  smiley13.innerHTML = `<img src="chattriste.png" >`;
  window13.style.display = "none";
});

// Exo14
let books = [
  {
    title: "CSS: The Definitive Guide",
    author: "Eric Meyer",
    image: "https://covers.oreillystatic.com/images/0636920012726/lrg.jpg",
    type: "css",
  },
  {
    title: "CSS Development with CSS3",
    author: "Zachary Kingston",
    image: "https://covers.oreillystatic.com/images/0636920057970/lrg.jpg",
    type: "css",
  },
  {
    title: "You Don't Know JS: Up & Going",
    author: "Kyle Simpson",
    image: "https://covers.oreillystatic.com/images/0636920039303/lrg.jpg",
    type: "js",
  },
  {
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    image: "https://covers.oreillystatic.com/images/0636920033141/lrg.jpg",
    type: "js",
  },
  {
    title: "Modern JavaScript Develop and Design",
    author: "Ullman Larry",
    image:
      "https://www.booktopia.com.au/http_coversbooktopiacomau/big/9780321812520/modern-javascript.jpg",
    type: "js",
  },
];
let listJs = document.getElementById("listJs");
let btnJs = document.getElementById("btnJs");
btnJs.addEventListener("click", () => {
  let js = books.filter((type) => type.type === "js");
  console.log(js);
  let listeNonOrdonnee = document.createElement("ul");
  js.forEach(function (type) {
    let listeElement = document.createElement("li");
    listeElement.textContent = type.title;
    listeNonOrdonnee.appendChild(listeElement);
  });
  listJs.innerHTML = "";
  listJs.appendChild(listeNonOrdonnee);
});
let listCss = document.getElementById("listCss");
let btnCss = document.getElementById("btnCss");
btnCss.addEventListener("click", () => {
  let css = books.filter((type) => type.type === "css");
  console.log(css);
  let listeNonOrdonnee2 = document.createElement("ul");
  css.forEach(function (type) {
    let listeElement2 = document.createElement("li");
    listeElement2.textContent = type.title;
    listeNonOrdonnee2.appendChild(listeElement2);
  });
  listCss.innerHTML = "";
  listCss.appendChild(listeNonOrdonnee2);
});
