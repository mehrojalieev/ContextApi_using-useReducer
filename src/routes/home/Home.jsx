import { useState, useReducer, useEffect, useRef } from 'react'
import { FaCartPlus } from "react-icons/fa"
import { apiInstance } from "../../api"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import "./home.scss"


const Home = () => {
    const dispatch = useDispatch()
    const cartproducts = useSelector(state => state.cart.cart_products)
    const [products, setProducts] = useState([])
    const btn = useRef()

    useEffect(() => {
        apiInstance('/products')
            .then(response => {
                setProducts(response.data)
                console.log(response.data);
            })
    }, [])


    const handleAddToCart = (product) => {
        product.count = 1;
        dispatch({ type: "ADD_TO_CART", product })
        // cartproducts.findIndex(a => a.id === product.id ) !== -1 ? btn.current.style = "background-color: red !important" : btn.current.style = "color: blue"  
    }

    console.log(cartproducts);
    return (
        <>
            <div className='product-wrapper'>
                <div className="product__card-container">
                    {
                        products.map((product, index) =>
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
                                    <div className="card-btns">
                                        <Link className='view-btn' to={`product-view/${product.id}`}>View Deal  &#8599;</Link>

                                        <button  ref={btn} onClick={() => {handleAddToCart(product) }} className={'addcart-btn'}><i><FaCartPlus /></i> </button>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default Home