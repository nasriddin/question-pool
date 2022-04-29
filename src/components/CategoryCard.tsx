import React from 'react'
import Category from '../models/category';
// @ts-ignore
import style from './CategoryCard.module.css'
import CardWrapper from "./CardWrapper";

interface Props {
    category: Category,
}

const CategoryCard:React.FC<Props> = ({category})=>{

    return(
        <CardWrapper>
            <div className={style["card__category"]}>
                <img className={style["card__category-img"]} src={category.image} />
                <div className={style["card__category-title"]}>{category.title}</div>
                <div className={style["card__category-about"]}>{category.about}</div>
                {/* TODO: button UI component */}
                <a href={`category/${category.id}`} className={"button__page-primary"}>Take Test</a>
            </div>
        </CardWrapper>
    )
}

export default CategoryCard;
