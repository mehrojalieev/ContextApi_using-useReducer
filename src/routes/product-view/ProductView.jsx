import { useEffect, useState } from "react";
import "./productView.scss"
import { useParams } from "react-router-dom"
import { apiInstance } from "../../api";


const ProductView = () => {
  const {id} = useParams()

  const [singleData, setSingleData] = useState([])

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
        {
          singleData.map(product => 
            <>
              <img src={product.data.images[0]} alt="" />
            </>
            )
        }
    </div>
  )
}

export default ProductView