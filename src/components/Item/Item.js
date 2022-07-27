import './Item.scss';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';

const Item = ({title,price,stock}) => {
    return(
        <div className='item'>
            <img src="/assets/converse1.jpg" alt="img producto"></img>
            <span>{title}</span>
            <span>$ {price}</span>
            <span>Stock: {stock}</span>
            <div className='item-contador'>
                <ItemCount stockCount={stock}/>
            </div>           
            <Button variant="outlined">Agregar al carrito</Button>
        </div>
    )
}

export default Item