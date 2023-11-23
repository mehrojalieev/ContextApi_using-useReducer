import { useEffect, useState } from "react";
import "./productView.scss"
import { useParams } from "react-router-dom"
import { apiInstance } from "../../api";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ProductView = () => {
  const { id } = useParams()

  const [singleData, setSingleData] = useState({})

  useEffect(() => {
    async function singleProduct() {
      try {
        const response = await apiInstance(`/products/${id}`)
        console.log(response.data);
        setSingleData(response.data)
        console.log(singleData);

      }
      catch (error) {
        console.log(error);
      }
    }
    singleProduct()
  }, [])

  return (
    <div className="product__view-wrapper">
      <div className="product_image">
        
          singleData ? <img src={singleData.images} alt="Image-Product" />
            
          
      </div>
      <div className="product-content">
        <h2>{singleData.title}</h2>
        <p>{singleData.description}</p>
      </div>
          {/* <Skeleton width={} count={5} /> */}
    </div>
  )
}

export default ProductView