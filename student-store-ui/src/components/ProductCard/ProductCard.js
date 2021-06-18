import { formatPrice } from "../../utils/format"
import "./ProductCard.css"
import {Link} from "react-router-dom"

export default function ProductCard({id,product, quantity, addToCart, removeFromCart }) {
  return (
    <div className="ProductCard">
    <div className="card">
    {/* <Link to = {`/product/${id}`}>
        {product.image}
    </Link> */}
    </div> 
      <div className="media" >
      <Link to = {"/store/" + id}> <img src={product.image} alt="product cover" />  </Link>
      </div>
      <div className="product-info">
        <div className="info">
          <p className="product-name">{product.name}</p>
          <p className="product-price">{formatPrice(product.price)}</p>
        </div>
        <div className="actions">
          <div className="buttons">
            <i className="material-icons" onClick={addToCart}>
              add
            </i>
            <i className="material-icons" onClick={removeFromCart}>
              remove
            </i>
          </div>

          {quantity ? (
            <span className="quantity">
              <span className="amt">{quantity}</span>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  )
}