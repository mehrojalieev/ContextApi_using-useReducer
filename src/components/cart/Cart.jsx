import "./Cart.scss"
import { useDispatch, useSelector } from 'react-redux'


const Cart = () => {
  const data = useSelector(state => state.cart_data.cart)
  console.log(data);
  return (
    <div className='cart-wrapper'>
      <div className="cart-container">
        {/* {
          data.cart_products.splice(0, 30).map((product, index) =>
            <div key={index} className='product-card'>
              <div className="card-img">
                <img src={product.images} height={130} />
              </div>
              <div className="product-content">
                <h3>{product.title.slice(0, 20)}</h3>
                <p>{product.description.slice(0, 70)}</p>
                <div className="price-card">
                  <strong>${product.price}</strong>
                  <span>35% off</span>
                </div>

              </div>

            </div>
          )
        } */}
      </div>
    </div>
  )
}

export default Cart