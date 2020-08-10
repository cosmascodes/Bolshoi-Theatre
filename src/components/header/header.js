import React from 'react';
import './header.css';

function Header(props) {
    return (
        <div className="dashboard-header">
            <h1>Bolshoi <span>Theatre</span></h1>
            <input type="checkbox" className="menuBtn" id="menuBtn"/>
            <label htmlFor="menuBtn" className="menuBtn-label">
                <span className="menuicon"></span>
            </label>
            
        </div>
    );
}

export default Header;