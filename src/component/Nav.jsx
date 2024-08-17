
import { Link, useLocation } from "react-router-dom"
import image from "../icons_assets/Logo.svg"
import React from 'react'

export default function Nav() {
    const { pathname } = useLocation();

    const links =[
        {
            to : "/",
            name: "Home"
        },
        {
            to : "/booking",
            name: "Reservations"
        },
        {
            to : "/menus",
            name: "Menus"
        },
        {
            to : "/contact-us",
            name: "Contact Us"
        },
        {
            to: "/faqs",
            name: "FAQs"
        },
        {
            to : "/login",
            name: "Login"
        }

    ]
    return <nav className='nav-container'>
            <div className='nav-logo'>
                <Link to='/'>
                    <img src={image} className="" alt="logo" />
                </Link>
            </div>
            <div>
            <ul className='menu'>
                {
                    links.map(({ to, name}) => {
                    return <Link key={name} className={ pathname == to ? "link link-active" : "link"} to={to}> 
                        {name} 
                    </Link> })
                }
            </ul>
            </div>
        </nav>
}
