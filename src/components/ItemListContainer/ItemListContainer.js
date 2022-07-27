
import './ItemListContainer.scss'
import Item from '../Item/Item'

const ItemListContainer = () => {
    return(
        <div className="list-products">      
            <Item title={'Campera Converse'} price={10000} stock={10}/>
        </div>
    )
}

export default ItemListContainer