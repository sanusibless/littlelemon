import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MenuCard({ categoryMenus, onHandleCategory, activeCategory }) {
    if(categoryMenus.length == 0) {
        onHandleCategory(activeCategory);
    }
    let formatter = new Intl.NumberFormat('en-NG',
        {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        let price = formatter.format(1000)

       //  price = formatter.format(price);
       //  "strMeal": "Beef and Mustard Pie",
       //  "strMealThumb": "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",

    return (
        <div className="menu-card">
            {categoryMenus.map( categoryMenu => {
                const { strMeal, strMealThumb} = categoryMenu
                return <div key={strMeal} className="menu-card-item">
                            <div>
                                <img className="meal-image" src={strMealThumb} alt={ strMeal + "'s picture"} />
                            </div>
                            <div>
                                <h5 className="meal-title"><span>{strMeal.substring(0, 20)}</span></h5>
                                <h5 className="meal-title">Price : <small>{price}</small></h5>
                                <div className="meal-link-div">
                                    <Link className="meal-link" to="/view-meal">view</Link>
                                    <Link className="meal-link" to="/order-meal">order</Link>
                                </div>
                            </div>
                        </div>
             } )}
        </div>
    )
}