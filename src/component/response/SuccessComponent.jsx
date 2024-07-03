import React from "react";

export default function SuccessComponent({message, onCancelMessage}) {
    return (
        <div className="success-com">
            <p>{message}</p>
            <span onClick={onCancelMessage} className="cancel-button">x</span>
        </div>
    )
}