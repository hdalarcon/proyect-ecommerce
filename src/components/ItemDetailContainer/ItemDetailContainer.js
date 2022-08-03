import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import productDetail from '../../utils/productDetail.mock'
import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {

    const [product, setProduct] =  useState([])

    const getProductDetail = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productDetail)
        },2000)
    })

    useEffect(() => {
        getProductDetail
            .then((res) => {
                setProduct(res)
            })
            .catch((error) => {
                console.log("Falló la llamada a products.")
            })

    })

    return(
        <div className="container-item-detail">
            <ItemDetail data={product}/>
        </div>
    )
}

export default ItemDetailContainer