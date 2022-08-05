import './ItemDetail.scss'
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {
    const {title,marca,category,pictureUrl,price,stock} = data

    return(
        <>
            <div className='item-detail'>
                <div className='item-detail-image'>
                    <img src={`${pictureUrl}`} alt='img producto detail'/>
                </div>
                <div className='item-detail-info'>
                    <span className='item-info-marca'>{marca}</span>
                    <span className='item-info-category'>{category}</span>
                    <span className='item-info-title'>{title}</span>
                    <span className='item-info-price'>$ {price}</span>
                    <div className='div-item-info-cuotas'>
                        <CreditCardIcon/>
                        <span className='item-info-cuotas'>6 Cuotas sin interés.</span>
                    </div>
                    <span className='item-info-stock'>Stock: {stock}</span>
                    <div className='item-info-count'>
                        <ItemCount stockCount={stock}/>
                    </div>
                    <div className='item-talle'>
                        <label className='lable-select'>Talle</label>
                        <select className='select-talle'>
                            <option value={0}>Seleccione un talle</option>
                            <option value={'S'}>S</option>
                            <option value={'M'}>M</option>
                            <option value={'L'}>L</option>
                            <option value={'XL'}>XL</option>
                        </select>
                    </div>

                    <div className='item-agregar-carrito'>
                    <Link to={"/cart"}>
                        <Button variant="outlined">Agregar al carrito</Button>
                    </Link>                        
                    </div>  
                </div>
            </div>
        </>
    )
}

export default ItemDetail