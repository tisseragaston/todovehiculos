import React, { useState, createContext } from "react"
import { ToastContainer, toast } from 'react-toastify';

export const CartContext = createContext ({
    cart: [],
    clearCart: () => {},
    isInCart: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    getTotalQuantity: () => {},
    getTotal: () => {},
    mensajeConfirmar: () => {},
    mensajeQuitar: () => {} ,
    mensajeCompra: () => {},
})

const CartProvider = (props) => {
    const [cart, setCart] = useState([])
    const clearCart = () => {
        setCart ([]);
    };
    const isInCart = (id) => {
        return cart.find((item) => item.id == id) ? true : false
    };
    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return {...cartItem, quantity: cartItem.quantity + quantity} ;
                } 
                return cartItem 
            }))
        } else  {
            setCart([...cart, {...item, quantity}])
        }
    };
    const removeFromCart = (id) => {
        const newCart = cart.filter ((item) => item.id !== id)
        setCart (newCart)
    };
    const getTotalQuantity = () => {
        let cant = 0
        cart.forEach ((e) => cant += e.quantity )
        return cant
    };
    const getTotal = () => {
        let total = 0
        cart.forEach ((e) => total += (e.quantity * e.priceRes))
        return total
    };
    const mensajeConfirmar = () => {
        toast('Operacion realizada con Exito! ✅', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };
    const mensajeCompra = () => {
        toast('Muchas gracias por tu Reserva 😍', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };
    const mensajeQuitar = () => {
        toast('❌Producto Eliminado!❌', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };
    return (
        <CartContext.Provider value={{cart, clearCart, addToCart, removeFromCart, getTotal, getTotalQuantity, mensajeConfirmar, mensajeQuitar, mensajeCompra}}>
        {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider; 


