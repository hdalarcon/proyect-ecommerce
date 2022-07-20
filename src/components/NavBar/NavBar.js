import './NavBar.scss';
import CartWidget from './CartWidget';

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

            <CartWidget/>

        </div>
    )
}

export default NavBar;