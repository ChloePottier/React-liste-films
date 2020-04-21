// créer un composant
//importer les composant react dont il a besoin
import React, { Component } from 'react'
import './Film.css'


class Film extends React.Component{
    // créer le constructeur
    constructor (props) {
        //hérite des parents
        super(props)
        //l'état, ici : mettre les données en tableau, et créer un état mis à false (si pas d'api ou pas de tableau) que l'on passera à true
        this.state = { 
            //de base, l'API n'est pas chargée donc false
            isLoaded: false,
            //création d'un tableau vide
            items: []
         };
    };
    // récupérer l'API
    componentDidMount() {
        // mettre les données de l'aPI via son url en tableau. on chercher tous les films, traduire en francais
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=30b4239b5ea618dab97189fb606a4ed6&language=fr")
        // on renvoie l'objet (les données API) au format json
          .then(result => result.json())
          .then(
            (json) => {
              this.setState({
                isLoaded: true,
                //items = fichier json
                items: json
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            // (error) => {
            //   this.setState({
            //     isLoaded: true,
            //     error
            //   });
            // }
          )
      }

    render(){
        // déclaration des variables qui sont égales aux états déclarés
        var {isLoaded , items} = this.state;
        //variable de l'url de l'img
        var urlImg = "https://image.tmdb.org/t/p/w500";
        if(!isLoaded){
            // si l'état de isLoaded est différent de true (donc si c false) afficher:
           return <div>Loading...</div>;
        } else{
            // sinon (si c'est true)
            return (
             
                <ul className="listingfilms">
                    {/* lister les noeuds du tableau items avec map() */}
                  {items.results.map(item => (                    
                    <li key={item.id} className="d-flex align-items-center">
                      {/* url de l'image + nom img de l'api */}
                      <div className="listeImg"><img src={urlImg + item.poster_path} alt={item.title}/></div>
                      <div className="ListeTitre">{item.title}</div> 
                      <div className="ListeDateSortie">{item.release_date}</div>
                      <div className="ListeAvis">{item.vote_average}</div>
                    </li>
                  ))}
                </ul>
              );
        }
    }
}
//exporter les résultats
export default Film;
