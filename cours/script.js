// const monPrenom = "Alex";
// let monAge = 40;
// console.log(monAge);
// monAge = 42;
// console.log(monAge);

// // Type number de la variable
// const entreesPremiereSemaine = 1000;
// const entreesDeuxiemeSemaine = 2000;
// const totalEntrees = entreesPremiereSemaine + entreesDeuxiemeSemaine;
// console.log(totalEntrees);

// let placesDejaVendues = 150;
// placesDejaVendues += 10;
// console.log(placesDejaVendues);

// let chiffre = 10;
// chiffre += 15;
// console.log(chiffre);

// Exercice
// Déclarez une variable prix et assignez-lui une valeur numérique représentant le prix d'un produit (par exemple, 10 pour 10 euros).
// Déclarez une variable quantite et assignez-lui une valeur numérique représentant la quantité de ce produit que vous souhaitez acheter.
// Calculez le coût total en multipliant le prix par la quantité et stockez le résultat dans une variable appelée coutTotal.
// Affichez le coût total dans la console avec un message explicatif.
// let prix = 10;
// let quantite = 4;
// let coutTotal = prix * quantite;
// console.log(
//   "Le coût total pour l'achat de " +
//     quantite +
//     " au prix de " +
//     prix +
//     " euros par pièce, sera de " +
//     coutTotal +
//     " euros"
// );
// let afficheTotal =
//   "Le coût total pour l'achat de " +
//   quantite +
//   " au prix de " +
//   prix +
//   " euros par pièce, sera de " +
//   coutTotal +
//   " euros";

// type string de la variable : les chaines de caracteres
// let premierePartie = "Mon nom est Bond ";
// let deuxiemePartie = " , James Bond. ";
// let punchline = premierePartie + deuxiemePartie;
// console.log(punchline);

// let texte = " Bonjour ";
// texte += " David";
// console.log(texte);

// // L'instruction Number
// let places = Number("150");
// places += Number("10");
// console.log(places);

// Exercice
// Vous gérez une bibliothèque qui contient 500 livres.
//  Vous décidez de faire les opérations suivantes :
// acheter 50 livres de plus ;
// en jeter 10 ;
// racheter 5 des livres jetés.
// let totalLivres = 500;
// totalLivres += 50;
// totalLivres -= 10;
// totalLivres += 5;
// console.log(totalLivres);
// let affichageTotalLivres =
//   "Notre bibliothèque possède " + totalLivres + " livres.";
// console.log(affichageTotalLivres);

// Les objects
// let monPersonnage = {
//   nom: "Wayne",
//   prenom: "Bruce",
//   age: 35,
//   couleurPreferee: "noir",
//   hobbies: "sortir la nuit",
// };
// console.log(monPersonnage);
// // Ajouter une propriété
// monPersonnage.vehiculePrefere = "Batmobile";
// // Accédez à une propriété d'un object
// const nomDeMonPersonnage = monPersonnage.nom;
// console.log(nomDeMonPersonnage);
// console.log(monPersonnage.nom);

// Exercice :
// Vous êtes chargé de la maintenance d’une borne automatique qui
// permet de récupérer son billet de cinéma
// Vous devez préparer la sortie du prochain film Batman,
// et faire en sorte que les utilisateurs
// puissent récupérer un billet pour ce nouveau film.
// const ticket = {
//   nomFilm: "Batman",
//   prix: 20,
//   numeroSalle: 5,
// };
// let monNom = "Alex";

// let texteAffichage =
//   "Bonjour " +
//   monNom +
//   ", votre film " +
//   ticket.nomFilm +
//   " est en salle numéro : " +
//   ticket.numeroSalle;
// console.log(texteAffichage);

// Exercice avec un object dans un object
// const personne = {
//   preniom: "Alex",
//   agie: 40,
//   adresse: {
//     rue: "Maurice Bourdet",
//     ville: "Alès",
//   },
// };
// console.log(personne);
// // J'ajoute la propriété codePostal : et 30100 est la valeur
// personne.adresse.codePostal = 30100;

