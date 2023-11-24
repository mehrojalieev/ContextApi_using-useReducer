import "./SignUp.scss"
import { Link } from "react-router-dom"
const SignUp = () => {
    return (
        <div className="signup__wrapper">
        <h2>SIGN UP</h2>
        <form className="signup-form">
          <div className="login-email">
            <label htmlFor="Email">Email</label>
            <input id="Email" type="email" />
          </div>
          <div className="login-password">
            <label htmlFor="Password">Password</label>
            <input id="Password" type="password" />
          </div>
          <button>Login</button>
          <p className="checkout-text">
            If You don't have an account ? <Link to='auth/login'>Login</Link>
          </p>
        </form>
      </div>
    )
}

export default SignUp   