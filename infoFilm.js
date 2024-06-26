
const urlParams = new URLSearchParams(window.location.search);
const nomFilm = urlParams.get("id");
console.log(nomFilm);

// le urlsearchparam  est une commande qui sert a récuperer une element de l'url pour le réutilisé ensuite.  Imagine un scanner qui fouille tout ta page

const apiKey = "10228861"

function magain(data) {
    // transforme l'objet js en ofmrat json avec l'option stringigy 
    const objetStringifie = JSON.stringify(data);
    console.log(objetStringifie);
    // cela permet de donné une cle a la valeur, car on ne peux pas stocker un objet sans cle ici la cle est "filmInfo" et la valeur est objectStringinfie
    localStorage.setItem("filmInfo", objetStringifie);
// j'ai mis la fonction du local storageici et je la rappel juste apres le call api, cela me permet donc d'envoyé dans le local storage les info du call api  
}

let infoFilm = async () => {
    let URL = "http://www.omdbapi.com/?i="+nomFilm+"&apikey="+apiKey;
    console.log(URL);

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let html = `
            <article class="banger"> 
                    <h1>${data.Title}</h1>
                    <p>Date de sortie: ${data.Released}</p>
                    <p>Scénario: ${data.Plot}</p>
                    <img src="${data.Poster}" alt="Affiche du film">
                    <a href="./panier.html?id=${data.imdbID}">Ajouter au panier </a>
            </article>`;
        document.body.innerHTML += html;

        magain(data);// cette commande permet de stocker le film ddans le local storage pour l'afficher dans le panier plus tard
    })
    .catch(erreur => console.log("erreur", erreur));
}

infoFilm();

