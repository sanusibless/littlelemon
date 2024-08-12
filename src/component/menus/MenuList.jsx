import React, { useEffect, useState } from "react";
import axios from 'axios';
export default function MenuList({categories, activeCategory, onHandleCategory}) {


    return ( 
        <div className="menu-category">
            <h2>Categories</h2>
            <ul className="menu-item-list">
                {categories.map( (category) => {
                    let cssClass = 'normal';
                    if(category.strCategory == activeCategory) {
                        cssClass += ' active'
                    }
                    return <li key={category.strCategory} className={cssClass} onClick={() => onHandleCategory(category.strCategory ?? 'Beef')} key={category.strCategory}>
                              {category.strCategory}
                            </li>
                    })}
            </ul>
        </div>
    )

}