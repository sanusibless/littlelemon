

import { faFacebookF, faInstagram, faLinkedin, faStackOverflow, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

export default function Contact() {
    return ( 
        <div>
            <h3 className="footer-title">Contact</h3>
            <ul className="contact-menu">
                <li>40, Kunyami Street, Gosa Toge, Abuja, NG</li>
                <li>+234 813 366 7142</li>
                <li>info@litlelemon.com</li>
                <li className='contact-social-icon'>
                    <span><FontAwesomeIcon icon={faFacebookF} /></span>
                    <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                    <span><FontAwesomeIcon icon={faLinkedin} /></span>
                    <span><FontAwesomeIcon icon={faStackOverflow} /></span>
                    <span><FontAwesomeIcon icon={faInstagram} /></span>
                    <span><FontAwesomeIcon icon={faTwitter} /></span>
                    <span><FontAwesomeIcon icon={faTelegram} /></span>
                </li>
            </ul>
        </div>
    )
}