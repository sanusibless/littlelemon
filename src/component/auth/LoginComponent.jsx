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
      } else if(value.length > 1) {
            if(name == 'email') {
                let emailPattern = /[A-Za-z]{1}.*@[A-Za-z]*\.[A-Za-z]*/;
                if(!emailPattern.test(value)) {
                    setError(prevErr => ({
                        ...prevErr,
                        [name] :  'Invalid ' + name
                      }))
                } else {
                    setError( prevErr => {
                        delete prevErr[name];
                        return prevErr
                      });
                }
            } else if(name == 'password') {
                let passwordPattern = /([A-Z]{1,})?([a-z]{1,})?([0-9]{1,})?([^\w\s\d]{1,})?/;

                if(value.length != 8) {
                    setError(prevErr => ({
                        ...prevErr,
                        [name] :  'Password must be 8 characters'
                      }))
                }

                if(!passwordPattern.test(value)) {
                    setError(prevErr => ({
                        ...prevErr,
                        [name] :  'Password must be contain at least one uppercase letter, one lowercase letter and one symbol'
                      }))
                } else {
                    setError( prevErr => {
                        delete prevErr[name];
                        return prevErr
                      });
                }
            }

      } else{
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

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data);

    }

    return <div className="login-div">
                <div className="login-logo">
                    <img src={logo} />
                </div>
                <div className="auth-form">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="contact-label login-label">Email</label>
                            <input value={data.email} onChange={handleChange} className='contact-input login-input' type="text" name="email" />
                            { error && error.email != '' && <small className='error'>{error?.email}</small>}
                        </div>
                        <div>
                            <label className="contact-label login-label" >Password</label>
                            <input value={data.password} onChange={handleChange} className='contact-input login-input' name="password" type="password" />

                            <div style={{ display : 'flex', justifyContent: 'space-between', marginTop: '5px'}}>
                            {error && error.password != '' && <small className='error'>{error?.password}</small> }
                             <small><Link to="" className="login-forgot">Forgot Password? </Link></small>
                            </div>
                        </div>
                        <div className="contact-btn-div login-btn-div">
                                <button type="submit" aria-label="On Submit" className="contact-btn login-btn">
                                    Sign in
                                </button>
                        </div>
                    </form>
                    <p style={{ color: '#011a52', textAlign: 'center'}}>Don't have an account? <Link to="/register"> Sign up</Link></p>
                </div>
    </div>
}