import { useEffect, useState } from "react"
import "./CreateProduct.scss"
import { apiInstance } from "../../api"

const CreatePRoduct = () => {

    // INPUT VALUES
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [categoryId, SetCategoryId] = useState('')
    const [image, setImage] = useState([])

    useEffect(() => {
        
    }, [])

    const handleCreateProduct = (e) => {
        e.preventDefault()
        fetch('https://api.escuelajs.co/api/v1/products', {
            method: "POST",
            body: JSON.stringify({
                title: title,
                price: price,
                description: description,
                categoryId: categoryId,
                images: [image]
            }),
            headers: {
                "Content-Type": 'application/json'
            }
            
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
            // const handleCreateProduct = (e) => {
            //     e.preventDefault()
            //     apiInstance("/products", {
            //         method: "POST",
            //         body: {
            //             title: title,
            //             price: price,
            //             description: description,
            //             categoryId: categoryId,
            //             images: [image]
            //         },
            //         headers: {
            //             "Content-Type": 'application/json'
            //         }
            //     })
            //     .then(response => console.log(response))
            // }
    return (
        <div className="create__product-wrapper">
            <form className="create-form" onSubmit={handleCreateProduct}>
            <h2>CREATE PRODUCT</h2>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                <div className="product-count">
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" />
                <input value={categoryId} onChange={(e) => SetCategoryId(e.target.value)} type="number" placeholder="CategoryId" />
                </div>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
                <input value={image} onChange={(e) => setImage(e.target.value)} type="text" placeholder="Image" />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreatePRoduct