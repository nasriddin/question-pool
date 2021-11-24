import React from "react"
import style from './Navbar.module.css'
import Menu from '../models/menu'


const Navbar: React.FC<{menus: Menu[]}> = (props)=>{


    return(
        <div className={style.navbar}>
            <div className={style["navbar__logo-container"]}>
                <img className={style['navbar__logo-image']} src="./assets/images/logo.png" />
                <span className={style['navbar__logo-text']}>Question pool</span>
            </div>
            <div className={style["navbar__menu-container"]}>
                {props.menus.map(item=>(
                    <a className={style["navbar__menu-item"]} href={item.link}>
                        {item.name}
                    </a>
                ))}
                <div className={style["navbar__avatar-container"]}>
                    {/* TODO: add user logo */}
                    
                    {/* <img src="" className={style["navbar__avatar-image"]} alt="" /> */}
                </div>
            </div>
        </div>
    );
}
export default Navbar; 