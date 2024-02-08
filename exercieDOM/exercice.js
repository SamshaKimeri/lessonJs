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
