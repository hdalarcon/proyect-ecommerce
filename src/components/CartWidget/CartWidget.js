import './CartWidget.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return(
        <div className='cart-widget'>
            <Link to={"/cart"}><ShoppingCartIcon/></Link>
        </div>
    )
}

export default CartWidget