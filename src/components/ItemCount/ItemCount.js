import { useState } from 'react'
import './ItemCount.scss'
import Button from '@mui/material/Button';

const ItemCount = ({stockCount}) => {

    const [contador, setContador] = useState(1)

    const addProduct = () =>{
        if(contador < stockCount){
            setContador(contador + 1) 
        } 
    }
    const removeProduct = () =>{
        if(contador > 1){
            setContador(contador - 1)
        } 
        
    }

    return(
        <div className='item-count'>
            
            <Button variant='text' color="warning"  onClick={removeProduct}>-</Button>
            <p>{contador}</p>
            <Button variant='text' color="success" onClick={addProduct}>+</Button>
        </div>
    )
}


export default ItemCount