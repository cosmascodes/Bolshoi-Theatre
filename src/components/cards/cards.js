import React, { useContext } from 'react';
import './cards.css';
import { Plays } from '../../contexts/playContexts';
import {Zoom} from 'react-reveal';
import ScheduleIcon from '@material-ui/icons/ScheduleOutlined';
import AssignmentIndIcon from '@material-ui/icons/AssignmentIndOutlined';
import { NavLink } from 'react-router-dom';



function Cards() {
   const plays = useContext(Plays)
    return (
        <div className="card-container">
            {plays.map(( play , index )=>
                    <Zoom duration={500}>
                        <NavLink to={play.link}>
                            <div key={index}  className="playcard">
                                <img src={require(`../../assets/${play.title}.jpg`)} alt={play.title}/>
                                <div className="maintext">
                                    <h1>{play.title}</h1>
                                    <h2>{play.author}</h2>
                                    <h4>{play.day}</h4>
                                </div>
                                <div className="bookingIcon"><AssignmentIndIcon color='inherit' fontSize='inherit'/></div>
                                <div className="card-bottom-sect">
                                    <h4>Genre: {play.genre}</h4>
                                    <span>
                                        <ScheduleIcon fontSize='inherit'/><p>{play.time}</p>
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                    </Zoom>
                )}
        </div>
    );
}

export default Cards;