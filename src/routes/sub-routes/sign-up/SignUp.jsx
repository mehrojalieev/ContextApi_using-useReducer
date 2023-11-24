import "./SignUp.scss"
import { Link } from "react-router-dom"
const SignUp = () => {
  return (
    <div className="signup__wrapper">
      <h2>SIGN UP</h2>
      <form className="signup-form">
        <div className="signup-name">
          <label htmlFor="Name">Name</label>
          <input id="Name" type="text" />
        </div>
        <div className="signup-email">
          <label htmlFor="Email">Email</label>
          <input id="Email" type="email" />
        </div>
        <div className="signup-password">
          <label htmlFor="Password">Password</label>
          <input id="Password" type="password" />
        </div>
        <div className="signup-avatar">
          <label htmlFor="Avatar">Avatar</label>
          <input id="Avatar" type="text" />
        </div>
        <button>Login</button>
        <p className="checkout-text">
          If You  have an account ? <Link to='/auth/login'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp   