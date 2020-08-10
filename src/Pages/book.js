import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './css/book.css';
import Header from '../components/header/header';
import { Plays } from '../contexts/playContexts';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';

function Book() {
    useEffect(()=>window.scrollTo(0,0))
    let {id} = useParams();
    const plays = useContext(Plays)
    const data = plays.filter((eachPlay,index)=>{
        let ind = index.toString();
        if( ind === id ){
            return eachPlay
        }
        return false
    })
    const play = data[0];
    // console.log()
    return (
        <div>
            <Header/>
            <div className="bookContainer">
                <div className="image">
                    <img src={require(`../assets/${play.title}.jpg`)} alt={play.title}/>
                    <h1>{play.title}</h1>
                </div>
                <div className="content">
                    <div className="highlights">
                        <p className="seats"><EventAvailableOutlinedIcon fontSize='inherit'/>Available seats</p>
                        <span>
                            <p><FavoriteBorderOutlinedIcon fontSize='inherit'/>Likes</p>
                            <p><ModeCommentOutlinedIcon fontSize='inherit'/>Comments</p>
                            <p><ShareOutlinedIcon fontSize='inherit'/>Share</p>
                        </span>
                    </div>
                    <div className="bookDetails">
                        <h1>Author: <span>{play.author}</span></h1>
                        <h1>Genre: <span>{play.genre}</span></h1>
                        <h1>Plot</h1>
                        {play.plot().props.children}
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Book;