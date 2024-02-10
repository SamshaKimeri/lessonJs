// exo1
function multiplier(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
let buttonEx1 = document.getElementById("buttonEx1");
let resultEx1 = document.getElementById("resultEx1");
buttonEx1.addEventListener("click", () => {
  let numberOne = document.getElementById("numberOne").value;
  let numberTwo = document.getElementById("numberTwo").value;
  let total = multiplier(numberOne, numberTwo);
  resultEx1.textContent = `Le total de ${numberOne} * ${numberTwo} est :  ${total}`;
});

// exo2
