import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { signUp , login} from '../../services/user-service'
const LoginSignup = () => {

    const [action,setAction] = useState("Login")
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            if (action === "Sign Up") {
                const response = await signUp(formData);
                alert(response); // Display success message
            } else {
                const response = await login({ email: formData.email, password: formData.password });
                alert(response); // Display login success message
            }
        } catch (error) {
            alert("An error occurred: " + (error.response?.data || error.message));
        }
    };

  return (
    <div className="container">
      <div className="header">
        <div className="text">
            {action}
        </div>
        <div className="underline"></div>

        <div className="inputs">

            {action==="Login"?<div></div>:   <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}
         

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email-Id'/>
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">
            Forgot Password ?
            <span>Click Here</span>
        </div>}
       

        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                Sign Up
            </div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>
                Log In 
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