// Les tableaux
// let nouveauFilm = "Badmen";
// // Pour ajouter un nouveau film
// const maCollectionDeFilms = [
//   "Titanic",
//   "Jurassic Park",
//   "Le seigneur des Anneaux",
//   nouveauFilm, //  nouveauFilm est le contenu de la variable let nouveauFilm
// ];

// // La propriété .length
// const nombreDeFilms = maCollectionDeFilms.length;
// console.log(nombreDeFilms);

// // On peut aussi stoker des variables dans un tableau
// const monFilmPrefere = "titanic";
// const monPremierFilm = "le seigneur des anneaux";

// const maCollecionDeFilm = [monFilmPrefere, monPremierFilm];
// // longueur du tableau la propriété  .length :
// console.log(maCollecionDeFilm.length);

// // Ajouter des données avecla méthode  .push()
// let mesFilms = ["Titan", "Jurassic"];
// mesFilms.push("retour", "futur");
// console.log(mesFilms);
// console.log(mesFilms.length);

// Supprimer la dernière donnée avec la méthode  .pop()
// let lesFilms = ["Titus", "Juju", "Reourt"];
// lesFilms.pop();
// console.log(lesFilms);

// Pour accéder à une case du tableau
// on utlise des crochets []
// console.log(lesFilms[1]);

// dupliquer une variable simple par VALEUR
// let variableSimple1 = 25;
// let variableSimple2 = variableSimple1; // on cré une copie
// variableSimple2 = 30; //la valeur de variableSimple1 ne change pas
// console.log(variableSimple2);

// Utiliser le spread operator(...) en copie pour les complexe
// pour les tableaux
// let tableauOriginal1 = [1, 2, 3];
// let tableauCopie = tableauOriginal1;
// let copieTableau = [...tableauOriginal1]; // n'affecte pas le tableau Original
// et créé un NOUVEAU tableau qui est une copie du tableau original
// copieTableau.push(4);
// tableauCopie.push(5);

// console.log(tableauOriginal1);
// console.log(copieTableau);

// Utiliser le spread operator ... en copie
// pour les objects
// let objetOriginal1 = {
//   a: 1,
//   b: 2,
// };
// let copieObjet = { ...objetOriginal1 };
// copieObjet.c = 3;
// console.log(objetOriginal1);
// console.log(copieObjet);

// OU utiliser object.assign()
// pour les objets
// let objetOriginal = { a: 1, b: 2 };
// let copieObjet1 = Object.assign({}, objetOriginal); // Copie par valeur
// copieObjet.c = 3;
// console.log(objetOriginal); // Affiche : { a: 1, b: 2 }
// console.log(copieObjet1); // Affiche : { a: 1, b: 2, c: 3 }

// dupliquer une variable par REFERENCE
// let variableComplexe1 = ["pomme", "cerise"];
// let variableComplexe2 = variableComplexe1;
// console.log(variableComplexe2);

// Exercice :
// Déclarez les morceaux de votre playlist
// Commençons par faire un inventaire des CD en votre possession.
// Déclarez un tableau playlist qui contiendra trois de vos morceaux préférés.
// Stockez le nombre de morceaux disponibles dans une variable totalMorceaux.
// Ajoutez les morceaux de vos amis
// Pour plaire à tout le monde, vous décidez de laisser vos amis choisir deux morceaux supplémentaires pour compléter votre collection.
// Ajoutez deux morceaux au tableau playlist de manière à porter le total à cinq morceaux.
// Enlevez le dernier morceau de votre playlist
// Malheureusement, certains ne sont pas d’accord avec le dernier morceau ajouté. Il va falloir faire du tri ! 😱
// Supprimez le dernier morceau ajouté à votre collection.

// let myMusic = ["Toro", "Tara", "Tiri"];
// let totalMorceaux = myMusic;
// console.log(totalMorceaux);
// myMusic.push("Turu", "Tyry");
// console.log(totalMorceaux);
// myMusic.pop();
// console.log(totalMorceaux);
// console.log(myMusic);

// let copieMyMusic = [...myMusic];
// copieMyMusic.push("Turu", "Tyry");
// copieMyMusic.pop();
// console.log(myMusic);
// console.log(copieMyMusic);

