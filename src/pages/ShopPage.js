import React, { useState } from "react";
import Cart from "../components/Cart";

const ShopPage = () => {
    const [isCartOpen, setCartOpen] = useState(false);

    const handleCartOpen = () => {
        setCartOpen(true);
    };

    return(
        <div>
            <div>This is the shop.</div>
            <button onClick={handleCartOpen}>This opens the cart.</button>
            {isCartOpen && <Cart />}
        </div>
    )
}

export default ShopPage;