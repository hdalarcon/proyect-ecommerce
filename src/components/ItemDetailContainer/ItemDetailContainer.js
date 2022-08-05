import { useEffect, useState } from "react"
import './ItemDetailContainer.scss'
import ItemDetail from "../ItemDetail/ItemDetail";
import products from '../../utils/products.mock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([])

    const {id} = useParams();
    
    const filterId = products.filter((product) => product.id === Number(id));
   
    const getItem = () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filterId[0]);
            },2000)
        })

    useEffect(() => {
        const itemAwait = async () => {
            try {
                const res = await getItem();
                setItemDetail(res);
            } catch (error) {
                console.log(error);
            }
        }
        itemAwait();
    })

    return(
        <div className="container-item-detail">
            <ItemDetail data={itemDetail}/>
        </div>
    )
}

export default ItemDetailContainer