// Utiliser la méthode TRIM
// let chaine = "   C'est une phrase avec des espaces blancs.   ";
// let chaineSansEspaces = chaine.trim();
// console.log(chaineSansEspaces);
// Résultat : "C'est une phrase avec des espaces blancs."

// Validation d'une adresse e-mail (supprimer les espaces avant et après)
// let email = "   utilisateur@example.com   ";
// let emailValide = email.trim();
// console.log(emailValide);
// Résultat : "utilisateur@example.com"

// !!!! Object et function
// let personne = {
//   nom: "Alice",
//   age: 25,
// };
// // Itération sur les propriétés de l'objet
// for (let cle in personne) {
//   console.log(cle, personne[cle]);
// }

// Création d'un objet avec une méthode
// let personne = {
//   nom: "John",
//   age: 30,
//   afficherDetails: function () {
//     console.log(`Nom: ${this.nom}, Age: ${this.age}`);
//   },
// };
// // Appel de la méthode de l'objet
// personne.afficherDetails();

// let personne = {
//   nom: "John",
//   age: 30,
//   direBonjour: function () {
//     console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
//   },
// };

// // Appel de la méthode pour dire bonjour
// personne.direBonjour(); // Cela affichera "Bonjour, je m'appelle John et j'ai 30 ans."

// let livre = {
//   titre: "death note",
//   auteur: "Obha",
//   nombreDePage: 100,
// };
// console.log(`${livre.titre}  \n ${livre.auteur} \n ${livre.nombreDePage} `);

// Calculer la moyenne d'un étudiant
// let etudiant = {
//   nom: "Alex",
//   notes: [85, 90, 78, 92, 88],
// };
// // calcul de la moyenne des notes
// let total = 0;
// for (let i = 0; i < etudiant.notes.length; i++) {
//   total += etudiant.notes[i];
// }
// let moyenne = total / etudiant.notes.length;
// console.log(`${etudiant.nom} : ${moyenne}`);

// let personne = {
//   nom: "Alex",
//   age: 49,
//   ville: "Ales",
// };
// console.log(` ${personne.nom} ${personne.age} ${personne.ville}`);

// calculer l'aire d'un rectangle
// let rectangle = {
//   longueur: 10,
//   largeur: 10,
// };
// let aire = 0;
// aire = rectangle.largeur * rectangle.longueur;
// console.log(`${aire}`);

// OU
// let rectangle = {
//   longueur: 5,
//   largeur: 8,
//   claculerAire: function () {
//     return this.longueur * this.largeur;
//   },
// };
// let aire = rectangle.claculerAire();
// console.log(`${aire}`);

// let noms = ["Samsha", "Selkyn", "Ishka"];
// console.log(noms);
// for (let i = 0; i < noms.length; i++) {
//   console.log(noms[i]);
// }

// Enumérer la liste dans la console
// let articles = ["popo", "pipi", "caca", "coco"];
// for (const tableau of articles) {
//   console.log(tableau);
// }

// OU
// let listeDeCourses = {
// articles: ["pain", "lait", "beurre"],
// };
// for (let i = 0; i < listeDeCourses.articles.length; i++) {
// console.log(listeDeCourses.articles[i]);
// }

// / Utilisation de for...of pour parcourir les caractères d'une chaîne
// let message = "Bonjour";
// for (let char of message) {
//   console.log(char);
// }

// let maChaine = "JavaScript";
// for (let i = 0; i < maChaine.length; i++) {
//   console.log(maChaine[i]);
// }

// let maChaine = "Bonjour, monde !";
// Utilisation de la propriété length sur une chaîne de caractères
// let longueur = maChaine.length;
// console.log(longueur); // Affiche la longueur de la chaîne, dans ce cas, 16

// !!! Utilisation de spread operator avec tableau
// 1.Copier un tableau
// let tableauOriginal = [1, 2, 3];
// let nouveauTableau = [...tableauOriginal];
// console.log(nouveauTableau); // Affiche [1, 2, 3]

// 2.Combinaison de tableaux
// let tableau1 = [1, 2, 3];
// let tableau2 = [4, 5, 6];
// let tableauCombine = [...tableau1, ...tableau2];
// console.log(tableauCombine); // Affiche [1, 2, 3, 4, 5, 6]

