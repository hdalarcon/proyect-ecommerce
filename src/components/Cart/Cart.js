import './Cart.scss'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartProducts, clear, removeItem } = useContext(CartContext)

    let totalCartPrice = 0;

    return(
        <>
        <div className="items-checkout">
            <h1>Carrito de compras</h1>
            {cartProducts.map((product) => {
            return(
                <div className='item-checkout-product' key={product.id}>
                    <img src={`${product.pictureUrl}`} alt="" />
                    <div className='checkout-product-details'>
                        <p>{product.title}</p>
                    </div>
                    <div className='checkout-product-details'>
                        <p>cantidad: {product.cantidad}</p>
                    </div>
                    <div className='checkout-total-product'>
                        <div className='checkout-product-price'>
                            <p>Precio unitario: ${product.price}</p>
                        </div>
                        <div className='checkout-product-total-price'>
                        <p>Precio: ${product.priceTotal = product.price * product.cantidad}</p>
                        </div>
                    </div>
                    <div className='checkout-product-action' >
                            <DeleteIcon onClick={() => removeItem(product)}/>
                    </div>
                    <p style={{display: 'none'}}>{totalCartPrice= totalCartPrice + product.priceTotal}</p>
                </div>
                
                )
            })}
            <div className='total-cart-price'>
                {cartProducts.length!==0 && <p>Total: ${totalCartPrice}</p>}
            </div>
            {cartProducts.length!==0 ? <Button variant="contained" onClick={() => clear()} className={"btn-delete-all"}>Borrar todo</Button> : 
            <div className='empty-cart'>
                <p>TU CARRITO ESTA VACIO...</p> 
                <Link to={"/"} style={{textDecoration: 'none'}}><Button variant="contained" color='success' className={"btn-cart"}>Continuar comprando</Button></Link>
            </div> }
        </div>
        </>

    )
}

export default Cart