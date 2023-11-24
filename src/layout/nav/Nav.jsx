import "./nav.scss"
import { NavLink, Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
const Nav = () => {
  return (
    <nav>
      <div className="nav__logo">
        <h1>Platzi Fake Store</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink className={({ isActive }) => isActive ? "link--active" : "isActive"} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? " link--active" : "isActive"} to="about">About</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? " link--active" : "isActive"} to="contact-us">Contact Us</NavLink>
        </li>
        <li>
        </li>

      </ul>
      <div className="navbar-cart">
      <NavLink className={({ isActive }) => isActive ? " cart cart-active" : "cart"} to="product-cart">Carts <FaShoppingCart /></NavLink>

      </div>
      <div className="profile-user">
          <Link to="auth/login">Login</Link>
      </div>
    </nav>
  )
}

export default Nav