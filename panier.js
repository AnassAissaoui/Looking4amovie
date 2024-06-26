const filmInfo = localStorage.getItem("filmInfo");// on recupere l'objet dans le local storage comme dit dans la précédente feuille

const filmAjouté = JSON.parse(filmInfo);// on transforme le json en javascript utilisable
console.log(filmAjouté);

const article = document.querySelector(".cart");
console.log(article);

let html =  `
<h1> Panier </h1>   
<i class="fa-regular fa-circle-xmark" id="croix"></i>
<h2>${filmAjouté.Title}</h2>
<p>Date de sortie: ${filmAjouté.Released}</p>
<p>Scénario: ${filmAjouté.Plot}</p>
<img src="${filmAjouté.Poster}" alt="Affiche du film ">
<button>payer purée</button>`

article.innerHTML += html




