import React from 'react'
import './Popup.css'

const urlImg = 'https://image.tmdb.org/t/p/w500'
function Popup({selected}){
    return(
        <div className="popup row my-5" key={selected.id}>
            {/* <p className=" col-12">doit renvoyer les résultats pour un seul film</p> */}
            <div className="col-12 col-md-6  my-5">
                <img src={urlImg + selected.poster_path} alt={selected.title} className="w-100" />
            </div>
            <div className="col-12 col-md-6 my-5">
                <h2>{selected.title}</h2>
                <i>{selected.tagline}</i><br />
                <div ><span className="font-weight-bold">Genre(s) : </span> 
                    {selected.genres.map(genre => (
                        <span key={genre.id}>{genre.name} </span>
                    ))}
                </div>
                {/* <div>LEs crédits : acteurs,...</div> */}
                {/* split permet de couper la date, la mettre en tableau. on garde que l'année */}
                <div><span className="font-weight-bold">Année de sortie : </span>{selected.release_date.split('-')[0]}</div>
                <p>{selected.overview}</p>
                <div><span className="font-weight-bold">Note : </span>{selected.vote_average}</div>
            </div>  
        </div>
    )
}
export default Popup;