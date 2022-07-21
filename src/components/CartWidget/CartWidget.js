import './CartWidget.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return(
        <div className='cart-widget'>
                <ShoppingCartIcon/>
                <p>5</p>                     
        </div>
    )
}

export default CartWidget