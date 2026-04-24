import React from 'react'
import routes from "../../component/helpers/routes"


export default function Company() {
    return ( 
        <div>
            <h3 className="footer-title">Company </h3>
            <ul className="company-menu">
                <li><a href={routes.home}>About Us</a></li>
                <li><a href={routes.contact}>Contact Us</a></li>
                <li><a href={routes.book}>Reservation</a></li>
                <li><a href={routes.home}>Privacy and Policy</a></li>
                <li><a href={routes.home}>Terms & Condition</a></li>
            </ul>
        </div>
    )
}