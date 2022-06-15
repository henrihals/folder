/* Créez un nouveau répertoire (= dossier), contenant 3 fichiers :

index.html
script.js
becode.json

Créez un <button>, lorsque vous cliquez dessus, les règles becode sont chargées avec un fetch7
('becode.json'), puis générez dynamiquement une <ul>liste contenant chaque règle dans un <li>.*/

let ul = document.createElement("ul"); // crée un ul
let becode = fetch("becode.json"); // dossier contenant les règle de BeCode
let response; // variable qui contiendra les données de la réponse

document.body.appendChild(ul); // Met le ul dans le body

let button = document.querySelector("button") // selectionne le button
button.addEventListener("click", () => {    // quand on clique sur le button
    becode 
        .then(response => response.json()) // on récupère les données de la réponse
        .then(data => { // on les transforme en json
            data.forEach(element => { // pour chaque element de la réponse
                let li = document.createElement("li"); // crée les li
                li.textContent = element; // met le contenu de chaque element dans les li
                ul.appendChild(li); // met les li dans le ul
            })
        })
    })
