import { useState } from "react"
import "./SignUp.scss"
import { Link } from "react-router-dom"



const SignUp = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('')

  const handleCreateUser = (e) => {
    e.preventDefault()
    fetch('https://api.escuelajs.co/api/v1/users/', {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        avatar: avatar
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data) {
          localStorage.setItem("name", data.name)
          localStorage.setItem("email", data.email)
          setTimeout(() => { window.location.pathname = "/auth/login" }, 1700)
        }

      })
  }

  return (
    <div className="signup__wrapper">
      <h2>SIGN UP</h2>
      <form onSubmit={handleCreateUser} className="signup-form">
        <div className="signup-name">
          <label htmlFor="Name">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} id="Name" type="text" />
        </div>
        <div className="signup-email">
          <label htmlFor="Email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} id="Email" type="email" />
        </div>
        <div className="signup-password">
          <label htmlFor="Password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} id="Password" type="password" />
        </div>
        <div className="signup-avatar">
          <label htmlFor="Avatar">Avatar</label>
          <input value={avatar} onChange={(e) => setAvatar(e.target.value)} id="Avatar" type="text" />
        </div>
        <button type="submit">Sign Up</button>
        <p className="checkout-text">
          If You  have an account ? <Link to='/auth/login'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp   