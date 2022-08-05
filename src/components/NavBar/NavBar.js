import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="navbar-primary">
            <Link to={"/"}><img src="/assets/logo.jpg" alt="logo"></img></Link>
            <ul>
                <Link to={"/"}><li><button>Inicio</button></li></Link>
                <Link to={"/category/chombas"}><li><button>Chombas</button></li></Link>
                <Link to={"/category/camperas"}><li><button>Camperas</button></li></Link>
                <Link to={"/category/jeans"}><li><button>Jeans</button></li></Link>
                <Link to={"/category/pantalones"}><li><button>Pantalones</button></li></Link>
                <Link to={"/nosotros"}><li><button>Sobre nosotros</button></li></Link>
                <Link to={"/contacto"}><li><button>Contacto</button></li></Link>
            </ul>

            <CartWidget/>

        </div>
    )
}

export default NavBar;