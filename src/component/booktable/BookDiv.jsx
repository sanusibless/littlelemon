import Header from "../Header";
import BookForm from "./BookForm";
import BookImage from "./BookImage";
import React from 'react'

import '../../App.css';
import Footer from "../Footer";

export default function BookDiv() {
    return (
        <>
            <Header />
            <div className="book-div">
                <BookImage />
                <BookForm />
            </div>
            <Footer />
        </>
        
    )
}