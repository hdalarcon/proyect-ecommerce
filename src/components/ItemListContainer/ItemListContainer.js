import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

    const [listProducts, setListProducts] =  useState([])

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        },2000)
    })

    useEffect(() => {
        getProducts
            .then((res) => {
                setListProducts(res)
            })
            .catch((error) => {
                console.log("Falló la llamada a products.")
            })

    })
    return(
        <div className="list-products">
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer