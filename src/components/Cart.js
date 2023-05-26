import React, {useState, useContext, useEffect} from 'react';
import "../css/Cart.css";
import CartItem from './CartItem';
import { CartContext } from './CartContext';

const Cart = ({onCloseCart, className}) => {
    const [subtotal, setSubtotal] = useState(0);
    const {cart, setCartInfo} = useContext(CartContext);

    const handleCheckout = () => {
        // Clear the cart by setting an empty cart
        setCartInfo('reset');
      };

    return(
        <div className={`cart ${className}`}>
            <button onClick={onCloseCart} id="close-cart-button">X</button>
            <h2>Shopping Cart</h2>
            <div className='items'>{cart.items.map((item) => (
                <CartItem 
                    key={item.id} 
                    item={item}
                />
            ))}
            </div>
            <div>Subtotal: {subtotal}</div>
            <div onClick={handleCheckout} id="checkout">Checkout</div>
        </div>
    )
}

export default Cart;