import './Cart.scss'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import db from "../../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"

const Cart = () => {
    const [showModal, setShowModal] = useState(false)

    const { cartProducts, clear, removeItem, totalPrice } = useContext(CartContext)

    const [success, setSuccess] = useState()

    const [order, setOrder] = useState({
        items: cartProducts.map((product) =>{
            return{
                id: product.id,
                title: product.title,
                price: product.price,
                cantidad: product.cantidad
            }
        }),
        buyer: {},
        total: totalPrice
    })
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'orders')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
    }   

    let totalCartPrice = 0;

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
                    {showModal &&
                        <Modal title="DATOS DE CONTACTO" close={() => success ? (setShowModal(false), clear()) :  setShowModal(false)}>
                            {success ? (
                            <>
                               <h2>Su orden se genero correctamente</h2>
                               <p>ID de compra : {success}</p>
                            </>
                            
                        ) : (
                            <form onSubmit={submitData}>
                                <input type='text' name='name' placeholder='Ingrese el nombre' value={formData.name} onChange={handleChange}/>
                                <input type='number' name='phone' placeholder='Ingrese el teléfono' value={formData.phone} onChange={handleChange}/>
                                <input type='email' name='email' placeholder='Ingrese el mail' value={formData.email} onChange={handleChange}/>
                                <Button type='submit' variant='contained'>Enviar</Button>
                            </form>)}
                        </Modal>
                    }
                </div>
                
                )
            })}
            <div className='total-cart-price'>
                {cartProducts.length!==0 && <p>Total: ${totalCartPrice}</p>}
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