import React, { createContext, useState } from 'react';
import { DOS } from './texts';

export const Plays = createContext();

function PlayContexts(props) {
    const [ play, setPlay] = useState([
        {
            link:"/play/0",
            title:"Death of a Salesman",
            author:"Arthur Miller", 
            genre:"Tragedy", 
            day:"Monday", 
            time:"4.00pm to 6.00pm",
            plot:DOS
        },
        {
            link:"/play/1",
            title:"The Glass Menagerie",
            author:"Tennessee Williams", 
            genre:"Memory play", 
            day:"Tuesday", 
            time:"4.00pm to 5.00pm",
            plot:DOS
        },
        {
            link:"/play/2",
            title:"Angels in America",
            author:"Tony Kushner", 
            genre:"Drama", 
            day:"Wednesday", 
            time:"4.00pm to 7.00pm",
            plot:DOS
        },
        {
            link:"/play/3",
            title:"Waiting for Godot",
            author:"Samuel Beckett", 
            genre:"Tragicomedy", 
            day:"Thursday", 
            time:"4.00pm to 6.00pm",
            plot:DOS
        }
    ])
    return (
        <Plays.Provider value={play}>
            {props.children}
        </Plays.Provider>
    );
}

export default PlayContexts;