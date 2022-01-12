import axios from 'axios'
import React, { useRef } from 'react'
import './register.css'
import { useHistory } from 'react-router'

const Register = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()

    const handleClick = async (e) => {
        e.preventDefault()
        if(passwordAgain.current.value !== password.current.value){
            alert('Passwords do not match!')
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try{
                const res = await axios.post("/auth/register", user)
                history.push('/login')
            }catch(err){
                console.error(err)
            }
        }
    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Social</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                         type="text" 
                         ref={username} 
                         placeholder='Username'
                         required 
                         className="loginInput" />
                        <input
                         type="email" 
                         ref={email} 
                         placeholder='Email'
                         required 
                         className="loginInput" />
                        <input
                         type="password" 
                         ref={password} 
                         placeholder='Password'
                         required 
                         minLength="6"
                         className="loginInput" />
                        <input
                         type="password" 
                         ref={passwordAgain} 
                         placeholder='Password Again'
                         required
                         minLength="6" 
                         className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
