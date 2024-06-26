
  document.getElementById("leboutton").addEventListener("click",function(){

    let nomFilm = document.getElementById("labarre").value;//récupère la valeur de ce qui est écrit dans l'input
  const apiKey = "10228861";
  let URL = "http://www.omdbapi.com/?s="+nomFilm+"&apikey="+apiKey; //le s dans l'url correspond à search ca aide a trouver la chaine de string
   
    function getMyMovie(){
        fetch(URL)
          .then(response => response.json())
          .then(data => {
            let Film = data.Search;//on cherche les infos dans l'api
            console.log(Film);

            if (data.Response === "False") {
              alert("Ya rien cherche un autre ")//si il tape des bêtises ca lui renvoie une alerte
                          }

            for (let monFilm of Film){
                let html = `
                
                <h2>${monFilm.Title} (${monFilm.Year})</h2>
                <img src="${monFilm.Poster}" alt="Movie Poster">
                <a href="./infoFilm.html?id=${monFilm.imdbID}">VOIR PLUS</a>`//ca affichera dans le html mes balises
                document.getElementById("détaillé").innerHTML +=html;
           
                console.log(html)
            }
    }).catch(error=>console.error("error",error));
        }
        getMyMovie()//rappel de fonction pour que ca marche
    })