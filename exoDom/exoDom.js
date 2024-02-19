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
// function age() {
//   let ageEnJour = numberEx6 * 365;
//   return ageEnJour;
// }
let ageEx6 = document.getElementById("ageEx6");
let btnEx6 = document.getElementById("btnEx6");
btnEx6 = addEventListener("click", () => {
  let numberEx6 = document.getElementById("numberEx6").value;
  let ageEnJour = numberEx6 * 365;
  ageEx6.textContent = `Vous avez vécu ${ageEnJour} jours`;
});
