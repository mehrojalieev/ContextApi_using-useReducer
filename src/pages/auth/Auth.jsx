import Login from "../../routes/sub-routes/login/Login"
import SignUp from "../../routes/sub-routes/sign-up/SignUp"
import "./Auth.scss"

const Auth = () => {
  return (
    <>
      <Login/>
      <SignUp/>
    </>
  )
}

export default Auth