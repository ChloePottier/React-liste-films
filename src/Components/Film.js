// créer un composant
//importer les composant react dont il a besoin
import React, { Component } from 'react' 
import './Film.css'
import ButtonDetails from './ButtonDetails';
// import DetailsFilms from './DetailsFilm';


class Film extends React.Component {
  // créer le constructeur
  constructor(props) {
    //hérite des parents
    super(props)
    //l'état, ici : mettre les données en tableau, et créer un état mis à false (si pas d'api ou pas de tableau) que l'on passera à true
    this.state = {
      //de base, l'API n'est pas chargée donc false
      isLoaded: false,
      //création d'un tableau vide
      items: [],
      //création du champs value pour le btn détails
      value: ''
    };
    // Cette liaison est nécéssaire afin de permettre l'utilisation de `this` dans la fonction de rappel.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      )
  }

   handleClick(e) {    
    e.preventDefault();   
    console.log('Le lien a été cliqué.'); 
    // alert("bon au moins ca ca marche");
  }
  handleChange(event) {    
    this.setState({value: event.target.value});  
  }
  handleSubmit(event) {
    alert('id : ' + this.state.id);
    event.preventDefault();
  }
  render() {
    // console.log('test');
    // déclaration des variables qui sont égales aux états déclarés
    var { isLoaded, items } = this.state;
    //variable de l'url de l'img
    var urlImg = "https://image.tmdb.org/t/p/w500";
    // var urlMovie ="https://api.themoviedb.org/3/movie/";
    if (!isLoaded) {
      // si l'état de isLoaded est différent de true (donc si c false) afficher:
      return <div>Loading...</div>;
    } else {
      // sinon (si c'est true)
      return (

        <div className="listingfilms ">
          {/* lister les noeuds du tableau items avec map() */}
          {items.results.map(item => (
            // on définis une clé (key) on peut ajouter d'autras paramètres. ici on ajoute id=item.id
            <div key={item.id} id={item.id} className="d-flex align-items-center rowFilm" >
              {/* url de l'image + nom img de l'api */}
              {/* onClick={this.handleClick} */}
              <div className="listeImg"><img src={urlImg + item.poster_path} alt={item.title} /></div>
              <div className="ListeTitre">{item.title}</div>
              <div className="ListeDateSortie">{item.release_date}</div>
              <div className="ListeAvis">{item.vote_average}</div>
              <ButtonDetails />
              {/* <form onSubmit={this.handleSubmit}> 
                <input type=" " value={item.id} onChange={this.handleChange}/>
                <button type="submit">Détails</button>
              </form> */}
              {/* <div><a href={"?id-film=" + item.id} onClick={this.handleClick} >détails</a></div> */}
              {/* onClick={nomFunction} */}
            </div>
          ))}
        </div>
      );
    }
  }
}
//exporter les résultats
export default Film;
