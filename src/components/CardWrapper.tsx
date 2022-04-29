import React from 'react'
// @ts-ignore
import style from './CardWrapper.module.css'
import Category from "../models/category";
import Props from "../models/reactChild";


const CardWrapper:React.FC<Props> = ({children})=>{

    // @ts-ignore
    return(
        <div className={style["card__wrapper"]}>
            {children}
        </div>
    )
}

export default CardWrapper;
