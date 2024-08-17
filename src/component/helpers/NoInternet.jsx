import React from "react";

export default function () {
    return (
        <div className="no-internet">
            <h3>
                Hmm. We're having trouble finding that site.
            </h3>

            <p>We can't connect to the server at www.jw.org.</p>
            <p>If you entered the right address, you can:</p>

            <ul>
                <li>Try again later</li>
                <li>Check your network connection</li>
            </ul>
        </div>
    )
}