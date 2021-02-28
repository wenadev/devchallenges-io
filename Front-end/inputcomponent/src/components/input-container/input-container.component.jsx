import React from 'react';
import './input-container.style.css';
import INPUT_DATA from './input.data';
import InputList from '../input-list/input-list.component'

class InputContainer extends React.Component{

    constructor(props){
        super(props)

        this.state={
            data:INPUT_DATA
        }
    }

    render(){
        const {data} =this.state;

        return(
            <div className="input-container">
                <h2>Inputs</h2>
                {
                   data.map(({id, ...otherProps})=>(
                    <InputList key={id} {...otherProps} />
                   ))
                }

                 <footer>
                     <p><a href="https://devchallenges.io/profile/Q5qWB31yUStCuJkz3DpU">wenadev</a> @ DevChallenges.io</p>
                </footer> 
            </div>
        )
    }
}

export default InputContainer;
