import React, {useState} from 'react';
import "../css/Cart.css";
import CartItem from './CartItem';

const Cart = ({onCloseCart, className}) => {
    const {subtotal, setSubtotal} = useState(0);

    return(
        <div className={`cart ${className}`}>
            <button onClick={onCloseCart} id="close-cart-button">X</button>
            <h2>Shopping Cart</h2>
            <div className='items'></div>
            <div>Subtotal: {subtotal}</div>
            <div id="checkout">Checkout</div>
        </div>
    )
}

export default Cart;