import React, { useState } from "react"

export default function Question({ question, handleShowAnswer, showAnswer, id, index }) {
    return (
        <div className="question" onClick={() => { handleShowAnswer (id)}}>
            <h3 className="ques-header"><span>{ question }</span> <span>{
                (showAnswer && id==index) ? "x" : ""
            }</span></h3>
            
        </div>
    )
}