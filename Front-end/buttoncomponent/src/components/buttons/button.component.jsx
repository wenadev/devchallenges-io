import React from "react";
import './button.styles.css';

class Button extends React.Component{
    constructor(props){
        super(props);

        this.state={
            fullDesc : props.fullDesc,
            btnColor: props.btnColor,
            text: props.text,
            btnVariant: props.btnVariant,
            disableShadow:props.disableShadow,
            isDisabled:props.isDisabled,
            btnSize:props.btnSize,
            positionIcon:props.positionIcon

        }
    }
    
    render(){

        let {fullDesc, btnColor, text, 
            btnVariant, disableShadow, 
            isDisabled, btnSize, positionIcon} = this.state

        function setColor(color){
            if (color === 'default'){
                return 'default'
            }
    
            else if(color === 'primary'){
                return 'primary'
            }
    
            else if(color === 'secondary'){
                return 'secondary'
            }
    
            else if (color === 'danger'){
                return 'danger'
            }
    
            else return ''
    
        }
    
        function setVariant(variant,desc){
            if(variant === 'text'){
                return ', variantText'
            }
    
            else if (variant === 'outline'){
                return ', variantOutline'
            }
    
            else return ''
        }
    
        function setShadow(bool){
            if (bool === false) return ', btnShadow'
    
            else return ''
        }
    
        function disableButton(bool){
            if(bool) return ', disabled'
            else return ''
        }
    
        function setSize(size){
            if(size === 'sm'){
                return ', btnSmall'
            }
    
            else if(size === 'md'){
                return ', btnMid'
            }
    
            else if(size === 'lg'){
                return ', btnLarge'
            }
    
            else return ''
        }
    
        function setIcon(icon){
            if(icon === 'startIcon'){
                return ', startIcon'
            }
    
            else if(icon === 'endIcon'){
                return ', endIcon'
            }

            else return ''
        }
    
        function setHoverAndFocus(color, desc, variant){
            if(desc.includes('hover') || desc === ''){
                if(!desc.includes('Button')){
                if(color === null || color === 'default'){
                    return ', default-hover-focus'
                }
    
                else if(variant === 'outline'){
                    return ', outline-hover-focus'
                }
    
                else if(variant === 'text'){
                    return ', text-hover-focus'
                }
    
                else if(color === 'primary'){
                    return ', primary-hover-focus'
                }
                else if(color === 'secondary'){
                    return ', sec-hover-focus'
                }
    
                else if(color === 'danger'){
                    return ', danger-hover-focus'
                }

                else return ''
            }
            }

            else if(desc.includes('Button')){
                if(color === 'default'){
                    return ', default'
                }

                else if(color === 'primary'){
                    return ', primary'
                }

                else if(color === 'secondary'){
                    return ', secondary'
                }

                else if(color === 'danger'){
                    return ', danger'
                }

                else if(variant === 'outline'){
                    return ', variantOutline'
                }

                else if(variant === 'text' && (desc.includes('disabled'))){
                    return ', textHover'
                }

                else return ''
            }
    
            else return ''
        }
        
        return (
            <div className="btn">
                <p style={{color : fullDesc === '&:hover, &:focus' ? '#b5b5b6' : '#2b2f4d', fontWeight:600}}>{fullDesc === null ? 'empty':fullDesc}</p>
                <button 
                    className={`${setColor(btnColor)} 
                                ${setVariant(btnVariant, fullDesc)}
                                ${setShadow(disableShadow)}
                                ${disableButton(isDisabled)}
                                ${setSize(btnSize)}
                                ${setIcon(positionIcon)}
                                ${setHoverAndFocus(btnColor,fullDesc, btnVariant)}
                                `}>
                    {text}
                </button>
            </div>
        )
    }
}

export default Button;