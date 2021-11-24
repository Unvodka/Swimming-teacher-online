import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
          <form onSubmit={registerSubmit}>
          <fieldset className='login'>
            <legend>Register or Click Login</legend>

                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={user.name} onChange={onChangeInput} placeholder="Enter your name" required></input>
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={user.email} onChange={onChangeInput} placeholder="Enter email" required></input>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" value={user.password} onChange={onChangeInput} placeholder="Password" required></input>
                </div>
                <button className="btn-form">Register</button>
                <br/>

              
                <Link to="/login"><button className="btn-form" type="submit">Login</button></Link>

          </fieldset>
        </form>
        <img src="/swimmer.jpg" alt="swimmer" />
    </div>
    )
}

export default Register