import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const { category } = useParams();

    const [listProducts, setListProducts] =  useState([]);

    const filterByCategory = products.filter((product) => product.category === category);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(category){
                resolve(filterByCategory);
            }else {
                resolve(products)
            }
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