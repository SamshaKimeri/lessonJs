// Additionner 2 nombres utilisation de return
// function additionner(nombre1, nombre2) {
//   let somme = nombre1 + nombre2;
//   return somme;
// }
// let calculSomme = additionner(10, 20);
// console.log(calculSomme);

// Trouver le carré d'un nombre
// function carre(nombre) {
//   let carreNombre = nombre * nombre;
//   return carreNombre;
// }
// let nombreAuCarre = carre(10);
// console.log(nombreAuCarre);

// Concaténer des prénoms
// function concatenerPrenoms(prenom1, prenom2) {
//   let chaine = prenom1 + "et" + prenom2 + "sont amis.";
//   return chaine;
// }
// let prenomChaine = concatenerPrenoms(" alphonse ", " daudet ");
// console.log(prenomChaine);

// Vérifier si une persone est majeur ou si elle n'est pas majeur
// avec IF et TRUE et FALSE
// function estMajeur(age) {
//   if (age >= 18) {
// return true;
//   } else {
// return false;
//   }
// }
// let agePersonne1 = estMajeur(22);
// console.log("La personne est majeure : " + agePersonne1);
// let agePersonne2 = estMajeur(15);
// console.log("La personne est majeure : " + agePersonne2);

// Calculer la moyenne
// function calculerMoyenne(note1, note2, note3) {
//   let moyenne = (note1 + note2 + note3) / 3;
//   return moyenne;
// }
// let noteMoyenne = calculerMoyenne(10, 10, 10);
// console.log(noteMoyenne);

// function calculMoyenne(note1, note2, note3) {
//   let moyenne = (note1 + note2 + note3) / 3;
//   console.log(moyenne);
// }
// calculMoyenne(10, 2, 2);

// function convertirCelsiusEnFahrenheit(celsus) {
//   let fahrenheit = (celsus * 9) / 5 + 32;
//   return fahrenheit;
// }
// let temperatureFahrenheit = convertirCelsiusEnFahrenheit(10);
// console.log(temperatureFahrenheit);

// function convertirCelsusEnFahreneit(temperatureCelsus) {
//   let temperatureFahrenheit = (9 * temperatureCelsus) / 5 + 32;
//   console.log(temperatureFahrenheit);
// }
// convertirCelsusEnFahreneit(10);

// Trouver le nombre le plus grand
// function trouverPlusGrand(nombre1, nombre2) {
//   if (nombre1 > nombre2) {
// return nombre1;
//   } else {
// return nombre2;
//   }
// }
// let nombreGand1 = trouverPlusGrand(30, 20);
// console.log(nombreGand1);
// let nombreGand = trouverPlusGrand(10, 20);
// console.log(nombreGand);

// function estPalindrome(mot) {
//   let inverseMot = mot.split("").reverse().join("");
//   console.log(inverseMot);
//   if (mot === inverseMot) {
// console.log("true");
//   } else {
// console.log("false");
//   }
// }
//
// estPalindrome("ishka");
// estPalindrome("radar");

// function vrifieParité(nombre) {
//   if (nombre % 2 === 0) {
//     console.log(`Le ${nombre} est pair`);
//   } else {
//     console.log(`Le ${nombre} est impair`);
//   }
// }
// vrifieParité(10);

// Calculer une factorielle
// function clculerFactorielle(nombre) {
// Verification pour le cas où le nombre est 0 à 1
// la factorielle est 1 dans ce cas
//   if (nombre === 0 || nombre === 1) {
//     console.log(`La factorielle de ${nombre} et 1 `);
//   } else {
//     let factorielle = 1;
// Calcul de la factorielle
//     for (let i = 2; i <= nombre; i++) {
//       factorielle *= i;
//     }
// Affichage du résultat
//     console.log(`La factorielle de ${nombre} est ${factorielle}`);
//   }
// }
// Appel de la fonction avec une valeur
// clculerFactorielle(5);

// Faire la somme des nombres pairs
// Declarer une fonction
// function sommeNombresPairs(limite) {
// let somme = 0;
// for (let i = 1; i <= limite; i++) {
// if (i % 2 === 0) {
// somme += i;
// }
// }
// console.log(`La somme des nombres pairs jusqu'à  ${limite} est : ${somme}`);
// }
// sommeNombresPairs(10);

// !!! Créer un compte à rebours décroissant avec FOR !!!
// function compteARebours(nombre) {
// boucle pour le compte à rebours
// for (let i = nombre; i >= 0; i--) {
// if (i === 0) {
// message lorsque le compte à rebours atteint 0
// alert("fin du compte à rebours");
// } else {
// Affiche le nombre actuel dans le compte à rebours
// alert(i);
// }
// }
// }
// compteARebours(5);

