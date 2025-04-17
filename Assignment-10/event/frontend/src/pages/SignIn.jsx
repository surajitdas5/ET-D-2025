import axios from 'axios'
import React, { useRef, useState } from 'react'
import { API } from '../utils/constants'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const { login } = useAuth()

    const emailRef =useRef()
    const passwordRef =useRef()
    
    const [ message, setMessage ] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setMessage("")

        let email = emailRef.current.value
        let password = passwordRef.current.value

        try {
            let res = await axios.post(`${API}/users/login`, {email, password})
            if(res.status == 200){
                console.log(res)
                login(res.data)
                emailRef.current.value = ""
                passwordRef.current.value = ""
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            setMessage("Invalid Credentails")
        }
    }
  return (
    <div className='row'>
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h3>Login Here</h3>
                    <span>{message}</span>
                </div>
                <div className="card-body">
                    <form method="post" onSubmit={handleSubmit}>
                        <input ref={emailRef} type='email' className='form-control mb-2' placeholder='Email' required />
                        <input ref={passwordRef} type='password' className='form-control mb-2' placeholder='Password' required />
                        <input type='submit' className='btn btn-dark' value="Sign In" />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn