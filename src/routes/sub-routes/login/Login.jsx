import { useState } from "react"
import "./Login.scss"
import { Link } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: "POST",
      body: {
          email: email,
          password: password
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  return (
    <div className="login__wrapper">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-email">
          <label htmlFor="Email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} id="Email" type="email" />
        </div>
        <div className="login-password">
          <label htmlFor="Password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)}  id="Password" type="password" />
        </div>
        <button type="submit">Login</button>
        <p className="checkout-text">
          If You don't have an account ? <Link to='/auth/signup'>Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login