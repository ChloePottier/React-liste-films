import React from 'react'
import './Popup.css'

const urlImg = 'https://image.tmdb.org/t/p/w500'
function Popup({selected}){
    return(
        <div className="popup row">
            {/* <p className=" col-12">doit renvoyer les résultats pour un seul film</p> */}
            <div className="col-12 col-md-6">
                <img src={urlImg + selected.poster_path} alt={selected.title} className="w-100" />
            </div>
            <div className="col-12 col-md-6">
                <h2>{selected.title}</h2>
                <i>{selected.tagline}</i><br />
                <div> Genre(s) :
                    {selected.genres.map(item => (
                        <span>{item.name} </span>
                    ))}
                </div>
                {/* <div>LEs crédits : acteurs,...</div> */}
                <div>Année de sortie : {selected.release_date.split('-', [0])}</div>
                <p>Description</p>
                <div>avis</div>
            </div>  
        </div>
    )
}
export default Popup;