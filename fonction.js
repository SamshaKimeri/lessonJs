// Aditionner
// function additionner(a, b) {
//   let somme = a + b;
//   return somme;
// }
// // Appel de la function additionner
// let resultatAddition = additionner(5, 3);
// console.log(resultatAddition);

// multiplier
// function multiplier(x, y) {
//   let totalDeMutliplier = x * y;
//   return totalDeMutliplier;
// }
// let resultatMultiplier = multiplier(5, 3);
// console.log(resultatMultiplier);

// Moyenne
// function calculerMoyenne(note1, note2, note3) {
//   let moyenneDesTrois = (note1 + note2 + note3) / 3;
//   console.log(`La moyenne des trois notes est : ${moyenneDesTrois}`);
//   return moyenneDesTrois;
// }
// let resultatMoyenne = calculerMoyenne(1, 10, 10);
// console.log(resultatMoyenne);
// console.log("caca " + calculerMoyenne(1, 10, 10));

// Aire d'un rectangle
// function aireRectangle(longueur, largeur) {
//   let calculAire = longueur * largeur;
//   return calculAire;
// }
// let besoinAireRectangle = aireRectangle(2, 10);
// console.log(besoinAireRectangle);

// function retourneMessageScore(score, nombreQuestions) {
//   let message = `Votre score est de  ${score} sur ${nombreQuestions}`;
//   return message;
// }
// let nouveauMessage = retourneMessageScore(5, 10);
// console.log(nouveauMessage);

// function retourneMessageScore(score, nombreMotMax) {
//   let message = `Le score est de ${score} sur ${nombreMotMax}`;
//   return message;
// }
// let retourFonction = retourneMessageScore(1, 3);
// console.log(retourFonction);

// let monNombre = 1;
// // monNombre ert une variableglobale,
// // elle est déclarée en dehors du bloc de code
// function afficheUnNombre() {
//   let monNombreLocal = 2;
//   // monNombreLocal et une variable locale,
//   // elle est déclarée uniquement DANS une function
//   console.log("Interieur de la fonction : ");
//   console.log(monNombre); // monNombre est accessible
//   console.log(monNombreLocal); //  monNombreLocal est accessible
// }
// afficheUnNombre();
// console.log("Extérieur de la function");
// console.log(monNombre); // monNombre est accessible
// console.log(monNombreLocal); //  monNombreLocal est inaccessible

// Convertir celsus en fahrenheit
// function convertirCelsus(celsus) {
//   let convertirTemperature = (celsus * 9) / 5 + 32;
//   console.log(
//     `${celsus} degrés celsus correspondant à ${convertirTemperature}`
//   );
//   return convertirTemperature;
// }
// let temperatureFarenit = convertirCelsus(10);

// calculer la somme des carrés de a et b
// function sommeDesCarres(a, b) {
//   somme = a ** 2 + b ** 2;
//   console.log(`La somme des carrés de ${a} et de ${b} est égal à ${somme}`);
// }
// let totalCarres = sommeDesCarres(4, 6);

// Afficher si nombre est pair ou impair
// function verifierParite(nombre) {
//   if (nombre % 2 === 0) {
//     console.log(`${nombre} est pair`);
//   } else {
//     console.log(`${nombre} est impair`);
//   }
// }
// let pairOuImpair = verifierParite(10);

// Calculer la puissance
// function calculerPuissance(base, exposant) {
//   let puissance = Math.pow(base, exposant);
//   console.log(
//     `${base} élevé à la puissance ${exposant} est égal à : ${puissance}`
//   );
// }
// calculerPuissance(3, 7);

function calculerMoyenne(nombre1, nombre2, nombre3) {
  let moyenne = (nombre1 + nombre2 + nombre3) / 3;
  console.log(
    `La moyenne de ${nombre1} , ${nombre2} et  ${nombre3} est ${moyenne}`
  );
  console.log(
    `La moyenne de ${nombre1} , ${nombre2} et  ${nombre3} est ${parseInt(
      moyenne
    )}`
  );
}
calculerMoyenne(6, 2, 3);
