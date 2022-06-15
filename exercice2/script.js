/* Créez une nouvelle page avec une entrée de texte et un bouton. Lorsque le bouton est cliqué, 
une requête de récupération est envoyée à l' API agify avec le nom entré dans l'entrée. 
Lorsque la requête est terminée, affichez le résultat dans une nouvelle div sur la page. 
Conservez les requêtes passées sur la page en créant une nouvelle div chaque fois que vous effectuez 
un appel API.

Étapes supplémentaires :

a. Ajoutez également un <select>champ contenant quelques pays pour affiner la recherche à un pays 
spécifique. Vous devrez regarder dans la documentation d'agify pour en savoir plus à ce sujet.

b. Stockez les résultats précédents dans un localStorage afin de ne pas avoir à les récupérer à nouveau !

c. Utiliser la syntaxe de promesse ? Essayez d'utiliser à la async/awaitplace ! */


let button = document.querySelector("button") // selectionne le button
let response;


button.addEventListener("click", () => {
    console.log("coucou")
    let input = document.querySelector("#input").value; // selectionne le input
    let api = await fetch(`https://api.agify.io?name=${input}`) // requete de l'api
    response = await api.json(); // on récupère les données de la réponse
    console.log(response); // affiche les données de la réponse
})