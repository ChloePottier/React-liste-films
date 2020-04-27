import React from 'react'
import Result from './Result'
import './Results.css'

function Results({results}){
// results prends en paramètre la variable résults
    return(
        <div key={results.id}> 
        {/* boucle sur  le tableau resultsde l'API*/}
        {results.map(result => (
                <Result key={result.id} result={result}/>
                ))
            }
        </div>
    );
}
export default Results;
