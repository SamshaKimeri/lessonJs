let fruits = ["pomme", "poire", "banane"];
// fruits.forEach((fruit) => console.log(fruit));
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// Somme du tableau
let tableau = [1, 2, 3, 4];
let somme = 0;
tableau.forEach(function (number) {
  somme += number;
  console.log(`la somme des nombres est ${somme}`);
});

// Afficher le nom et la position
let fruis = ["pomme", "banane", "orange", "kiwi", "fraise"];
fruis.forEach(function (frui, index) {
  console.log("Position " + index + " : " + frui);
});

// Calculer la somme des nombres pairs
let nombres = [1, 2, 3, 4, 5, 6];
let sommeP = 0;
nombres.forEach(function (nombre) {
  if (nombre % 2 === 0) {
    sommeP += nombre;
  }
});
console.log(sommeP);

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => console.log(number * 2));
