import React, { useState, useRef } from 'react';
import ResponseComponent from '../response/ResponseComponent';
import { useNavigate } from 'react-router-dom';

export default function BookForm({ availableTimes, dispatch, submitAPI }) {

    const [data, setData] = useState({
      date: '',
      time: '',
      numberOfGuests: 0,
      specialRequest: '',
      occassion: '',
    })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [response, setResponse] = useState({});
    const [displayResponse, setDiplayResponse] = useState(false);
    const navigate = useNavigate();
 
    function clearError(e) {
    const { name } = e.target;
    setError( prevErr => {
      delete prevErr[name];
      return prevErr
    });
   }

   function handleChange(e) {
    clearError(e);
    const { name, value} = e.target;
      if(name == 'numberOfGuests') {
        if(value > 0) {
          setError( prevErr => {
            delete prevErr[name];
            return prevErr
          })
        } else {
          setError(prevErr => ({
            ...prevErr,
            [name] : 'number of quests is required'
          }))
        }
      } else if( name == 'specialRequest') {
          
      }else if( name === 'date') {
        let date = new Date(value);
        dispatch({ type: "FETCH_DATE", date: date });
      }
      else if (value == '' || value.length <= 1) {
        setError(prevErr => ({
          ...prevErr,
          [name] : name == 'numberOfGuests' ? 'number of quests is required' : name + ' is required'
        }))
      }

      setData( prevData => ({
        ...prevData,
        [name] : value
      }))
    }

   function validateData(data) {
    let valid = true;

    for(const key of Object.keys(data) ) {
      
      if(key == 'specialRequest') {
        continue;
      }else if(data[key] == 0 || (data[key] == '' || data[key].length <= 0) ) {

        setError(prevErr => ({
          ...prevErr,
          [key]: key == 'numberOfGuests' ? 'number of quests is required' : key + ' is required'
        }))

        valid = false;
      }
    }

    console.log(error);
    
    return valid;
   }

    function successResponse() 
    {
      setDiplayResponse(true);
      setResponse({
        status: 'success',
        message: 'Table Successfull Reserved'
      })
      setData({
        date: '',
        time: '',
        numberOfGuests: 0,
        specialRequest: '',
        occassion: '',
      });
      setError({});
    }

  function errorResponse() {
    setDiplayResponse(true);
    setResponse({
      status : 'error',
      message: 'Please check inputs and try again'
    })
    // setDiplayResponse(false);
  }
  
 const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(data);
    if(validateData(data)) {
      dispatch({ type: "SELECTED", date: new Date(data.date) });
      setLoading(true);
      if(submitAPI(data)) {
        let getReservations = localStorage.getItem("reservation") ?? [];
        getReservations.push(data);
        localStorage.setItem("reservations", getReservations);
        navigate('/confirmed-booking');
      }
    }
  }

  function cancelMessages() {
    setDiplayResponse(false);
  }

  return (
    <div className='book-form'>
        <h2 style={{ textAlign: 'center', color: '#011a52' }}>Book  Now</h2>
                <form className='form-container' onSubmit={handleFormSubmission}>
                    <div className='form-group'>
                      <div className='form-div'>
                          <label className='form-label' htmlFor="res-date">Choose date</label>
                          <input onFocus={clearError} value={data.date} onChange={handleChange} name='date' className='form-control' type="date" id="res-date" />
                          { error && error.date != '' && <small className='error'>{error?.date}</small> }
                      </div>
                      <div className='form-div'>
                        <label className='form-label' htmlFor="res-time">Choose time</label>
                        <select onFocus={clearError} value={data.time} onChange={handleChange} name='time' className="form-select" id="res-time ">
                          <option key={"no-option"} value={""}>-- Select time --</option>
                          {
                            availableTimes.map( time => <option key={time} value={time}>{time}</option>)
                          }
                        </select>
                        { error && error.time != '' && <small className='error'>{error?.time}</small> }
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='form-div'>
                        <label className='form-label' htmlFor="guests">Number of guests</label>
                        <input onFocus={clearError} value={data.numberOfGuests} onChange={handleChange} name="numberOfGuests" className='form-control' type="number"  max="10" id="guests" />
                        { error && error.numberOfGuests != '' && <small className='error'>{error?.numberOfGuests}</small> }
                      </div>
                      <div className='form-div'> 
                        <label className='form-label' htmlFor="occasion">Occasion</label>
                        <select onFocus={clearError} value={data.occassion} onChange={handleChange} name="occassion" className="form-select" id="occasion">
                            <option value="">Choose occassion</option>
                            <option value='Anniversary'>Anniversary</option>
                            <option value='Graduation'>Graduation</option>
                            <option value='Dinner Date'>Dinner Date</option>
                            <option value='Hangout'>Dinner Date</option>
                            <option value='End of the year Dinner Night'>Dinner Night</option>
                        </select>
                        { error && error.occassion != '' && <small className='error'>{error?.occassion}</small> }
                      </div>
                    </div>

                    <textarea value={data.specialRequest} name='specialRequest' onChange={handleChange} >
                    </textarea>
                    { error && error.specialRequest != '' && <small className='error'>{error?.specialRequest}</small> }

                    <div className='form-btn'>
                      <button className='form-link' type="submit">
                          Book
                      </button>
                    </div>
            </form>

            {
              displayResponse && <ResponseComponent {...response} onCancelMessage={cancelMessages}/>
            }
    </div>
  )
}
