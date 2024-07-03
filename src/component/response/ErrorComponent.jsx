import React from "react";

export default function ErrorComponent({message, onCancelMessage}) {
    return (
        <div className="error-com">
           <p>{message}</p>
           <span onClick={onCancelMessage} className="cancel-button">x</span>
        </div>
    )
}