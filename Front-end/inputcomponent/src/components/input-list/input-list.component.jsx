import React from "react";
import './input-list.style.css'
import InputBox from '../inputbox/inputbox.component'

function InputList({desc}){
  // console.log(desc)
    return(
        <div className="input-list">
            {
                desc.map(({id, ...otherProps})=>(
                    <InputBox key={id} 
                              {...otherProps}
                              />
                ))
            }
        </div>
    )
}

export default InputList;