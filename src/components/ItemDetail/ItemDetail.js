import './ItemDetail.scss';
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const ItemDetail = ({data}) => {
    const {title,marca,category,pictureUrl,price,stock,talle} = data

    const [quantitySelected, setQuantitySelected] = useState(0)

    const [selectedTalles, setSelectedTalles] = useState(talle);

    const talles = [
        {label: 'S', value:'S'},
        {label: 'M', value:'M'},
        {label: 'L', value:'L'},
        {label: 'XL', value:'XL'}
    ]

    const handleSelectChange = ( { value } ) => {
        setSelectedTalles(value);      
        data.talle = value;
    }
    
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
                    <div className='item-info-talle'>
                        <label>Talle: {selectedTalles}</label>
                        <Select className='select-talle'
                            defaultValue={ { label:`${talles[0].label}`, value:`${talles[0].value}`} }
                            options={talles}
                            onChange= {handleSelectChange}
                        />
                    </div>
                    <div className='item-info-count'>
                        {quantitySelected > 0 ? <Link to={"/cart"} style={{textDecoration: 'none'}}><Button variant="contained" color='success'>Terminar compra</Button></Link> : <ItemCount productData={data} quantitySelected={setQuantitySelected}/>}             
                    </div> 
                </div>
            </div>
        </>
    )
}

export default ItemDetail