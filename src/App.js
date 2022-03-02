
import React, {useEffect, useState} from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import HighlightMovie from './components/HighlightMovie'
import './App.css'

function App() {
  console.log(Tmdb)
  const [movieList, setMoviesList] = useState([])
  const [highlight, setHighlight] = useState(null)
  useEffect(() =>{
    const loadAll = async() =>{
      let list = await Tmdb.getHomeList()
      setMoviesList(list)
      let originalList = list.filter(i=>i.slug === 'originals')
      let randomNumber = Math.floor(Math.random() * (originalList[0].items.results.length -1))
      let chooseMovie = originalList[0].items.results[randomNumber]
      let loadInfo = await Tmdb.getInfoMovie(chooseMovie.id,'tv')
      setHighlight(loadInfo)
    }
    loadAll();
  },[])
  return (
    <div className = "page">
      {highlight && 
        <HighlightMovie item={highlight}/>}
     <section className="lists">
       {movieList.map((item,key)=>(<MovieRow key={key} title={item.title} items={item.items}/>)
        
       )}
     </section>
    </div>
  );
}

export default App;
