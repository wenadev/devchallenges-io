import React from 'react';
import './inputbox.style.css';

function InputBox({text, isDisabled, inputError, fullDesc, inputSize, positionIcon}){

    function styleDesc(desc){
        if(desc.includes('hover') || desc.includes('focus')){
            return 'hover-focus-text'
        }

        else return 'desc'
    }

    function setErrorText(error,desc){
        if(error === true && (!desc.includes('hover'))){
            return ', error-text'
        }

        else return 'text-label'
    }

    function setDisabled(bool){
        if(bool === true){
           
            return 'disable-input'
        }

        else return '';
    }

    function setError(bool){
        if(bool === true){
           
            return ', error-input'
        }

        else return '';
    }

    function setSize(size){
        if(size === 'sm'){
            return ', small-input'
        }

        else if(size === 'md'){
            return ', mid-input'
        }

        else if(size === 'fl'){
            return ', fullWidth-inputBox'
        }

        else if(size === 'multi'){
            return ', hide'
        }

        else return ''
    }

    function showcaseStates(desc, error){
        if(desc.includes('hover') && (error === true || error !== true)){
            return 'input-hover'
        }

        else if(desc.includes('focus') && error !== true){
            return 'blue-focus'
        }

        else return ''
    }

    function showAdditionalText(desc){
        if(desc.includes('interesting')){
            return 'show-interesting'
        }

        else return ''
    }

    function setPlaceholder(desc){
        if(!desc.includes('value')){
            return 'Placeholder'
        }
        else return
    }

    function setValue(desc){
        if (desc.includes('value')) return 'Text'
        else return
    }

    function hideElement(size){
        if(size !== 'multi'){
            return 'hide'
        }

        else return ''
    }

    function setRows(desc){
        if(desc.includes('row')){
            //first apostrophe before the set number of rows
            const getIndex = desc.indexOf('"')
            const getNumberOfRows = desc[getIndex+1] 
            
            return `${getNumberOfRows * 2}`
        }

        else return '8'
    }

    function setHoverAndFocus(desc){
        if(desc.includes('Input') 
            && !desc.includes('error') 
            && !desc.includes('disabled') 
            && !desc.includes('hover')
            && !desc.includes('focus')){
            return ', hover-focus'
        }

        else if(desc.includes('error')){
            return ', error-hover'
        }
    }


    return(
        <div className={`input ${inputSize === 'fl' ? 'fullWidth-input' :''}`}>
            <p className={styleDesc(fullDesc)}>{fullDesc}</p>
            <p className={setErrorText(inputError, fullDesc)}>{text}</p>
            <span className={`${positionIcon === 'startIcon' ? 'startIcon' : 'hide' }`}></span>
             <input type="text"
                    placeholder={`${setPlaceholder(fullDesc)}`}
                    value={setValue(fullDesc)}
                     className= {`${positionIcon === 'startIcon' ? 'icon-input-before' : ''}
                                  ${setDisabled(isDisabled)} 
                                  ${setError(inputError)}
                                  ${setSize(inputSize)}
                                  ${showcaseStates(fullDesc,inputError)}
                                  ${setHoverAndFocus(fullDesc)}
                    `}
            />
            <span className={`${positionIcon === 'endIcon' ? 'endIcon' : 'hide' }`}></span>
            <textarea name="" 
                      rows={setRows(fullDesc)} 
                      placeholder="Placeholder"
                      className={hideElement(inputSize)}          
            ></textarea>

            <p className={`${showAdditionalText(fullDesc)}
                             ${setErrorText(inputError, fullDesc)}
                             hide`
                         }>Some interesting text</p>
        </div>
    )
}

export default InputBox