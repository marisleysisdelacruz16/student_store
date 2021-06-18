import "./ProductPage.css"
import {formatPrice} from "../../utils/format"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function ProductPage({quantity, addToCart, removeFromCart }) {
    const {productId} = useParams()
    const [product,setProduct] = useState([])
    const [isFetching,setIsFetching] = useState([])
    const [error,setError] = useState(false)

    useEffect(() => {
      console.log(productId)
        const fetchProductById = async () => {
            try{
                const res= await axios.get(`http://localhost:3001/store/${productId}`)
                if (res?.data?.product) {
                    setProduct(res.data.product)
                }
             } catch(error) {
                setError(error)
                setIsFetching(false)
            }
        }
        
        fetchProductById()
        setIsFetching(false)
    }, [])

    const renderContent = () => {
        if (isFetching) return <h1> Loading...</h1>
        if (error) return <p className="description"> No Product found. </p>
    

    return (
        <>
          <p className="description">{product?.description}</p>
          <div className="meta">
            <p> {formatPrice(product?.price)} </p>
          </div>
        </>
      )
    }
  
    return (
      <div className="ProductDetail">
        <div className="card">
          <div className="title">
            <h3>{product?.name}</h3>
            <div id="container">
                <img id="image" src={product?.image} alt={product?.name} />
            </div>
          </div>
          
          {renderContent()}
        </div>
      </div>
    )
}

