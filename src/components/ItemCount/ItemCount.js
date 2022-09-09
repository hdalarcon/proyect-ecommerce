import { useState, useContext } from 'react'
import './ItemCount.scss'
import Button from '@mui/material/Button';
import { CartContext } from '../../context/CartContext';

const ItemCount = ({productData, quantitySelected}) => {

    const { addItem } = useContext(CartContext)

    const [contador, setContador] = useState(1)

    const [cantidadItem, setCantidadItem] = useState(1)

    const {stock} = productData

    const addProduct = () =>{
        if(contador < stock){
            setContador(contador + 1) 
            setCantidadItem(contador + 1)
        } 
    }
    const removeProduct = () =>{
        if(contador > 1){
            setContador(contador - 1)
            setCantidadItem(contador - 1)
        } 
        
    }

    const onAdd = () => {  
        productData.cantidad=cantidadItem
        addItem(productData)
        quantitySelected(contador)
    }

    return(
        <>
            <div className='item-count'>
                <Button variant='text' color="warning"  onClick={removeProduct}>-</Button>
                <p>{contador}</p>
                <Button variant='text' color="success" onClick={addProduct}>+</Button>
            </div>
            <div className='item-agregar-carrito'>
                <Button onClick={onAdd} variant="contained">Agregar al carrito</Button>
            </div>
            
        </>
    )
}


export default ItemCount