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
    const pressToMoveLeft = ()=>{
        let x = widthList + Math.round(window.innerWidth / 2)
        if(x > 0) x = 0
        setWidthList(x)
    }
    const pressToMoveRight = ()=>{
        let x = widthList - Math.round(window.innerWidth / 2);
        let tamI = window.innerWidth < 801 ? 120 : 150;
        let listW = items.results.length * tamI;
        if((window.innerWidth-listW)>x){
        x = (window.innerWidth-listW) - 60;
        }
        setWidthList(x)
    }
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className= "movieRow-left" onClick={pressToMoveLeft}>
                <NavigateBeforeIcon style = {{fontSize: 50}}/>

            </div>
            <div className= "movieRow-right" onClick={pressToMoveRight}>
                <NavigateNextIcon style = {{fontSize: 50}}/>
                
            </div>
            <div className = "movieRow-listarea">
                <div className = "movieRow-list" style = {{
                    marginLeft: widthList,
                    width: `${items.results.length * 150}px`
                }}>
                   
                       {items.results.length > 0 && items.results.map((item,key)=>(
                           <div className = "movieRow-item"  key={key}>
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
                                    <strong>{item.title}</strong>
                                    <p>{item.overview.length > 200? item.overview.substring(0,200) + "...": item.overview}</p>
                                    {console.log(item)}
                                    <div className = "bottom-cardShow"> 
                                        <a className = "cardShow--button-play" href=""> ▶  Assistir</a>
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