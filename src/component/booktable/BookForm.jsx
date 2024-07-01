import React from 'react'

export default function BookForm() {
  return (
    <div className='book-form'>
        <h2 style={{ textAlign: 'center', color: '#011a52' }}>Book Table Now</h2>
                <form className='form-container'>
                    <div className='form-group'>
                      <div className='form-div'>
                          <label className='form-label' htmlFor="res-date">Choose date</label>
                          <input className='form-control' type="date" id="res-date" />
                      </div>
                      <div className='form-div'>
                        <label className='form-label' htmlFor="res-time">Choose time</label>
                        <select className="form-select" id="res-time ">
                          <option>17:00</option>
                          <option>18:00</option>
                          <option>19:00</option>
                          <option>20:00</option>
                          <option>21:00</option>
                          <option>22:00</option>
                        </select>
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='form-div'>
                        <label className='form-label' htmlFor="guests">Number of guests</label>
                        <input className='form-control' type="number" placeholder="1" min="1" max="10" id="guests" />
                      </div>
                      <div className='form-div'> 
                        <label className='form-label' htmlFor="occasion">Occasion</label>
                        <select className="form-select" id="occasion">
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Graduation</option>
                            <option>Dinner Date</option>
                        </select>
                      </div>
                    </div>
                    <textarea>

                    </textarea>
                    <div className='form-btn'>
                      <input className='form-link' type="submit" value="Book Now" />
                    </div>
            </form>
    </div>
  )
}
