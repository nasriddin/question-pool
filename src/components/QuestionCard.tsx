import React from 'react'
import Question from '../models/quesiton';
import style from './QuesitonCard.module.css'


const QuesitonCard:React.FC<{question: Question}> = (props)=>{

    return(
        <div className={style["card__question"]}>
            <div className={style["card__question-header"]}>
                {/* TODO: implement number counter and time counter */}
                <span className={style["card__question-number"]}>1/30</span>
                <span className={style["card__question-timer"]}>00:15</span>
            </div>
            <div className={style["card__question-quesiton"]}>
                Q.1 What is like to have a lot of quesitons?
            </div>

            <div className={style["card__answers-container"]}>
                {props.question.answer.length > 0 ? 
                    props.question.answer.map((item, index)=>(
                        <div className={style["card__answers-answer"]} key={item.id}>
                            <span className={style["card__answers-number"]}>{index}</span>
                            <input type="radio" id="html" name="fav_language" value={item.answer} className={style["card__answers-circle"]} />
                            <label htmlFor={item.answer}>{item.answer}</label>
                        </div>
                    ))
                : 'Opps Something went wrong'}
            </div>
        
        </div>
    )
}

export default QuesitonCard;