import React from 'react'
import './DetailsFilm.css'
// allersur ulocalhost:3000?id-film=21
class DetailsFilms extends React.Component {
    // créer le constructeur
    constructor(props) {
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
        var urlcourante = document.location.href;
        // Supprimons l'éventuel dernier slash de l'URL
        // var urlcourante = urlcourante.replace(/\/$/, "");
        var id = urlcourante.substring (urlcourante.lastIndexOf( "=" )+1 );
        // var id2 = urlcourante.substring (urlcourante.indexOf( "/" ) );
        // console.log(id2);
        var urlApi = 'https://api.themoviedb.org/3/movie/';
        var urlMovie = `${urlApi + id}?api_key=30b4239b5ea618dab97189fb606a4ed6&language=fr` ;
        fetch(urlMovie)
            // on renvoie l'objet (les données API) au format json
            .then(result => result.json())
            .then(
                (json) => {
                    //mettre l'état à jour isLoaded passe à true, 
                    this.setState({
                        isLoaded: true,
                        //le tableau item = données du json
                        items: json
                    });
                },
            )
    }

    render() {
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
                
                <div className="detailDuFilm container">
                    {/* lister les noeuds du tableau items avec map() */}
                    {
                        <div key={items.id} className="d-flex row">
                            {/* url de l'image + nom img de l'api */}
                            <div className="col">
                                <div className="filmImg"><img src={urlImg + items.poster_path} alt={items.title} /></div>
                            </div>
                            <div className="col">
                            <div className="filmTitre font-weight-bold"><h1>{items.title}</h1></div>
                            <div className= "filmGenre d-flex mt-2">
                                {/* lister les noeuds du tableau items avec map() */}
                            {items.genres.map(item => (
                                <div key={item.id} className="">
                                     {item.name},&nbsp; 
                                </div>)
                            )
                            }
                            </div>
                            <div className="filmDateSortie mt-2"><span className="font-weight-bold">Date de sortie : </span>{items.release_date}</div>
                            <div className="filmResume mt-2"><p>{items.overview}</p></div>
                            
                            <div className="filmAvis">Note : {items.vote_average}</div>
                            </div>
                        </div>
                    }
                </div>
            );
        }
    }


}
export default DetailsFilms;




    // render(){
    //     var test = '18';
    //     var urlApi = 'https://api.themoviedb.org/3/movie/';
    //     var urlMovie = urlApi + test + "?api_key=30b4239b5ea618dab97189fb606a4ed6&language=fr" ;
    //     return(urlMovie);
    //     }