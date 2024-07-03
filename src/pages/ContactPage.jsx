import React from "react"
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
   
      function clearError(e) {
      const { name } = e.target;
      setError( prevErr => {
        delete prevErr[name];
        return prevErr
      });
     }
  
     function handleChange(e) {
      const { name, value} = e.target;
        
        if (value == '' || value.length <= 1) {
          setError(prevErr => ({
            ...prevErr,
            [name] :  name + ' is required'
          }))
        }

        setData( prevData => ({
          ...prevData,
          [e.target.name] : e.target.value
        }))
      }
  
     function validateData(data) {
      let valid = true;
  
      for(const key of Object.keys(data) ) {
        if(key == 'specialRequest') {
          continue
        }
        if(data[key] == 0 || (data[key] == '' || data[key].length <= 0) ) {
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
        setDiplayResponse(true);
        setResponse({
          status: 'success',
          message: 'Thanks for leaving a message. We will get back to your shortly'
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
                        <input onFocus={clearError} onChange={handleChange} className='contact-input' type="text" name="name" />
                    </div>
                    <div>
                        <label className="contact-label">Email</label>
                        <input onFocus={clearError} onChange={handleChange} className='contact-input' type="email" name="email" />
                    </div>
                    <div>
                        <label className="contact-label" >Phone</label>
                        <input onFocus={clearError} onChange={handleChange} className='contact-input' name="phone" type="tel" pattern="0[7-9][0-1][0-9]{8}" />
                    </div>
                    <div>
                        <label className="contact-label">Leave a message</label>
                        <textarea onFocus={clearError} name="message">

                        </textarea>
                    </div>
                    <div className="contact-btn-div">
                        <button className="contact-btn">
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