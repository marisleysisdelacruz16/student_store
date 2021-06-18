import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ProductGrid from "../../../../src/components/ProductGrid/ProductGrid"
import "./Home.css"

export default function Home({
  isFetching,
  products,
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