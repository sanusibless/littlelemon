import BookForm from "./BookForm";
import BookImage from "./BookImage";
import React from 'react'

export default function BookDiv() {
    return (
        <div className="book-div">
            <BookImage />
            <BookForm />
        </div>
    )
}