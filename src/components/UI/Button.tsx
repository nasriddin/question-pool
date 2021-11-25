import React from 'react'
import style from './Button.module.css'



const Button:React.FC<{variant: 'success' | 'error'}> = (props)=>{

    return(
        <button className={ `${style[`btn__${props.variant}`]} ${style['btn']}`}>
            {props.children}
        </button>
    )
}

export default Button;