import React from 'react'

export default function BookForm() {
  return (
    <div className='book-form'>
                <form style={{display : 'grid', maxWidth: '200px', gap: '20px'}}>
                    <div className='form-group'>
                        <label for="res-date">Choose date</label>
                        <input type="date" id="res-date" />
                    </div>
                    <div className='form-group'>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time ">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    </div>
                    <div>
                      <label for="guests">Number of guests</label>
                      <input type="number" placeholder="1" min="1" max="10" id="guests" />
                    </div>
                    <div className='form-group'> 
                      <label for="occasion">Occasion</label>
                      <select id="occasion">
                          <option>Birthday</option>
                          <option>Anniversary</option>
                      </select>
                    </div>
                    <div>
                      <input type="submit" value="Make Your reservation" />
                    </div>
            </form>
    </div>
  )
}
