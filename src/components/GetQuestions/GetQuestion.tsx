import React from "react";
import CardWrapper from "../CardWrapper";
// @ts-ignore
import style from './GetQuestion.module.css'

const GetQuestion: React.FC = () => {

    return (
        <CardWrapper>
            <div className={style["question__header"]}>
                <h2>Create Question</h2>
            </div>
            <div className={style["question__body"]}>
                <div className={style["form__group"]}>
                    <label htmlFor="question">Question Name</label>
                    <input type="text" name={"question"} className={style["form__group-input"]}/>
                </div>
                <div className={style["form__group"]}>
                    <label htmlFor="answer">Question Name</label>
                    <input type="text" name={"answer"} className={style["form__group-input"]}/>
                </div>
                <div className={style["form__group"]}>
                    <label htmlFor="answer1">Question Name</label>
                    <input type="text" name={"answer2"} className={style["form__group-input"]}/>
                </div>
                <div className={style["form__group"]}>
                    <label htmlFor="answer3">Question Name</label>
                    <input type="text" name={"answer3"} className={style["form__group-input"]}/>
                </div>
                <div className={style["form__group"]}>
                    <label htmlFor="answer4">Question Name</label>
                    <input type="text" name={"answer4"} className={style["form__group-input"]}/>
                </div>
            </div>
        </CardWrapper>
    )
}
export default GetQuestion;
