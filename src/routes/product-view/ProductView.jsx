import { useEffect } from "react";
import "./productView.scss"
import { useParams } from "react-router-dom"
import { apiInstance } from "../../api";


const ProductView = () => {
  const {id} = useParams()

  useEffect(() => {
      async function singleProduct() {
         try {
          const response = await apiInstance(`/products/${id}`)
          console.log(response.data);
          console.log('salom');
         }
          catch (error) {
          console.log(error);
         }
      }
      singleProduct()
  }, [])
  return (
    <div>
         
    </div>
  )
}

export default ProductView