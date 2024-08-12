import Header from "../Header";
import BookForm from "./BookForm";
import BookImage from "./BookImage";
import React, { useReducer } from 'react'

import { fetchAPI, submitAPI } from '../../helper';

import '../../App.css';
import Footer from "../Footer";


export function updateTimes(state, action) {
    switch(action.type) {
        case "SELECTED" : {
            return fetchAPI(action.date)
        }
        
        case "FETCH_DATE" : {
            return fetchAPI(action.date)
        }
    }

    throw Error('Unknown action: ' + action.type);
}

export function initializeTimes() {
   
    const date = new Date();
    return fetchAPI(date);
}
export default function BookDiv() {
    const [availableTimes, dispatch ] = useReducer(updateTimes, null, initializeTimes);

    return (
        <>
            <Header />
                <div className="book-div">
                    <BookImage />
                    <BookForm availableTimes={availableTimes} dispatch={dispatch} submitAPI={submitAPI} />
                </div>
            <Footer />
        </>
        
    )
}