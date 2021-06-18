import { useState } from "react"
import { Link } from "react-router-dom"
import "./SubNavbar.css"

export default function SubNavbar({
  activeCategory,
  setActiveCategory,
}) {
  const [open, setOpen] = useState(true)

  const toggleOpen = () => setOpen((isOpen) => setOpen(!isOpen))

  return (
    <nav className="SubNavbar">
      <div className="content">
        <div className="row">
            <div className="cart">
              <Link to="/shopping-cart">
                My Cart
                <i className="material-icons">Shopping Cart</i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="hamburger-menu">
            <i className="material-icons" onClick={() => toggleOpen()}>
              Menu
            </i>
          </div>

          <ul className={`category-menu ${open ? `open` : `closed`}`}>
            {["All Categories", "Clothing", "Food", "Accessories", "Tech"].map((cat) => (
              <li className={activeCategory === cat ? "is-active" : ""} key={cat}>
                <button onClick={() => setActiveCategory(cat)}>{cat}</button>
              </li>
            ))}
          </ul>
        </div>
        </nav>
  )
}