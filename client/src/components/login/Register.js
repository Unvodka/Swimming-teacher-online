import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Login-register.css'
import Slide from 'react-reveal/Slide';


const Register = () => {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
      const {name, email, password, value} = e.target;
      setUser({...user, [name]:value, [email]: value, [password]: value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:4005/user/register', user)
              .then(res => console.log(res.data))
            
            window.location.href = "/login";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
      <div>
        <Slide duration={500} left opposite>
          <form className='login-register' onSubmit={registerSubmit}>
            <fieldset className='login'>
              <legend>Register or Click Login</legend>

                  <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={user.name} onChange={onChangeInput} placeholder="Enter your name" required></input>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <i class="far fa-envelope"></i><input type="email" id="email" name="email" value={user.email} onChange={onChangeInput} placeholder="Enter email" required></input>
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <i class="fas fa-key"></i><input type="password" id="password" name="password" value={user.password} onChange={onChangeInput} placeholder="Password" required></input>
                  </div>
                  <button className="btn-form submit">REGISTER</button>
                  
                  <p>or</p>
                
                  <Link to="/login"><button className="btn-form" type="submit">Login</button></Link>

            </fieldset>
          </form>
        </Slide>

        <Slide duration={500} right opposite>
          <div className='link-to'>
            <p>OR</p>
            <p>Click here to go as visitor</p>
            <Link to="/home"><button className='btn-form'>ENTER</button></Link>
          </div>
        </Slide>
        
    </div>
    
    )
}

export default Register