// 3.Ajout d'éléments à un tableau
// let tableauInitial = [1, 2, 3];
// let nouvelElement = 4;
// let tableauModifie = [...tableauInitial, nouvelElement];
// console.log(tableauModifie); // Affiche [1, 2, 3, 4]

// !!Utilisation spread operator avec objet
// 1.copie d'objet
// let objetOriginal = { a: 1, b: 2 };
// let nouvelObjet = { ...objetOriginal };
// console.log(nouvelObjet); // Affiche { a: 1, b: 2 }

// 2.Fusion d'objet
// let objet1 = { a: 1, b: 2 };
// let objet2 = { c: 3, d: 4 };
// let objetCombine = { ...objet1, ...objet2 };
// console.log(objetCombine); // Affiche { a: 1, b: 2, c: 3, d: 4 }

// 3.Ajout de propriété à un objet
// let objetInitial = { a: 1, b: 2 };
// let nouvellePropriete = { c: 3 };
// let objetModifie = { ...objetInitial, ...nouvellePropriete };
// console.log(objetModifie); // Affiche { a: 1, b: 2, c: 3 }

// !!Utilisation spread operator avec des arguments de Fonction
// function maFonction(a, b, c) {
//   console.log(a, b, c);
// }
// let tableauArguments = [1, 2, 3];
// maFonction(...tableauArguments); // Affiche 1 2 3

// !! Utilisation de replace()
// regexp : Une expression régulière ou une sous-chaîne à rechercher dans la chaîne d'origine.
// substr : La sous-chaîne à rechercher dans la chaîne d'origine.
// newSubstr : La sous-chaîne qui remplacera la correspondance.
// function : Une fonction qui sera appelée pour chaque correspondance trouvée,
// et qui renverra la sous-chaîne de remplacement.

// 1. Remplacement d'une sous-chaîne simple :
// let phrase = "Bonjour, monde !";
// let nouvellePhrase = phrase.replace("monde", "JavaScript");
// console.log(nouvellePhrase);
// Affiche "Bonjour, JavaScript !"

// 2. Utilisation d'une expression régulière pour un remplacement global :
// let texte = "Le JavaScript est génial. JavaScript est puissant.";
// let nouveauTexte = texte.replace(/JavaScript/g, "Node.js");
// console.log(nouveauTexte);
// Affiche "Le Node.js est génial. Node.js est puissant."

// 3. Utilisation d'une fonction pour générer la sous-chaîne de remplacement :
// let nombre = 42;
// let chaine = "Le nombre est : {nombre}";
// let nouvelleChaine = chaine.replace(/{nombre}/g, function () {
//   return nombre;
// });
// console.log(nouvelleChaine);
// Affiche "Le nombre est : 42"

// !!Utilisation simple de la méthode concat()
// !! nouvelleChaine = chaine.concat(string1, string2, ..., stringN);

// 1. Concaténation de deux chaînes
// let chaine1 = "Bonjour";
// let chaine2 = "monde";
// let nouvelleChaine = chaine1.concat(", ", chaine2, "!");
// console.log(nouvelleChaine);
// Affiche "Bonjour, monde!"

// 2. Concaténation avec des variables
// let prenom = "Alice";
// let nom = "Dupont";
// let age = 25;
// let message =
//   "Bonjour, je m'appelle " +
//   prenom.concat(" ", nom) +
//   " et j'ai " +
//   age +
//   " ans.";
// console.log(message);
// Affiche "Bonjour, je m'appelle Alice Dupont et j'ai 25 ans."

// !! Utilisation de math.random() et math.floor()
// 1. Génération de couleurs aléatoires en RGB
// function couleurAleatoire() {
//   const rouge = Math.floor(Math.random() * 256);
//   const vert = Math.floor(Math.random() * 256);
//   const bleu = Math.floor(Math.random() * 256);
//   return `rgb(${rouge}, ${vert}, ${bleu})`;
// }
// console.log(couleurAleatoire());

// 2. Sélection aléatoire d'éléments d'un tableau
// const options = ["Pierre", "Papier", "Ciseaux"];
// const choixAleatoire = options[Math.floor(Math.random() * options.length)];
// console.log(choixAleatoire);

