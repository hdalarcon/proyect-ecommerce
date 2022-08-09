import './Item.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Item = ({data}) => {

    const {id,title, price, pictureUrl, stock,marca} = data

    return(
        <div className='item'>
            <span className='item-marca'>{marca}</span>
            <img src={`${pictureUrl}`} alt="img producto"></img>
            <span>{title}</span>
            <span>$ {price}</span>
            <span>Stock: {stock}</span>
            <div className='item-agregar-carrito'>
                <Link to={`/item/${id}`} style={{textDecoration: 'none'}}>    
                    <Button className='btn-detalle'variant="contained">Ver detalle</Button>
                </Link>
            </div>


        </div>
    )
}

export default Item