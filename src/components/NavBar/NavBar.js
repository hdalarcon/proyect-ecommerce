import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavBar = () => {
    return(
        <div className="navbar-primary">
            <img src="/assets/logo.jpg" alt="logo"></img>
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Sobre nosotros</button></li>
                <li><button>Contacto</button></li>
            </ul>
            <div className='cart-widget'>
                <ShoppingCartIcon/>
            </div>
        </div>
    )
}

export default NavBar;