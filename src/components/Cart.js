import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import calculateCost from '../logic/calculator';
import "../css/Cart.css";
import CartItem from './CartItem';
import { CartContext } from './CartContext';

const Cart = ({onCloseCart, className}) => {
    const [subtotal, setSubtotal] = useState(0);
    const {cart, setCartInfo} = useContext(CartContext);


    useEffect(() => {
        const total = calculateCost(cart);
        setSubtotal(total);
    }, [cart])

    const handleCheckout = () => {
        // Clear the cart by setting an empty cart
        setCartInfo('reset');
        onCloseCart();
      };

    const browseString = "Browse";
    const checkoutString = "Checkout";

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
            <div>Subtotal: ${subtotal}</div>
            <Link to={`/Shop`} onClick={handleCheckout} id="checkout">
                {subtotal < .01 ? browseString : checkoutString}
            </Link>
        </div>
    )
}

export default Cart;