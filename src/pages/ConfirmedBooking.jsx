import React from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";

export default function ConfirmedBooking() 
{
    return (
        <>
                <section>
                    <h2>
                        Successfully Booked
                    </h2>
                    <p>You have success fully booked your self a table at out restaurant.
                        We can't wait to have you arround
                    </p>
                    <Link to="/">Go to home page</Link>
                </section>
        </>
    )
}