import "./Cart.scss"
import { useDispatch,useSelector } from 'react-redux'


const Cart = () => {
  const data = useSelector(state => state.cart)
  console.log(data);
  return (
    <div className='cart-wrapper'>
      <div className="cart__content-card">
        {
          data.cart_products.map(product => 
              
                <img src={product.images[0]}  />
                

            )
        }
      </div>
    </div>
  )
}

export default Cart