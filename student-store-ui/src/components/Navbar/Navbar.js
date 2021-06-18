import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="content">

        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#Buy">Buy Now</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}