import React from "react";
import './nav.style.css'

function Navigation(){
    return(
         <div className="nav">
            <div className="nav-title">
                <p><span>Dev</span>challenges.io</p>
            </div>

            <div className="nav-options">
                <ul>
                    <li>Typography</li>
                    <li>Grid</li>
                    <li>Buttons</li>
                    <li className="active">Inputs</li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation