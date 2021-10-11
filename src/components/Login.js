import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Login(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(e) {
    await axios.post('/auth/login', { username, password })
      .then(res => {
        console.log(res.data)
        props.history.push('accountdash')
      }).catch(err => {
        console.log(err)
      })

  }

  const toRegister=()=>{
    props.history.push('/register')
  }



  return (
    <div className='login'>
      <h1>Login</h1>

      <form onSubmit={loginUser} className='login-form'>
        <label>
          Email:<input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password:<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
<button onClick={toRegister}>Register</button>
    </div>

  )
}

export default Login