// 3. Simulation de lancer de dé
// function lancerDe() {
//   return Math.floor(Math.random() * 6) + 1;
// }
// console.log(lancerDe());

// 4. Mélange aléatoire d'un tableau (algorithme de Fisher-Yates)
// function melangerTableau(tableau) {
//   for (let i = tableau.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
//   }
// }
// const monTableau = [1, 2, 3, 4, 5];
// melangerTableau(monTableau);
// console.log(monTableau);

// Mélanger aléatoirement un jeu de carte
// function melangerCartes() {
//   const cartes = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   const enseignes = ["Coeur", "Carreau", "Trèfle", "Pique"];
//   const jeuDeCartes = [];
//   // Créer le jeu de cartes
//   for (const enseigne of enseignes) {
//     for (const carte of cartes) {
//       jeuDeCartes.push(`${carte} de ${enseigne}`);
//     }
//   }
//   // Mélanger le jeu de cartes avec l'algorithme de Fisher-Yates
//   for (let i = jeuDeCartes.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [jeuDeCartes[i], jeuDeCartes[j]] = [jeuDeCartes[j], jeuDeCartes[i]];
//   }
//   return jeuDeCartes;
// }
// const jeuMelange = melangerCartes();
// console.log(jeuMelange);

// Mélanger une liste de noms
// function melangerNoms(noms) {
//     melangerTableau(noms);
//     return noms;
// }
// const listeNoms = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// const nomsMelanges = melangerNoms(listeNoms);
// console.log(nomsMelanges);

// Mélanger des questions d'un quiz
// function melangerQuestions(questions) {
//     melangerTableau(questions);
//     return questions;
// }
// const quizQuestions = [
//     'Quelle est la capitale de la France?',
//     'Quel est le plus grand océan du monde?',
//     'Combien de continents y a-t-il sur Terre?',
//     'Qui a écrit Roméo et Juliette?'
// ];
// const questionsMelangees = melangerQuestions(quizQuestions);
// console.log(questionsMelangees);

// Mélange aleatoire sans tableau
// Exemple avec une liste d'éléments
// let element1 = "Premier élément";
// let element2 = "Deuxième élément";
// let element3 = "Troisième élément";
// Générer un nombre aléatoire entre 1 et le nombre total d'éléments
// let nombreAleatoire = Math.floor(Math.random() * 3) + 1;

// Sélectionner l'élément en fonction du nombre aléatoire généré
// let elementSelectionne;
// switch (nombreAleatoire) {
//     case 1:
//         elementSelectionne = element1;
//         break;
//     case 2:
//         elementSelectionne = element2;
//         break;
//     case 3:
//         elementSelectionne = element3;
//         break;
//     default:
// Gérer le cas par défaut si nécessaire
//         break;
// }
// console.log("Élément sélectionné :", elementSelectionne);

// let tableau2D = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(tableau2D[1][2]); // Accède à l'élément à la deuxième ligne, troisième colonne

// let nombres = [5, 10, 15, 20, 25];
// let somme = 0;
// for (let i = 0; i < nombres.length; i++) {
//   somme += nombres[i];
// }
// console.log(somme);

// let nombres = [12, 5, 8, 22, 15, 30];
// let grand = nombres[0];
// for (let i = 0; i < nombres.length; i++) {
//   if (nombres[i] > grand) {
//     grand = nombres[i];
//   }
// }
// console.log(grand);

// let nombres = [12, 5, 8, 22, 15, 30];
// // Initialisez une variable pour stocker le maximum
// let maximum = nombres[0];
// // Parcourez le tableau pour trouver le maximum
// for (let i = 1; i < nombres.length; i++) {
//     if (nombres[i] > maximum) {
//         maximum = nombres[i];
//     }
// }
// // Affichez le résultat dans la console
// console.log("Le plus grand nombre est :", maximum);

let nombre = [2, 5, 8, 11, 14, 17, 20];
let pair = [];
for (let i = 0; i < nombre.length; i++) {
  if (nombre[i] % 2 === 0) {
    pair.push(nombre[i]);
  }
}
console.log(pair);
