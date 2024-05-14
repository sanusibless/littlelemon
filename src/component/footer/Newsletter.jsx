import React from 'react'

export default function Newsletter() {
  return (
    <div>
        <h3 className="footer-title">Newsletter</h3>
        <p>Do you want to receive Newsletter about latest meals</p>
        <div className='newsletter'>
            <form>
                <input name='email' type='email' className='newsletter-input' placeholder='Enter your email'/>
                <button className='newsletter-btn'>
                    Subscribe
                </button>
            </form>
        </div>
    </div>
  )
}
