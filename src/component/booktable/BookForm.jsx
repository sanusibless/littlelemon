import React from 'react'

export default function BookForm() {
  return (
    <div className='book-form'>
            
            <form>
                <div className='form-container'>
                    <div>
                    <h2 >Reservation</h2>
                    <h4 >Book a table online</h4>
                    </div>
                    <div className='form-group'>
                        <div className='form-control'>
                            <input type='text' name="fullname" placeholder='Your Name' />
                        </div>
                        <div className='form-control'>
                            <input type='email' name='email' placeholder='Your Email' />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-control'>
                            <label id='reservation-date'>Date</label>
                            <input htmlFor="reservation-date" type='date' name='reservation-date' placeholder='Date'/>
                        </div>
                        <div className='form-control'>
                            <label id='reservation-time'>Time</label>
                            <input type='time' htmlFor ="reservation-time" name='reservation-time' placeholder='Time' />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-control'>
                            <label htmlFor='numberofpeople' >Number of people :</label>
                        </div>
                        <div className='form-control'>
                            <select  className='form-select' name='numberofpeople'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>
                        </div>
                        <div className="">
                            <label>Special Order</label>
                            <textarea>
                            </textarea>
                        </div>
                    <div className='form-group'>
                        <button className='form-control form-btn'>Book Now</button>
                    </div>
                </div>
        </form>
    </div>
  )
}