// rechercher le nombre le plus graNd avec ELSE
// function trouverPlusGrand(nombre1, nombre2) {
// if (nombre1 > nombre2) {
// console.log(`${nombre1} est plus grand.`);
// } else if (nombre2 > nombre1) {
// console.log(`${nombre2} est le plus grand`);
// } else {
// console.log("Les deux sont égaux");
// }
// }
// trouverPlusGrand(10, 10);
// trouverPlusGrand(10, 12);
// trouverPlusGrand(12, 10);

// Verifier la validité d'un triangle avec IF
// Déclaration de la fonction
// function verifierTriangle(cote1, cote2, cote3) {
// if (cote1 + cote2 > cote3 && cote1 + cote3 > cote2 && cote2 + cote3 > cote1) {
// console.log("Le triangle est valide.");
// } else {
// console.log("Le triangle n'est pas valide.");
// }
// }
// Appels de la fonction avec différentes combinaisons de côtés
// verifierTriangle(3, 4, 5); // Triangle valide (côtés 3, 4, 5 forment un triangle rectangle)
// verifierTriangle(2, 8, 5); // Triangle n'est pas valide (la somme de deux côtés n'est pas supérieure au troisième côté)
// verifierTriangle(6, 6, 6); // Triangle valide (côtés 6, 6, 6 forment un triangle équilatéral)

// !!! avec FOR et IF
// compter le nombre d'occurences d'un caractère dans
// une chaine de caractère avec un compteur pour chaque caractère
// qui ont été trouvé (identique) dans la chaine
// function compteOccurences(chaine, caractere) {
//Initialiser le compteur
// let compteur = 0;
// Boucle pour parcourir chaque caractère de la chaîne
// for (let i = 0; i < chaine.length; i++) {
// on compare la chaine de caractère et le caractère
// if (chaine[i] === caractere) {
// on incrémente le compteur si le caractère est trouvé
// compteur++;
// }
// }
// console.log(
// `Le caractère "${caractere}" apparaît  ${compteur} fois dans la chaîne.`
// );
// }
// compteOccurences("programmation", "t");
// compteOccurences("javascript", "a");
// compteOccurences("bonjour", "z");

// function inverserchaine(chaine) {
// on initialise une variable vide, elle sera utilisée pour stocker la version
// inversée de la chaine
// let chaineInverse = "";
// la boucle invers l'ordre des caractères
// for (let i = chaine.length - 1; i >= 0; i--) {
// a chaque itération, on ajoute le caractère au début
// de la variable 'chaineInverse'.Cela crée une version inversée de la chaine
// chaineInverse += chaine[i];
// }
// console.log(chaineInverse);
// }
// inverserchaine("ishka");

// function estPalindrome(chaine) {
// Convertir la chaîne en minuscules pour une comparaison insensible à la casse
//   chaine = chaine.toLowerCase();
// Parcourir la moitié de la chaîne
//   for (let i = 0; i < Math.floor(chaine.length / 2); i++) {
// Comparer le caractère actuel avec son homologue du côté opposé de la chaîne
// if (chaine[i] !== chaine[chaine.length - 1 - i]) {
// Si les caractères ne correspondent pas, la chaîne n'est pas un palindrome
//   return false;
// }
//   }
// Si aucune différence n'est trouvée, la chaîne est un palindrome
//   return true;
// }
// Exemples d'utilisation
// console.log(estPalindrome("radar")); // Affichera true
// console.log(estPalindrome("hello")); // Affichera false
// console.log(estPalindrome("level")); // Affichera true

// Utilisation de reverse() pour inverser une chaîne
// function inverserChaineAvecReverse(chaine) {
// Convertir la chaîne en tableau, inverser, puis reconvertir en chaîne
// let chaineInverse = chaine.split('').reverse().join('');
// Affichage de la chaîne inversée dans la console
// console.log("Chaîne inversée : " + chaineInverse);
// }
// Appels de la fonction avec différentes chaînes
// inverserChaineAvecReverse("Bonjour"); // Affichera "Chaîne inversée : ruojnoB"
// inverserChaineAvecReverse("JavaScript"); // Affichera "Chaîne inversée : tpircSavaJ"
// inverserChaineAvecReverse("12345"); // Affichera "Chaîne inversée : 54321"
//
// function estPalindrme(mot) {
//   let inverseMot = mot.split("").reverse().join("");
//   console.log(inverseMot);
//   if (mot === inverseMot) {
//     console.log("ok");
//   } else {
//     console.log("pasok");
//   }
// }
// estPalindrme("ishka");
// estPalindrme("radar");

