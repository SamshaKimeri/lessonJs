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

// Calculer la surface d'un rectangle
// function calculerSurfaceRectangle(longueur, largeur) {
// let surface = longueur * largeur;
// return surface;
//   }
//   let surface1 = calculerSurfaceRectangle(5, 8);
//   console.log(surface1);
//   let surface2 = calculerSurfaceRectangle(10, 3);
//   console.log(surface2);

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
// monNombre ert une variableglobale,
// elle est déclarée en dehors du bloc de code
// function afficheUnNombre() {
//   let monNombreLocal = 2;
// monNombreLocal et une variable locale,
// elle est déclarée uniquement DANS une function
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

// Convertir des celsus en fahrenheit
// function convertirCelsusEnFahreneit(celsus) {
//   let temperatureCelsus = (celsus * 9) / 5 + 32;
//   return temperatureCelsus;
// }
// let celsus1 = convertirCelsusEnFahreneit(10);
// console.log(celsus1);

// Autre facon de celsus en fahrenheit
// Déclaration de la fonction
// function convertirCelsiusEnFahrenheit(tempCelsius) {
// Conversion de Celsius en Fahrenheit
//   let tempFahrenheit = (tempCelsius * 9) / 5 + 32;
// Retourner la température convertie en Fahrenheit
//   return tempFahrenheit;
// }
// Appel de la fonction avec différentes valeurs
// let temp1Celsius = 25;
// let temp1Fahrenheit = convertirCelsiusEnFahrenheit(temp1Celsius);
// console.log(
//   temp1Celsius +
//     " degrés Celsius équivalent à " +
//     temp1Fahrenheit +
//     " degrés Fahrenheit."
// );

// let temp2Celsius = 0;
// let temp2Fahrenheit = convertirCelsiusEnFahrenheit(temp2Celsius);
// console.log(
//   temp2Celsius +
//     " degrés Celsius équivalent à " +
//     temp2Fahrenheit +
//     " degrés Fahrenheit."
// );
// let temp3Celsius = -10;
// let temp3Fahrenheit = convertirCelsiusEnFahrenheit(temp3Celsius);
// console.log(
//   temp3Celsius +
//     " degrés Celsius équivalent à " +
//     temp3Fahrenheit +
//     " degrés Fahrenheit."
// );

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

// Calculer la moyenne
// function calculerMoyenne(nombre1, nombre2, nombre3) {
//   let moyenne = (nombre1 + nombre2 + nombre3) / 3;
//   console.log(
//     `La moyenne de ${nombre1} , ${nombre2} et  ${nombre3} est ${moyenne}`
//   );
//   console.log(
//     `La moyenne de ${nombre1} , ${nombre2} et  ${nombre3} est ${parseInt(
//       moyenne
//     )}`
//   );
// }
// calculerMoyenne(6, 2, 3);

// l'utilisateur est en ligne
// let online = true;
// let message = "";

// if (online) {
//   message = "Utilisateur en ligne !";
// } else {
//   message = "Utilisateur hors ligne !";
// }
// console.log(message);

// Pour autorisé l'acces
// let motDePasse = "Multipass";
// let message = "";

// if (motDePasse !== "Multipass") {
//   message = "Accès non autorisé";
// } else {
//   message = "Accès autorisé";
// }
// console.log(message);

// let monNombre = 1;
// monNombre est une variable globale, car elle est
// déclarée en dehors d'un bloc de code
// function afficheUnNombre() {
//   let monNombreLocal = 2;
// monNombreLocal est une variable locale, car elle
// est déclarée uniquement au sein d'une fonction
//   console.log("Interieur de la fonction : ");
//   console.log(monNombre); // monNombre est accessible
//   console.log(monNombreLocal); // monNombreLocal est accessible
// }
// afficheUnNombre();
// console.log("Extérieur de la fontion :");
// console.log(monNombre); // monNombre est accessible
// console.log(monNombreLocal); // monNombreLocal n'est pas accessible

// !!!!!!! function et FOR !!!!
// Calculer la somme des chiffres en convertissant
// le nombre en chaine de caractère
// function calculerSommeChiffres(nombre) {
//     Convertir le nombre en chaine de caractères
//   let chiffres = nombre.toString();
// Initialiser la somme
//   let somme = 0;
//   for (let i = 0; i < chiffres.length; i++) {
//     somme += parseInt(chiffres[i]);
//   }
//   Affichage de la somme
//   console.log(nombre + " " + somme);
// }
// Appel de la fonction avec une valeur
// calculerSommeChiffres(143);

// Créer une table de multiplication avec tableau
// function afficheTableMultiplication(nombre) {
//   let tableMultiplication = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   for (let i = 0; i < tableMultiplication.length; i++) {
//     tableMultiplication[i] *= nombre;
//   }
//   console.log(tableMultiplication);
// }
// afficheTableMultiplication(5);

// Autre possiblité pour créer une table de multiplication
// / Déclaration de la fonction
// function afficherTableMultiplication(nombre) {
//   console.log("Table de multiplication de " + nombre + ":");
// Initialisation du tableau pour stocker les résultats
//   let resultatMultiplications = [];
// Boucle pour itérer de 1 à 10
//   for (let i = 1; i <= 10; i++) {
// Calcul de la multiplication et ajout au tableau
// resultatMultiplications.push(nombre * i);
//   }
// Affichage du tableau de résultats
//   for (let i = 1; i <= 10; i++) {
// console.log(nombre + " x " + i + " = " + resultatMultiplications[i - 1]);
//   }
// }
// Appel de la fonction avec une valeur
// afficherTableMultiplication(5);

// Créer une table de muliplication
// Declarer la fonction
// function afficheTableMultiplication(nombre) {
//   console.log(`table de multiplication de ${nombre} : `);
//  boucle pour itérer de 1 à 10
//   for (let i = 0; i <= 10; i++) {
// Affichage de la multiplication
// console.log(`${nombre}  *  ${i}  =  ${nombre * i}`);
//   }
// }
// Appel de la fonction avec une valeur
// afficheTableMultiplication(5);
