import { useRef, useState } from "react"
import "./Login.scss"
import { Link } from "react-router-dom"
import { apiInstance } from "../../../api"

const Login = () => {

  const [loadingBtn, setLoadingBtn] = useState(false)
  const loginbtn = useRef()
  const LoginBtn = loginbtn.current

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    apiInstance.post('/auth/login/', {
      password: loginPassword,
      email: loginEmail
    })
      .then(response => {
        if (response.data.access_token) {
          console.log(response);
          setLoadingBtn(true)
          LoginBtn.style = "cursor: not-allowed; opacity: 0.6; background: transparent; color: #fff;"
          localStorage.setItem("user-token", response.data.access_token)
          setTimeout(() => { window.location.pathname = "/" }, 1700)
        }
        else {
          alert("Password or Email is Invalid !!!")
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="login__wrapper">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-email">
          <label htmlFor="Email">Email</label>
          <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} id="Email" type="email" />
        </div>
        <div className="login-name">
          <label htmlFor="Name">Password</label>
          <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} id="Password" type="password" />
        </div>
        <button ref={loginbtn} type="submit">Login</button>
        {/* Loaidng */}
        <div style={loadingBtn ? { display: "block", cursor: "not-allowed" } : { display: "none" }} className="lds-ring"><div></div><div></div><div></div><div></div></div>
        {/*  */}
        <p className="checkout-text">
          If You don't have an account ? <Link to='/auth/signup'>Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login