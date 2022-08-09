import { useState } from 'react'
import './ItemCount.scss'
import Button from '@mui/material/Button';

const ItemCount = ({stockCount, quantitySelected}) => {

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

    const onAdd = () => {
        quantitySelected(contador);
    }

    return(
        <>
            <div className='item-count'>
                <Button variant='text' color="warning"  onClick={removeProduct}>-</Button>
                <p>{contador}</p>
                <Button variant='te xt' color="success" onClick={addProduct}>+</Button>
            </div>
            <div className='item-agregar-carrito'>
                <Button variant="contained" onClick={onAdd}>Agregar al carrito</Button>
            </div>
            
        </>
    )
}


export default ItemCount