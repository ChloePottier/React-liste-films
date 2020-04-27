import React from 'react'
import './Trending.css'

function Trending({trends}){
    var urlImg = "https://image.tmdb.org/t/p/w500";

    return(
        trends.map(trend => (
        <div key={trend.id}>
            <div className=""><img src={urlImg + trend.backdrop_path} alt={trend.title} /></div>
            <div className="">{trend.title}</div>
        </div>))
    )
}
export default Trending;
