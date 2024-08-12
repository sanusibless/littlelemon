import React, { useState } from "react"
import Question from "./Question"
import Answer from "./Answer"

const questionsAndAnswers = [
    {
        question: "What is the delivery time?",
        answer: "Delivery time is dependent on the proximity of the customer ordering from us. But we make use we satisfy the needs of our customers by getting thier orders to them as soon as possible"
    },
    {
        question: "What is the delivery time?",
        answer: "Delivery time is dependent on the proximity of the customer ordering from us. But we make use we satisfy the needs of our customers by getting thier orders to them as soon as possible"
    },
    {
        question: "What is the delivery time?",
        answer: "Delivery time is dependent on the proximity of the customer ordering from us. But we make use we satisfy the needs of our customers by getting thier orders to them as soon as possible"
    }
]

export default function FAQs() {
    const [showAnswer, setShowAnswer] = useState(true);
    const [index, setIndex] = useState(0);

    const handleShowAnswer = id => {
        setShowAnswer(false)
        setIndex(id)
        setShowAnswer(true)
    }

    return (
        <div className="faqs">
            <h2 style={{ paddingLeft: '2vw' }}>Frequently Asked Questions</h2>
            {
                questionsAndAnswers.map( (qans, id) => {
                    return (
                        <div key={id}>
                            <Question id={id} question={qans.question} handleShowAnswer={handleShowAnswer} index={index} showAnswer={showAnswer}/>
                            <Answer index={index} id={id} showAnswer={showAnswer} answer={qans.answer} />
                        </div>
                    )
                })
            }
        </div>
    )
}