import React from 'react'
import Category from '../models/category';
import style from './CategoryCard.module.css'

interface Props {
    category: Category,
}

const CategoryCard:React.FC<Props> = ({category})=>{

    return(
        <div className={style["card__category"]}>
            <img className={style["card__category-img"]} src={category.image} />
            <div className={style["card__category-title"]}>{category.title}</div>
            <div className={style["card__category-about"]}>{category.about}</div>
            {/* TODO: button UI component */}
            <a href={`category/${category.id}`}>Take Test</a>
        </div>
    )
}

export default CategoryCard;