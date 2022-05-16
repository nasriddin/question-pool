import React from "react";
// @ts-ignore
import style from './InputContainer.module.css';

const InputContainer:React.FC = () => {
    return (
        <div className={style["form__group"]}>
            <label htmlFor="question">Question Name</label>
            <input type="text" name={"question"} className={style["form__group-input"]}/>
        </div>
    )
};
export default InputContainer;
