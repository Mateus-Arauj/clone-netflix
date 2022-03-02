const API_KEY = '4ff6872f46c3b1bea074504726cf19fb'
const API_BASE = 'https://api.themoviedb.org/3'



const basicFetch = async (url)=>{
    const req = await fetch(`${API_BASE}${url}`)
    const json = await req.json()
    return json;
}
const Tmdb = {
    getHomeList: async() =>{
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items : await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
              },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items : await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
              },
              {
                slug: 'toprated',
                title: 'Em alta',
                items : await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
              },
        ]
    },

    getInfoMovie: async(movieId, type) =>{
        let info = {};

        if (movieId) {
          switch(type)
          {
            case 'movie':
              info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
            break;
            case 'tv':
              info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
            break;
            default:
              break;
          }
        }
    
        return info;
      }
}

export default Tmdb;