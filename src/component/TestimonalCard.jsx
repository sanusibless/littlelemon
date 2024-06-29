import React from 'react'

export default function TestimonialCard({ img, name, message, profession }) {
    return (
        <div className="testimonial-card">
            <i className=""></i>
            <p className="testimonial-msg">{message}</p>
            <div className="testimonial-avatar">
                <img className="testimonial-img" src={img} />
                <div className="testimonial-details">
                    <h5 className="">{name}</h5>
                    <p>{profession}</p>
                </div>
            </div>
        </div>
    )
}