import React, { useState } from "react";
import logo from "../../icons_assets/Logo.svg";
import { Link } from "react-router-dom";


export default function LoginComponent() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState({
    })

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

    return <div className="login-div">
                <div className="login-logo">
                    <img src={logo} />
                </div>
                <div className="auth-form">
                    <form>
                        <div>
                            <label className="contact-label">Email</label>
                            <input value={data.email} onChange={handleChange} className='contact-input login-input' type="email" name="email" />
                            { error && error.email != '' && <small className='error'>{error?.email}</small>}
                        </div>
                        <div>
                            <label className="contact-label" >password</label>
                            <input value={data.password} onChange={handleChange} className='contact-input login-input' name="password" type="password" />
                            <small><Link to="" >Forgot Password? </Link></small>
                            {error && error.password != '' && <small className='error'>{error?.password}</small> }
                            <div className="contact-btn-div">
                                <button type="submit" className="contact-btn">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
    </div>
}