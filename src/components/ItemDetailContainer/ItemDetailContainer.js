import { useEffect, useState } from "react"
import './ItemDetailContainer.scss'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'
import db from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([])

    const {id} = useParams();

    useEffect(() => {
        getItem()
        .then((res)=>{
            setItemDetail(res);
        })
    },[id])

    
    const getItem = async () =>{
        const docRef = doc(db,'products',id);
        const docSnapshot = await getDoc(docRef);
        let product = docSnapshot.data();
        product.id = docSnapshot.id;

        return product;
    }
   
    return(
        <div className="container-item-detail">
            <ItemDetail data={itemDetail}/>
        </div>
    )
}

export default ItemDetailContainer