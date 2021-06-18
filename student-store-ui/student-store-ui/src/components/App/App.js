import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Home from "../../../student-store-ui/src/components/Home/Home"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import ProductPage from "../ProductPage/Page"
import { removeFromCart, addToCart, getQuantityOfItemInCart, getTotalItemsInCart } from "../../utils/cart"
import "./App.css"

export default function App() {
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [products,setProducts] = useState([])
  const [cart, setCart] = useState({})

  const handleOnRemoveFromCart = (item) => setCart(removeFromCart(cart, item))
  const handleOnAddToCart = (item) => setCart(addToCart(cart, item))
  const handleGetItemQuantity = (item) => getQuantityOfItemInCart(cart, item)
  const handleGetTotalCartItems = () => getTotalItemsInCart(cart)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true)

      try {
        const res = await axios.get("http://localhost:3001/store")
        if (res?.data?.products) {
          setProducts(res.data.products)
        } else {
          setError("Error fetching products.")
        }
      } catch (err) {
        console.log(err)
        const message = err?.response?.data?.error?.message
        setError(message ?? String(err))
      } finally {
        setIsFetching(false)
      }
    }

    fetchProducts()
  }, [])    



  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  isFetching={isFetching}
                  addToCart={handleOnAddToCart}
                  removeFromCart={handleOnRemoveFromCart}
                  getQuantityOfItemInCart={handleGetItemQuantity}
                />
              }
            />
            <Route 
            path="/store/store:productId" element={<TransactionDetail />} />
            <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                cart={cart}
                error={error}
                products={products}
                addToCart={handleOnAddToCart}
                removeFromCart={handleOnRemoveFromCart}
                getQuantityOfItemInCart={handleGetItemQuantity}
                getTotalItemsInCart={handleGetTotalCartItems}
              />
            }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}