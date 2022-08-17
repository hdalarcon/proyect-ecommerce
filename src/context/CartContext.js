import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [cartProducts, setCartProducts] = useState([])
    
    const [totalProducts, setTotalProducts] = useState(0)

    const addItem = (product) => {
        let isInCart=cartProducts.find((c) => c.id === product.id);

        let cantProduct = product.cantidad;
        
        if(!isInCart){
            setCartProducts (cartProducts => [...cartProducts,product])
            setTotalProducts(totalProducts + product.cantidad)
        }else{
            console.log('isInCart ',isInCart.cantidad);
            isInCart.cantidad=isInCart.cantidad+cantProduct
            console.log('isInCart 2 ',isInCart.cantidad);

            product.cantidad=isInCart.cantidad

            console.log('product.cantidad',product.cantidad);
            setTotalProducts(totalProducts + cantProduct)
        }
    }

    const removeItem = (product) => {
        setCartProducts(cartProducts.filter((cartProduct) => cartProduct.id !== product.id ))
        setTotalProducts(totalProducts - product.cantidad)
    }

    const clear = () => {
        setCartProducts([])
        setTotalProducts(0)
    }

    const data = {
        cartProducts,
        setCartProducts,
        addItem,
        removeItem,
        clear,
        totalProducts
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }