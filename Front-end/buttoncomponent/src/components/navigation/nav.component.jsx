import React from 'react';
import './nav.style.css'

function Navigation(){

    return(
        <div className="nav">
            <div className="nav-title">
                <p><span>Dev</span>challenges.io</p>
            </div>

            <div className="nav-options">
                <ul>
                    <li>Colors</li>
                    <li>Typography</li>
                    <li>Spaces</li>
                    <li className="active">Buttons</li>
                    <li >Inputs</li>
                    <li>Grid</li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;