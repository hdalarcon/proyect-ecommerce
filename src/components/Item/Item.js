import './Item.scss';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Item = ({data}) => {

    const {id,title, price, pictureUrl, stock} = data

    return(
        <div className='item'>
            <img src={`${pictureUrl}`} alt="img producto"></img>
            <span>{title}</span>
            <span>$ {price}</span>
            <span>Stock: {stock}</span>
            <div className='item-contador'>
                <ItemCount stockCount={stock}/>
            </div>
            <div className='item-agregar-carrito'>
                <Link to={`/item/${id}`}>    
                    <Button variant="outlined">Ver detalle</Button>
                </Link>
                <Link to={"/cart"}>
                    <Button variant="outlined">Agregar al carrito</Button>
                </Link>
                
            </div>


        </div>
    )
}

export default Item