import "./nav.scss"
import { NavLink} from "react-router-dom"
const Nav = () => {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <NavLink className={({ isActive }) => isActive ? "link--active" : "isActive"} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? " link--active" : "isActive"} to="about">About</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? "link--active" : "isActive"} to="ContactUs">Contact us</NavLink>
        </li>
        
      </ul>
    </nav>
  )
}

export default Nav