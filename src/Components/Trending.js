import React from 'react'
import './Trending.css'

function Trending({trends}){
    var urlImg = "https://image.tmdb.org/t/p/w500";

    return(
        trends.map(trend => (
        
        
            <div className="carousel-inner" key={trend.id}>
                    <div className="carousel-item active">
                        <img src={urlImg + trend.backdrop_path} className="d-block w-100" alt={trend.title} />
                    </div>
            
            </div>
        ))
        
        )
}
export default Trending;
