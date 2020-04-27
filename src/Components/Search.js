import React from 'react'
import './Search.css'

function Search({recherche, search}){
    return(
        <div className="search ">
            <input type="text" 
            placeholder="Rechercher un film" 
            className="searchBox" 
            onChange={recherche} 
            //quand on presse la touche entrer cela déclenche la fonction
            onKeyPress={search}
            class="form-control ml-2"
            />
        </div>
    )
}
// on exporte le input et les paramètres qui lui permettent de fonctionner
export default Search;
console.log(Search)