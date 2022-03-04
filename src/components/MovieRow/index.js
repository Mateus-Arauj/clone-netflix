import React,{useState} from 'react';
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Add from '@material-ui/icons/Add';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

const MovieRow = ({title,items})=>{
    const [widthList, setWidthList] = useState(0)
    
    //Filter movies that contain description
    const itemsWithOverview = items.results.filter(i=>i.overview)

    // <- Move carousel left
    const pressToMoveLeft = ()=>{
        let x = widthList + Math.round(window.innerWidth / 2)
        if(x > 0) x = 0
        setWidthList(x)
    }

    // -> Move carousel right
    const pressToMoveRight = ()=>{
        let x = widthList - Math.round(window.innerWidth / 2);
        let tamI = window.innerWidth < 801 ? 120 : 210;
        let listW = itemsWithOverview.length * tamI;
        if((window.innerWidth-listW)>x){
        x = (window.innerWidth-listW) - 400;
        }
        setWidthList(x)
    }
    
    // get movie/series/documentary name 
     const getName = (ob) =>{
        if(ob.name){
            return ob.name
        } else if(ob.original_name){
            return ob.original_name
        }else{
            return ob.title
        }
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className= "movieRow-left" onClick={pressToMoveLeft} >
                <NavigateBeforeIcon style = {{fontSize: 60}}/>

            </div>
            <div className= "movieRow-right" onClick={pressToMoveRight}>
                <NavigateNextIcon style = {{fontSize: 60}}/>
                
            </div>
            <div className = "movieRow-listarea">
                <div className = "movieRow-list" style = {{
                    marginLeft: widthList,
                    width: `${((itemsWithOverview.length + 2) * 215)}px`
                }}>
                   
                       {itemsWithOverview.length > 0 && itemsWithOverview.map((item,key)=>(
                           <div className = "movieRow-item" key={key}>
                               <div className = "img-f" style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage: `url(https://image.tmdb.org/t/p/w300${item.poster_path})`
                                }}> 
                                <div className = "button-play">
                                    <PlayCircleOutlineIcon style={{fontSize: 60}}/>
                                </div>
                                </div>
                                <div className = "card-show">
                                    <strong style = {{
                                        fontSize: 22
                                    }}>
                                        {getName(item)}
                                    </strong>
                                    <p>{item.overview.length > 200? item.overview.substring(0,200) + "...": item.overview}</p>
                    
                                    <div className = "bottom-cardShow"> 
                                        <a className = "cardShow--button-play" href={`/movie/${item.id}`}> ▶  Assistir</a>
                                        <div className = "circle"> 
                                            <Add style={{fontSize: 25}}/>
                                        </div>
                                        <div className = "circle"> 
                                            <ThumbUp style={{fontSize: 23}}/>
                                        </div>
                                        <div className = "circle"> 
                                            <ThumbDown style={{fontSize: 23}}/>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                            ))}
                    
                </div>
                
            </div>
        </div>
    )
}

export default MovieRow