import React from 'react';
import './HighlightMovie.css'
import SearchBar from './SearchBar'


const HighlightMovie = ({item})=>{
    return (
        <div className="margin-featured">
             <section className= "featured" style={{
                backgroundSize: '100%',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                opacity: 0.8        }}>
                <div className= "featured-vertical">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt = "logo-netflix"/>
                    <SearchBar/>
                </div>
            </section>
        </div>
       
    )
}

export default HighlightMovie;