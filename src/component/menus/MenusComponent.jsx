import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuList from "./MenuList";
import api from '../../api/menus_api'
import MenuCard from "./MenuCard";



export default function MenusComponent() {
    const [categories, setCategories] = useState([]);
    const [categoryMenus, setCategoryMenus] = useState([]);
    const [category, setCategory] = useState("Beef");
    const [error, setError] = useState({})

   function handleCategory(category) {

        fetch(api.categoryMenus + category)
        .then( data => data.json()).
        then( data => { 
            setCategoryMenus(data.meals);
            setCategory(category);
         }).catch( err => setError(err));
    } 

    useEffect(() => {

        // console.log(api.categoriesList);
        fetch(api.categoriesList)
        .then( data => data.json()).
        then( data => { 
            // console.log(data.meals)
           setCategories(data.meals);
         })
        .catch(err => console.log(err));
    }, [categories])

    return (
        <>  
            <Header />
                <section className="menu-section">
                    <h1 className="menu-title">Our Menus</h1>
                    <div className="menu-div">
                        <MenuList categories={categories} onHandleCategory={handleCategory} activeCategory={category}/>
                        <MenuCard categoryMenus={categoryMenus} onHandleCategory={handleCategory}/>
                    </div>
                </section>
            <Footer />
        </>
    )
}