// Denombrer les mots avec SPLIT
// function denombrerMot(phrase) {
// let phraseTableau = phrase.split(" ");
// console.log(phraseTableau);
// comptez le nombre de mot dans la phrase avec LENGTH
// let longueurTableau = phraseTableau.length;
// console.log(longueurTableau);
// }
// denombrerMot("le paradis est ailleurs");

// Rechercher le mot le plus long avec SPLIT / FOR / IF / REPLACE / TRIM
// Déclaration de la fonction
// function plusLongMot(phrase) {
// Utiliser split pour diviser la phrase en un tableau de mots
// let mots = phrase.split(" ");
// console.log(mots);
// Initialiser le plus long mot avec le premier mot de la phrase
// let plusLong = mots[0].replace(/[.,;]/g, ""); // Supprimer les ponctuations potentielles
// console.log(plusLong);
// Parcourir les mots pour trouver le plus long
// for (let i = 1; i < mots.length; i++) {
// Utiliser trim() pour supprimer les éventuels espaces avant ou après le mot
// let motCourant = mots[i].replace(/[.,;]/g, "").trim(); // Supprimer les ponctuations potentielles
// console.log(motCourant);
// if (motCourant.length > plusLong.length) {
// plusLong = motCourant;
// }
// }
// Afficher le résultat dans la console
// console.log("Le plus long mot dans la phrase est : " + plusLong);
// }
// Utilisation de la fonction avec différentes phrases
// plusLongMot("Bonjour, comment ça va ?"); // Affichera "Le plus long mot dans la phrase est : Bonjour"
// plusLongMot("JavaScript est un langage de programmation"); // Affichera "Le plus long mot dans la phrase est : programmation"
// plusLongMot("Ceci est une phrase."); // Affichera "Le plus long mot dans la phrase est : phrase"

// Remplacer des lettres avec REPLACE ET NEWREG (VOIR leçon à index.html)
// Déclaration de la fonction
// function remplacerLettres(chaine, lettre1, lettre2) {
// Utiliser replace pour remplacer toutes les occurrences de lettre1 par lettre2
//   let nouvelleChaine = chaine.replace(new RegExp(lettre1, "g"), lettre2);
// Afficher le résultat dans la console
//   console.log("Nouvelle chaîne : " + nouvelleChaine);
// }
// Utilisation de la fonction avec différentes chaînes et lettres
// remplacerLettres("Bonjour, monde !", "o", "X"); // Affichera "Nouvelle chaîne : BXnjour, mXnde !"
// remplacerLettres("JavaScript est super", "e", "Y"); // Affichera "Nouvelle chaîne : JavaScript est supYr"
// remplacerLettres("Mississippi", "i", "Z"); // Affichera "Nouvelle chaîne : MZssZssZppZ"
// remplacerLettres("toto fait popo", "o", "i");

// Remplacer les caratères spéciaux avec REPLACE
// VOIR LECON à index.html pour les REGEXP
// Déclaration de la fonction
// function encoderCaracteresSpeciaux(chaine) {
// Remplacer les espaces grace à / / par le caractère underscore
//   let nouvelleChaine = chaine.replace(/ /g, "_");
// Remplacer les accents aigus par la lettre "e"
//   nouvelleChaine = nouvelleChaine.replace(new RegExp("[éèê]", "g"), "e");
// Remplacer les caractères non alphabétiques par une chaîne vide
//   nouvelleChaine = nouvelleChaine.replace(new RegExp("[^a-zA-Z]", "g"), "");
// Afficher le résultat dans la console
//   console.log("Nouvelle chaîne : " + nouvelleChaine);
// }
// Utilisation de la fonction avec différentes chaînes
// encoderCaracteresSpeciaux("Bonjour, comment ça va ?"); // Affichera "Nouvelle chaîne : Bonjour_comment_ca_va"
// encoderCaracteresSpeciaux("C'est l'été!"); // Affichera "Nouvelle chaîne : Cestlete"
// encoderCaracteresSpeciaux("123 $%^&*"); // Affichera "Nouvelle chaîne : "

// Utilisation simple de CHARAT
// function compterVoyelles(chaine) {
// for (let i = 0; i < chaine.length; i++) {
// console.log(chaine.charAt(i));
// }
// }
// compterVoyelles("palipolu");

// utilisation simple de MATCH
// let texte = "Hello World!";
// let correspondances = texte.match(/[a-z]/gi);
// console.log(correspondances);
// Résultat : ['H', 'e', 'l', 'l', 'o', 'o', 'r', 'l', 'd']
