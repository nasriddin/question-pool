import React from "react";
import CardWrapper from "../CardWrapper";
// @ts-ignore
import style from "./Question.module.css";

const Question:React.FC = () =>{

    return(
        <CardWrapper>
            <div className={style["question__header"]}>
                <div className={style["question__header-number"]}>1/30</div>
                <div className={style["question__header-time"]}>00:15</div>
            </div>
            <div className={style["question__body"]}>
                <div className={style["question__body-question"]}>
                    Q.1 What to do with these?
                </div>
                <div className={style["question__body-answers"]}>
                    <div>
                        <input type="radio" className={style["question__body-answer"]} name={"test"} value={"testingVa"}/>
                        <label htmlFor="testingVa">Huey</label>
                    </div>
                    <div>
                        <input type="radio" className={style["question__body-answer"]} name={"test"} value={"testingval"}/>
                        <label htmlFor="testingval">Huey</label>
                    </div>
                    <div>
                        <input type="radio" className={style["question__body-answer"]} name={"test"} value={"testingvalue"}/>
                        <label htmlFor="testingvalue">Huey</label>
                    </div>
                </div>
            </div>
            <div className={style["question__footer"]}>
                Made by <span>@someone</span>
            </div>
        </CardWrapper>

    )
}
export default Question;
