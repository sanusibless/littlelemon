import React from "react";
import SuccessComponent from "./SuccessComponent";
import ErrorComponent from "./ErrorComponent";

export default function ResponseComponent({ status, message, onCancelMessage }) {
    

    return (
        <div>
            { status == 'success' ? <SuccessComponent message={message} onCancelMessage={onCancelMessage} /> : <ErrorComponent message={message} onCancelMessage ={onCancelMessage} /> }
        </div>
    )
}