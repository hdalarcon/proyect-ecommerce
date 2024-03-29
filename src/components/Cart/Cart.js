import './Cart.scss'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import db from "../../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import CircularProgress from '@mui/material/CircularProgress';

const Cart = () => {
    const [showModal, setShowModal] = useState(false)

    const { cartProducts, clear, removeItem,totalPrice } = useContext(CartContext)

    const [success, setSuccess] = useState(false)

    const [orderNumber, setOrderNumber] = useState(null)

    const [order, setOrder] = useState({
        items: cartProducts.map((product) =>{
            return{
                id: product.id,
                title: product.title,
                price: product.price,
                cantidad: product.cantidad,
                talle:product.talle
            }
        }),
        buyer: {},
        total: totalPrice,
        date: new Date().toLocaleString()
    })
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address:''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmitData = (e) => {
        e.preventDefault()
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'orders')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(true)
        setOrderNumber(orderDoc.id)
    }   

    return(
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
                    <div className='checkout-product-details'>
                        <div>
                            <label>Talle: {product.talle} </label>
                        </div>
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
                    {showModal &&
                        <Modal title="DATOS DE CONTACTO" close={() => success ? (setShowModal(false), clear()) :  setShowModal(false)}>
                            {success ? <>
                                           {orderNumber ? 
                                            (     
                                                <div>
                                                    <Modal title="GRACIAS POR SU COMPRA!!!" close={() => success ? (setShowModal(false), clear()) :  setShowModal(false)}>
                                                        <h2>Su orden se genero correctamente</h2>
                                                        <p>ID de compra : {orderNumber}</p>
                                                        
                                                        <p>Detalle de productos:</p>
                                                        {cartProducts.map((product) => {
                                                            return(
                                                                <div className='item-order-product' key={product.id}>
                                                                    <img src={`${product.pictureUrl}`} alt="" />
                                                                    <div className='item-order-details'>
                                                                        <p>{product.title}</p>
                                                                    </div>
                                                                    <div className='item-order-details'>
                                                                        <p>cantidad: {product.cantidad}</p>
                                                                    </div>
                                                                    <div className='item-order-details'>
                                                                        <div>
                                                                            <label>Talle: {product.talle} </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className='item-total-product'>
                                                                        <div className='item-product-price'>
                                                                            <p>Precio unitario: ${product.price}</p>
                                                                        </div>
                                                                        <div className='item-product-total-price'>
                                                                            <p>Precio: ${product.priceTotal = product.price * product.cantidad}</p>
                                                                        </div> 
                                                                    </div> 
                                                                </div> 
                                                            )
                                                        }
                                                        )}

                                                        <h2>Importe de la orden: ${totalPrice}</h2>
                           
                                                    </Modal>
                                                </div>                       
                                            ) : <CircularProgress color="success" />}</>
                         : (
                            <form onSubmit={handleSubmitData}>
                                <input type='text' name='name' placeholder='Ingrese el nombre' value={formData.name} onChange={handleChange} required/>
                                <input type='number' name='phone' placeholder='Ingrese el teléfono' value={formData.phone} onChange={handleChange} required/>
                                <input type='email' name='email' placeholder='Ingrese el mail' value={formData.email} onChange={handleChange} required/>
                                <input type='text' name='address' placeholder='Ingrese el domicilio' value={formData.address} onChange={handleChange} required/>
                                <Button type='submit' variant='contained'>Finalizar compra</Button>
                            </form>)}
                        </Modal>
                    }
                </div>
                
                )
            })}
            <div className='total-cart-price'>
                {cartProducts.length!==0 && <p>Total: ${totalPrice}</p>}
            </div>
            {cartProducts.length!==0 ? (<div className='cart-buttons'><Button variant="contained" onClick={() => setShowModal(true)}>Ir a pagar</Button><Button variant="contained" onClick={() => clear()} className={"btn-delete-all"}>Borrar todo</Button>
            </div>) : 
            (<div className='empty-cart'>
                <p>TU CARRITO ESTA VACIO...</p> 
                <Link to={"/"} style={{textDecoration: 'none'}}><Button variant="contained" color='success' className={"btn-cart"}>Continuar comprando</Button></Link>
            </div>) }
            
        </div>
    )
}

export default Cart