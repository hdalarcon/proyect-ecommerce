import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [cartProducts, setCartProducts] = useState([])
    
    const [totalProducts, setTotalProducts] = useState(0)

    const addItem = (product) => {

        let isInCart=cartProducts.find((c) => c.id === product.id);
        
        if(!isInCart){
            setCartProducts (cartProducts => [...cartProducts,product])
            setTotalProducts(totalProducts + product.cantidad)
        }else{
            console.log("El producto ya se encuentra en el carrito!!!");
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