import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ProductGrid from "../ProductGrid/ProductGrid"
import SubNavbar from "../SubNavbar/SubNavbar"
import Navbar from "../Navbar/Navbar"
import "./Home.css"

export default function Home({
  isFetching,
  products,
  activeCategory,
  setActiveCategory,
  addToCart,
  removeFromCart,
  getQuantityOfItemInCart,
}) {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location.hash])

  return (
    <div className="Home">
    <Navbar />
    <SubNavbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ProductGrid
        products={products}
        isFetching={isFetching}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        getQuantityOfItemInCart={getQuantityOfItemInCart}
      />
    </div>
  )
}