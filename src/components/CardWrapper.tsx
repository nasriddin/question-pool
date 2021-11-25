import React from 'react'
import style from './CardWrapper.module.css'

const CardWrapper:React.FC = (props)=>{

    return(
        <div className={style["card__wrapper"]}>
            {props.children}
        </div>
    )
}

export default CardWrapper;