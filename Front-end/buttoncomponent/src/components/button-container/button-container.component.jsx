import React from 'react';
import './button-container.style.css';
import BUTTON_DATA from './button.data';
import ButtonList from '../button-list/button-list.component'

class ButtonContainer extends React.Component{
    constructor(props){
        super(props);

        this.state={
            description: BUTTON_DATA
        }
    }

    render(){
        const {description} = this.state;
        return(
            <div className="btn-container">
                <h2>Buttons</h2>
                {
                    description.map(({id, ...otherProps})=>(
                        <ButtonList key={id}  {...otherProps} />
                    ))
                }  
                <p id="material-link">Icons : <a href="https://material.io/resources/icons/?style=round">https://material.io/resources/icons/?style=round</a></p> 

                 <footer>
                     <p><a href="https://devchallenges.io/profile/Q5qWB31yUStCuJkz3DpU">wenadev</a> @ DevChallenges.io</p>
                </footer>    
            </div>
        )
    }
}

export default ButtonContainer;