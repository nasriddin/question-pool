import React from 'react';
// @ts-ignore
import styles from './CategorySelect.module.css'


const CategorySelect:React.FC = () =>{

    return (
        <div>
            <label htmlFor="selection" className={styles["select-label"]}>Create Category</label>
            <select name="" id="" className={styles["select__selection-form"]}>
                <option value="" className={styles["select__selection-option"]}>Value</option>
                <option value="" className={styles["select__selection-option"]}>Value</option>
                <option value="" className={styles["select__selection-option"]}>Value</option>
                <option value="" className={styles["select__selection-option"]}>Value</option>
                <option value="" className={styles["select__selection-option"]}>Value</option>
            </select>
        </div>

    )
}
export default CategorySelect;
