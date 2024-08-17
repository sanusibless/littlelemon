import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuList from "./MenuList";
import api from '../../api/menus_api'
import MenuCard from "./MenuCard";
import ResponseComponent from "../response/ResponseComponent"
import Loading from "../helpers/Loading";
import NoInternet from "../helpers/NoInternet";



export default function MenusComponent() {
    const [categories, setCategories] = useState([]);
    const [categoryMenus, setCategoryMenus] = useState([]);
    const [category, setCategory] = useState("Beef");
    const [response, setResponse] = useState({});
    const [displayResponse, setDiplayResponse] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showNoInternet, setShowNoInternet] = useState(false);

   function handleCategory(category) {
        setLoading(true);

        fetch(api.categoryMenus + category)
        .then( data => data.json()).
        then( data => { 
            setCategoryMenus(data.meals);
            setCategory(category);

         }).catch( err => {
            if(err.name == 'NetworkError') {
                setShowNoInternet(true);
            } else {
                errorResponse("Something went wrong, try again later")
            }
        });

        setLoading(false);
    } 

    function errorResponse(err) {
        setDiplayResponse(true);
        setResponse({
          status : 'error',
          message: err
        });
    }
        
    function cancelMessages() {
        setDiplayResponse(false);
    }
    
    useEffect(() => {

        // console.log(api.categoriesList);
        fetch(api.categoriesList)
        .then( data => data.json()).
        then( data => { 
            setCategories(data.meals);
         })
         .catch( err => {
            console.log(err.name)
            if(err.name == 'TypeError') {
                setShowNoInternet(true);
            } else {
                errorResponse("Something went wrong try again later")
            }
        });
    }, [])

    return (
        <>
            {
                showNoInternet ? <NoInternet /> : 
                (
                    <>
                        <Header />
                            <section className="menu-section">
                                <h1 className="menu-title">Our Menus</h1>
                                <div className="menu-div">
                                    <MenuList categories={categories} onHandleCategory={handleCategory} activeCategory={category}/>
                                { loading ? <Loading /> : <MenuCard categoryMenus={categoryMenus} onHandleCategory={handleCategory} activeCategory={category}/> }
                                </div>
                            </section>
                            {
                                displayResponse && <ResponseComponent {...response} onCancelMessage={cancelMessages}/>
                            }
                        <Footer />
                    </>
                )
            }
        </>
    )
}