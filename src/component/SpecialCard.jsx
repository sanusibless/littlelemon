import React from 'react'

export default function SpecialCard({ name, src, body, price}) {
    let formatter = new Intl.NumberFormat('en-NG',
        {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        price = formatter.format(price);

        return (
            <div className="specials-card">
                <div className="specials-img">
                    <img src={src} alt={ name + "'s picture"} />
                </div> 
                <div className="meal-body">
                    <div className="meal-header">
                        <h3>{name}</h3>
                        <h4>{price}</h4>
                    </div>
                    <div >
                        {body}
                    </div>
                    <div className="meal-order">
                        <a href="">Add to order </a>
                    </div>
                </div>
            </div>
    )
}