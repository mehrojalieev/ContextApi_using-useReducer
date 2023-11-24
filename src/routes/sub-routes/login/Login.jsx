import "./Login.scss"

const Login = () => {
  return (
    <div className="login__wrapper">
      <h2>Login</h2>
      <form className="login-form">
        <div className="login-email">
          <label htmlFor="Email">Email</label>
          <input id="Email" type="email" />
        </div>
        <div className="login-password">
          <label htmlFor="Password">Password</label>
          <input id="Password" type="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login