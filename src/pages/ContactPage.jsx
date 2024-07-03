import React, { useState } from "react"
import Header from "../component/Header"
import Footer from "../component/Footer"
import contactimg from "../icons_assets/img/contact-us1.jpg"
import ResponseComponent from "../component/response/ResponseComponent"


export default function ContactPage() {

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
      })
      const [error, setError] = useState({});
      const [response, setResponse] = useState({});
      const [displayResponse, setDiplayResponse] = useState(false);
      const [loading, setLoading] = useState(null)
   
      function clearError(e) {
      const { name } = e.target;
      setError( prevErr => {
        delete prevErr[name];
        return prevErr
      });
     }

        let prevent = false;
        for(const key of Object.keys(data)) {
            if(data[key] == '' || data[key].length <=1 ) prevent = true
        }

     function handleChange(e) {
      const { name, value} = e.target;
        if (value == '' || value.length <= 1) {
          setError(prevErr => ({
            ...prevErr,
            [name] :  name + ' is required'
          }))
    } else {
        setError( prevErr => {
            delete prevErr[name];
            return prevErr
          });
    }

        setData( prevData => ({
            ...prevData,
            [name] : value
        }))

      }
  
     function validateData(data) {
      let valid = true;
      for(const key of Object.keys(data) ) {
        if(data[key] == '' || data[key].length <= 1) {
          setError(prevErr => ({
            ...prevErr,
            [key] : key + ' is required'
          }))
          valid = false;
        }
      }
  
      console.log(error);
      
      return valid;
     }
  
        
      function successResponse() 
      {
        setLoading(true);
        setDiplayResponse(true);
        setResponse({
          status: 'success',
          message: 'Thanks for leaving a message. We will get back to your shortly'
        })
        setData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
        setError({});
        setTimeout(() => {
            setDiplayResponse(false)
            setLoading()
        }, 10000)

        setLoading(false)

      }
    
   const handleFormSubmission = (e) => {
      e.preventDefault();
      console.log(data);
      if(validateData(data)) {
        setLoading(true);
        successResponse();
      }
    }
  
    function cancelMessages() {
      setDiplayResponse(false);
    }
  
    return (
        <>
        <Header />
        <div className="contact-title"><h1>Contact Us</h1></div>
        <div className="contact-div">
            <div className="contact-img">
                <img src={contactimg} alt="A picture with means of communication icon"/>
            </div>
            <div className="contact-form">
                <form method="POST" onSubmit={handleFormSubmission}>
                    <h3>Feel Free to message us</h3>
                    <div>
                        <label className="contact-label" htmlFor="name">Name</label>
                        <input value={data.name} onChange={handleChange} className='contact-input' type="text" name="name" />
                        { error && error.name != '' && <small className='error'>{error?.name}</small> }
                    </div>
                    <div>
                        <label className="contact-label">Email</label>
                        <input value={data.email} onChange={handleChange} className='contact-input' type="email" name="email" />
                        { error && error.email != '' && <small className='error'>{error?.email}</small> }
                    </div>
                    <div>
                        <label className="contact-label" >Phone</label>
                        <input value={data.phone} onChange={handleChange} className='contact-input' name="phone" type="tel" pattern="0[7-9][0-1][0-9]{8}" />
                        { error && error.phone != '' && <small className='error'>{error?.phone}</small> }
                    </div>
                    <div>
                        <label className="contact-label">Leave a message</label>
                        <textarea  value={data.message} onChange={handleChange} name="message">

                        </textarea>
                        { error && error.message != '' && <small className='error'>{error?.message}</small> }
                    </div>
                    <div className="contact-btn-div">
                        <button type="submit" className="contact-btn">
                            Send
                        </button>
                    </div>
                </form>
            </div>
         </div>
         <Footer />

         {
        displayResponse && <ResponseComponent {...response} onCancelMessage={cancelMessages}/>
         }
        </>
    )
}