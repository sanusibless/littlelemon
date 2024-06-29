import src from '../icons_assets/restauranfood.jpg'
import React from 'react'
export default function IntroImage() {
    return <div className='intro-image'>
        <img src={src} alt="Food in the kitchen" className='intro-img' />
    </div>
}