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

// Exercice1
document.addEventListener("DOMContentLoaded", () => {
  const temperatureInput = document.getElementById("temperature");
  const celsusRadio = document.querySelector('input[value="celsus"]');
  const fahrenheitRadio = document.querySelector('input[value="fahrenheit"]');
  const resultDiv = document.getElementById("result1");

  function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    if (celsusRadio.checked) {
      const fahrenheit = (temperature * 9) / 5 + 32;
      resultDiv.textContent = `${temperature} Celsius équivaut à ${fahrenheit.toFixed(
        2
      )} fahreneit`;
    } else {
      const celsuis = ((temperature - 32) * 5) / 9;
      resultDiv.textContent = `${temperature} fahrenheit équivaut à ${celsuis.toFixed(
        2
      )} celsuis`;
    }
  }
  celsusRadio.addEventListener("change", convertTemperature);
  fahrenheitRadio.addEventListener("change", convertTemperature);
});

// exercice 2
function calculerPourcentage() {
  let valeurTotale = document.getElementById("valeurTotale").value;
  let pourcentage = document.getElementById("pourcentage").value;
  let resultat2 = document.getElementById("resultat2");
  let resultat = (valeurTotale * pourcentage) / 100;
  resultat2.textContent = `le total est : ${resultat}`;
}
valeurTotale.addEventListener("change", calculerPourcentage);
pourcentage.addEventListener("change", calculerPourcentage);

// exercice 3
document.addEventListener("DOMContentLoaded", () => {
  let unitPrice = document.getElementById("unitPrice");
  let quantity = document.getElementById("quantity");
  let totalPrice = document.getElementById("totalPrice");

  function calculate() {
    let unitPriceValue = parseFloat(unitPrice.value);
    let quantityValue = parseFloat(quantity.value);

    let totalPrice2 = unitPriceValue * quantityValue;
    totalPrice.textContent = `Le prix total est de ${totalPrice2} €`;
  }
  unitPrice.addEventListener("change", calculate);
  quantity.addEventListener("change", calculate);
});
