import React from 'react';
import Specials from './Specials';
import Testimonials from './Testimonials';
import AllChefs from './AllChefs';


export default function Main() {
    return <>
        <main>
            <Specials />
            <Testimonials />
            <AllChefs />
        </main>
    </>
}