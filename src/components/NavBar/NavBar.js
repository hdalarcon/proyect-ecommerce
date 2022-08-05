import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
    const links = [
        {name:'Inicio', url:'/'},
        {name:'Chombas', url:'/category/chombas'},
        {name:'camperas', url:'/category/camperas'},
        {name:'jeans', url:'/category/jeans'},
        {name:'pantalones', url:'/category/pantalones'},
        {name:'Sobre nosotros', url:'/nosotros'},
        {name:'Contacto', url:'/contacto'},
    ];
    return(
        <div className="navbar-primary">
            <Link to={"/"}><img src="/assets/logo.jpg" alt="logo"></img></Link>
            <ul>
            
                {links.map((link,i) =>{
                    return(
                        <li key={i}>
                            <Link to={link.url}><button>{link.name}</button></Link>
                        </li>
                    )
                })}

            </ul>

            <CartWidget/>

        </div>
    )
}

export default NavBar;