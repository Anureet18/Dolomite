import React, { useEffect, useRef, useState } from "react";
import Home from "./Log";
import './SignIn.css';
import { useNavigate } from "react-router-dom";

function SignIn(){
   const name = useRef()
   const email = useRef()
   const password = useRef()
   const navigate = useNavigate()
   const [showHome,setShowHome] = useState(false)
   const [show,setShow] = useState(false)

   const handleClick=()=>{
       if(name.current.value && email.current.value && password.current.value)
       {
          setShow(true)
          setShowHome(true)
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",show)
        alert("Account created successfully!!")
        if(show){
            navigate("/shop")
        }
      }
      else{
        alert("Please  enter valid credentials")
      }
   }

    return(
        <div>
            {showHome?<Home setShowHome={setShowHome}/>:
                <div className="log">
                    <div className="log-in">
                        <h1>Log In</h1>
                        <div className="input_space">
                            <input className="input-login" placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input className="input-login" placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input className="input-login" placeholder="Password" type='password' ref={password} />
                        </div>
                        <button className="signbtn" onClick={handleClick}>Sign Up</button>
                    </div>
                </div>
            }
        </div>
    );
}
export default SignIn;