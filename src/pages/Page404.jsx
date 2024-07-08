import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import img from '../icons_assets/img/404-error-isometric-illustration.png'

export default function Page404() {


    return (
        <div className="not-found-div">
            <div className="oops-img-div">
                <img src={img} alt="Oops Images" />
            </div>
            <div className="oops-text-div">
                <h1>Oops!</h1>
                <p>We couldn't find the page you were looking for</p>
                <p ><Link to="/" className="base-url">Go home page</Link></p>
            </div>
        </div>
    )
}