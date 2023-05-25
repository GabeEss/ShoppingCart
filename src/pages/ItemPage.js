import React, {useState} from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";

const ItemPage = () => {
    const [isCartExpanded, setIsCartExpanded] = useState(false);

    const handleToggleCart = () => {
        setIsCartExpanded(!isCartExpanded);
    };

    return(
        <div className="item-page">
            <Header onToggleCart={handleToggleCart}/>
            {isCartExpanded ? (
                <Cart onCloseCart={handleToggleCart} className="active" />
            ) : (
                <Cart onCloseCart={handleToggleCart} />
            )}
            <h1>Item</h1>
        </div>   
    )
}

export default ItemPage;