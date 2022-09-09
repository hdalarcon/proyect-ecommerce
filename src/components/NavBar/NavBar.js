import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material';

const NavBar = () => {
    const links = [
        {name:'Inicio', url:'/'},
        {name:'Chombas', url:'/category/chombas'},
        {name:'camperas', url:'/category/camperas'},
        {name:'jeans', url:'/category/jeans'},
        {name:'pantalones', url:'/category/pantalones'},
        {name:'Guia de talles', url:'/guia'},
        {name:'Contacto', url:'/contacto'},
    ];
    return(
        <div className="navbar-primary">
            <Link to={"/"}><img src="/assets/logo.jpg" alt="logo"></img></Link>
            <Typography variant='h6'>
            <ul>
                
                    {links.map((link,i) =>{
                        return(
                            
                            <li key={i}>
                                
                                    <Link to={link.url}><Button>{link.name}</Button></Link>
                            </li>
                            
                        )
                    })}
                

            </ul>
            </Typography>
            <CartWidget/>

        </div>
    )
}

export default NavBar;