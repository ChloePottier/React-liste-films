import React from 'react'
import Result from './Result'
import './Results.css'

function Results({results, openpopup}){
// results prends en paramètre la variable résults
    return(
        <React.Fragment>
        <div className=" d-flex align-items-center rowFilm font-weight-bold">
            <div className="listeImg ml-1"></div>
            <div className="ListeTitre ml-2">Titre</div>
            <div className="ListeDescription ml-1">Description</div>
            <div className="ListeDateSortie ml-1">Date de sortie</div>
            <div className="ListeAvis">Avis</div>
        </div>
        <div key={results.id}> 
        {/* boucle sur  le tableau resultsde l'API*/}
        {results.map(result => (
                <Result key={result.id} result={result} openpopup={openpopup}/>
                ))
            }
        </div>
        </React.Fragment>
    );
}
export default Results;
