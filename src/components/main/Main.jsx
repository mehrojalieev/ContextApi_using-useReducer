import "./Main.scss"
import { useState, useEffect, useRef } from 'react'
import { FaCartPlus } from "react-icons/fa"
import { apiInstance } from "../../api"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slices/cartSlices"

const Main = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    const btn = useRef()

    useEffect(() => {
        apiInstance('/products')
            .then(response => {
                setProducts(response.data)
                console.log(response.data);
            })
    }, [])



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
                                        <Link className='views-btn' to={`product-view/${product.id}`}>View Deal  &#8599;</Link>

                                        <button ref={btn} onClick={() => dispatch(addToCart(product))} className={'addcart-btn'}><i><FaCartPlus /></i> </button>
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

export default Main