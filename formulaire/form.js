// les cases à cocher
let baliseAccepter = document.getElementById("accepter");
let accepter = baliseAccepter.checked;
console.log(accepter);
// récupérer les valeurs des boutons radio
let baliseCouleur = document.querySelectorAll('input[name="couleur"]');
let couleur = "";
for (let i = 0; i < baliseCouleur.length; i++) {
  if (baliseCouleur[i].checked) {
    couleur = baliseCouleur[i].value;
    break;
  }
}
console.log(couleur);

// form exemple
let nom = document.getElementById("nom");
console.log(nom.value);

let conditions = document.getElementById("conditions");
console.log(conditions.checked);

let listeBtnRadio = document.querySelectorAll('input[name="residence"]');
for (let i = 0; i < listeBtnRadio.length; i++) {
  if (listeBtnRadio[i].checked) {
    console.log(listeBtnRadio[i].value);
  }
}

nom.addEventListener("change", () => {
  console.log(nom.value);
});
