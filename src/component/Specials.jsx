import SpecialCard from "./SpecialCard";
import greekSalad from "../icons_assets/greek salad.jpg";
import lemonDessert from "../icons_assets/lemon dessert.jpg";
import organicFood from "../icons_assets/organic food.jpeg";
import React from 'react'
 
export default function Specials() {
    let body = "This will be the descrtiption for the meals, so mesmerizing, a lot of people will benefit from the use of this app";
    const meals = [
        {
            name: "Apple Pie",
            price: 1500,
            src: greekSalad,
            body
        },
        {
            name: "Lemon Desert",
            price: 2500,
            src: lemonDessert,
            body
        },
        {
            name: "Maccaroni",
            price: 3000,
            src: organicFood,
            body
        }
    ]
    return (
        <section className="specials">
            <div className="specials-container">
                <div className="specials-header">
                    <h1 className="special-title">Specials</h1>
                    <h2><a href="/order-online" className="order-btn">Order Online</a></h2>
                </div>
                <div className="specials-meals">
                    {
                        meals.map( (meal, index) => {
                            return <SpecialCard key={meal.name} {...meal}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}