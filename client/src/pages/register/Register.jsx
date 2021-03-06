import { useRef } from "react";
import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./register.scss";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState('')
  const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL})
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef()
 const history = useHistory()
  const handleStart = () => {
    setEmail(emailRef.current.value);
    
  };
  const handleFinish = async (e) => {
e.preventDefault()
    try{
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value)
    await axiosInstance.post('auth/register', {email, username, password})
    
    history.push('/login')
    }catch (err){
      console.log(err)
    }
  };

 const signIn = () => (history.push('/login'))
  
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <div><button className="loginButton" > Sign In</button></div>
        </div>
      </div>
      
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
