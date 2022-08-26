import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [cartProducts, setCartProducts] = useState([])
    
    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    const addItem = (product) => {
        let isInCart=cartProducts.find((c) => c.id === product.id);

        let cantProduct = product.cantidad;
        
        if(!isInCart){
            setTotalProducts(totalProducts + product.cantidad)
            setTotalPrice(totalPrice + product.price * cantProduct)
            return setCartProducts (cartProducts => [...cartProducts,product]) 
        }else{
            isInCart.cantidad=isInCart.cantidad+cantProduct

            product.cantidad=isInCart.cantidad

            setTotalProducts(totalProducts + cantProduct)
            setTotalPrice(totalPrice + product.price * cantProduct)
        }
    }

    const removeItem = (product) => {
        setCartProducts(cartProducts.filter((cartProduct) => cartProduct.id !== product.id ))
        setTotalProducts(totalProducts - product.cantidad)
    }

    const clear = () => {
        setCartProducts([])
        setTotalProducts(0)
        setTotalPrice(0)
    }

    const data = {
        cartProducts,
        setCartProducts,
        addItem,
        removeItem,
        clear,
        totalProducts,
        totalPrice
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }