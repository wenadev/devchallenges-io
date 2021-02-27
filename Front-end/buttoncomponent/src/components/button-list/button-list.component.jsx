import React from 'react';
import './button-list.style.css';
import Button from '../buttons/button.component'

const ButtonList = ({desc})=>(
        <div className="btn-list">
            {
                desc.map(({id, ...otherProps})=>(
                   <Button key ={id} {...otherProps}/>
                ))
            }
        </div>
)

export default ButtonList;