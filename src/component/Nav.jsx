import { Link }  from 'react';
import image from "../icons_assets/Logo.svg"


export default function Nav() {
    return <nav className='nav-container'>
            <div className='nav-logo'>
                <img src={image} className="" alt="logo" />
            </div>
            <div>
            <ul className='menu'>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">Menu</a></li>
                <li><a href="/services">Reversations</a></li>
                <li><a href="/services">Order Online</a></li>
                <li><a href="/orders">Login</a></li>
            </ul>
            </div>
        </nav>
}