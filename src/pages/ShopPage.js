import React, {useState} from "react";
import "../css/ShopPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainDisplay from "../components/MainDisplay";
import Cart from "../components/Cart";

const ShopPage = () => {
    const [isCartExpanded, setIsCartExpanded] = useState(false);

    // This function will be passed as properties to the 'Header' for the open cart button.
    // And it will be passed to the 'Cart' for the close cart button.
    const handleToggleCart = () => {
        setIsCartExpanded(!isCartExpanded);
    };
    

    return(
        <div className="shop">
            <div>
                <Header onToggleCart={handleToggleCart}/>
            </div>
            {isCartExpanded ? (
                <Cart onCloseCart={handleToggleCart} className="active" />
            ) : (
                <Cart onCloseCart={handleToggleCart} />
            )}
            <div className="products">
                <MainDisplay/>
            </div>
            <Footer/>
        </div>
    )
}

export default ShopPage;