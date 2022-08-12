import './CartWidget.scss';
import {useState , useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';
import Button from '@mui/material/Button';

const CartWidget = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const { cartProducts, clear, removeItem, totalProducts } = useContext(CartContext)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className='cart-widget'>
            {cartProducts.length !== 0 && <p>{totalProducts}</p>}
            <ShoppingCartIcon
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
            {cartProducts.map((product) => {
                return(
                    <div className='item-cart-product' key={product.id}>
                        <img src={`${product.pictureUrl}`} alt="" />
                        <div className='cart-product__details'>
                            <p>{product.title}</p>
                            <p>cantidad : {product.cantidad}</p>
                        </div>
                        <div className='cart-product__details'>
                            <p>$ {product.price}</p>
                        </div>
                        <div className='cart-product__action' >
                            <DeleteIcon onClick={() => removeItem(product)}/>
                        </div>
                    </div>
                    )
                })}
                <Button variant="contained" onClick={() => clear()} className={"btn-delete-all"}>Borrar todo</Button>
            </Menu>
        </div>
    )
}

export default CartWidget