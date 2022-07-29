import './Item.scss';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';

const Item = ({data}) => {

    const {title, price, pictureUrl, stock} = data

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
                <Button variant="outlined">Agregar al carrito</Button>
            </div>           
        </div>
    )
}

export default Item