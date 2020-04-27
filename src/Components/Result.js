import React from 'react'
import './Result.css'
// fonction détails du film : 1 résultat
function Result({result, openpopup}){
    // Result à besoin de la var 'result'
    var urlImg = "https://image.tmdb.org/t/p/w500";

    return(
        
        //au click sur le film voulu, cela déclench un évènement, ouvrir la popup avec comme id result.id
        <div className=" d-flex align-items-center rowFilm " onClick={((e) => openpopup(e, result.id))}>
            {/* retourne le titre du film issus de map() Results.js */}
            <div className="listeImg ml-1"><img src={urlImg + result.poster_path} alt={result.title} /></div>
            <div className="ListeTitre ml-2">{result.title}</div>
            <div className="ListeDescription ml-1">{result.overview.slice(0,100) + ' ...'}</div>
            <div className="ListeDateSortie ml-1">{result.release_date.split('-')[0]}</div>
            <div className="ListeAvis">{result.vote_average}</div>
        </div>
    );
}
export default Result;
