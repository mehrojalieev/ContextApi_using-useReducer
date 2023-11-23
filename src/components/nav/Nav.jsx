import "./nav.scss"
import { NavLink, Link} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
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
          <NavLink className={({ isActive }) => isActive ? "link--active" : "isActive"} to="product-cart">Carts <FaShoppingCart /></NavLink>
        </li>
        
      </ul>

      <div className="profil-user">
          <Link to='create-product'>Create Product</Link>
      </div>
    </nav>
  )
}

export default Nav