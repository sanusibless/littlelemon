import React, { useState } from "react"

export default function Answer({ answer, showAnswer, id, index}) {
    
    return (
        <div className="answer">
            <p>{ (showAnswer && id==index) && answer}</p>
        </div>
    )
}