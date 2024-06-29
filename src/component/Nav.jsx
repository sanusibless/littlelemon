import { Link, Routes}  from 'react';
import image from "../icons_assets/Logo.svg"
import React from 'react'

export default function Nav() {
    return <nav className='nav-container'>
            <div className='nav-logo'>
                <img src={image} className="" alt="logo" />
            </div>
            <div>
            <ul className='menu'>
                <Routes>
                </Routes>
            </ul>
            </div>
        </nav>
}
