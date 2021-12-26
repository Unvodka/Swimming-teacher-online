import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Login-register.css'

const Login = () => {

  // accesstoken ? if yes, redirect

    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = (e) => {
        const {name, email, password, value} = e.target;
        setUser({...user, [name]:value, [email]:value, [password]:value})
    }

    const loginSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:4005/user/login', user)
            console.log(res.data)

            localStorage.setItem('firstLogin', true)
            localStorage.setItem('accessToken', res.data.accesstoken)

            window.location.href = "/home";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
  
  return (
    <div>
        <form onSubmit={loginSubmit}>
          <fieldset className='login'>
            <legend>Login or Register</legend>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                  <i class="far fa-envelope"></i>
                  <input type="email" name="email" value={user.email} onChange={onChangeInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                  <i class="fas fa-key"></i><input type="password" name="password" value={user.password} onChange={onChangeInput} className="form-control" id="exampleInputPassword1" placeholder="Password" ></input>
                </div>
                <button className="btn-form" type="submit">LOGIN</button>
                <p>or</p>
                <Link to="/register"><button className="btn-form">Register</button></Link>
          </fieldset>
        </form>

        <div className='link-to-column'>
          <p>Almost there</p>
          <p>Have a look and take a training</p>
          <p>Question ? Anything ?</p>
        </div>

          <button className='btn-form'>SEE HERE</button>
          <button className='btn-form'>OR HERE</button>
        
    </div>
  )
}
export default Login