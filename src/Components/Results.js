import React from 'react'
import Result from './Result'
import './Results.css'
// import Axios from 'axios';

function Results({results, openpopup}){
// results prends en paramètre la variable résults
    if(results !== ''){
        return(
        
            <div className="results-movies" key={results.id}>
                {/* <div className=" d-flex align-items-center rowFilm font-weight-bold">
                    <div className="listeImg ml-1"></div>
                    <div className="ListeTitre ml-2">Titre</div>
                    <div className="ListeDescription ml-1">Description</div>
                    <div className="ListeDateSortie ml-1">Date de sortie</div>
                    <div className="ListeAvis">Avis</div>
                </div> */}
                <div > 
                {/* boucle sur  le tableau results de l'API*/}
                {results.map(result => (
                        <Result key={result.id} result={result} openpopup={openpopup}/>
                        ))
                    }
                </div>
            </div>
        );
    } 
   
    
}
export default Results;
