import "./home.scss"
import { useState, useReducer, useEffect } from 'react'
import { FaCartPlus } from "react-icons/fa"
import { apiInstance } from "../../api"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"



const Home = () => {
    const dispatch = useDispatch()
 const [products, setProducts] = useState([])

 useEffect(() => {
    apiInstance('/products')
    .then(response => {
        setProducts(response.data)
        console.log(response.data);
    })
 }, [])

 const handleAddToCart = (product) => {
    dispatch({type: "ADD_TO_CART", product})
 }

    return (
        <>
            <div className='product-wrapper'>
                <div className="product__card-container">
                    {
                        products    .splice(0, 30).map((product, index) =>
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
                                        <button onClick={() => handleAddToCart(product)} className='addcart-btn'><i><FaCartPlus /></i></button>
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