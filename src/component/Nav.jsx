
import { Link } from "react-router-dom"
import image from "../icons_assets/Logo.svg"
import React from 'react'

export default function Nav() {
    return <nav className='nav-container'>
            <div className='nav-logo'>
                <img src={image} className="" alt="logo" />
            </div>
            <div>
            <ul className='menu'>
                <Link className='link' to="/" >Home</Link>
                <Link className='link' to="/booking" >Reservations</Link>
                <Link className='link' to="/menus" >Menus</Link>
                <Link className='link' to="/contact-us">Contacts</Link>
                <Link className='link' to="/faqs">FAQs</Link>
                <Link className='link' to="/Login">Login</Link>
            </ul>
            </div>
        </nav>
}
