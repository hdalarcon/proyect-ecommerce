import { useEffect, useState } from "react"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { collection, query, where ,getDocs } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemListContainer = () => {

    const { category } = useParams();

    const [listProducts, setListProducts] =  useState([]);

    const getProducts = async () =>{

        if(category){
            const filterByCategory = query(collection(db, 'products'), where("category","==",category));
            const productSnapshot = await getDocs(filterByCategory)
            const productList = productSnapshot.docs.map( (doc)=> {
                let product = doc.data();
                product.id= doc.id;
                return product;
            })
           
            return productList;
        }  else{
            const productCollection = collection(db, 'products');  
            const productSnapshot = await getDocs(productCollection)
            const productList = productSnapshot.docs.map( (doc)=> {
                let product = doc.data();
                product.id= doc.id;
                return product;
            })
           
            return productList;
        }        
    }

    useEffect(() => {
        getProducts()
        .then((res) => {
            setListProducts(res)
            })
    },[category])

    return(
        <div className="list-products">
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer