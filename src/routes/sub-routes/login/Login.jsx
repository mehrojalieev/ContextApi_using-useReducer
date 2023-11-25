import { useRef, useState } from "react"
import "./Login.scss"
import { Link } from "react-router-dom"

const Login = () => {

  const localName = localStorage.getItem("name")
  const localEmail = localStorage.getItem("email")

  const [loadingBtn, setLoadingBtn] = useState(false)
  const loginbtn = useRef()
  const LoginBtn = loginbtn.current

  const [loginName, setLoginName] = useState('')
  const [loginEmail, setLoginEmail] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (loginName === localName && loginEmail === localEmail) {
      setLoadingBtn(true)
      LoginBtn.style = "cursor: not-allowed; opacity: 0.6; background: transparent; color: #fff;"
      setTimeout(() => { window.location.pathname = "/" }, 1700)
      console.log(true);
    } else {
      console.log(false);
    }
  }

  return (
    <div className="login__wrapper">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-name">
          <label htmlFor="Name">Name</label>
          <input value={loginName} onChange={(e) => setLoginName(e.target.value)} id="Password" type="text" />
        </div>
        <div className="login-email">
          <label htmlFor="Email">Email</label>
          <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} id="Email" type="email" />
        </div>
        <button ref={loginbtn} type="submit">Login</button>
        {/* Loaidng */}
        <div style={loadingBtn ? {display:"block"} : {display: "none"}} className="lds-ring"><div></div><div></div><div></div><div></div></div>
        {/*  */}
        <p className="checkout-text">
          If You don't have an account ? <Link to='/auth/signup'>Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login