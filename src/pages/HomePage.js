import React, {useState} from "react";
import "../css/HomePage.css";
import Header from "../components/Header";
import Cart from "../components/Cart";

const HomePage = () => {
    const [isCartExpanded, setIsCartExpanded] = useState(false);

    const handleToggleCart = () => {
        setIsCartExpanded(!isCartExpanded);
    };

    return(
        <div className="home">
            <Header onToggleCart={handleToggleCart}/>
            {isCartExpanded ? (
                <Cart onCloseCart={handleToggleCart} className="active" />
            ) : (
                <Cart onCloseCart={handleToggleCart} />
            )}
            <h1>Office Supplies Shopping Cart Application Demo</h1>
            <div className="home-page">
                {/* <p>Image by <a href="https://www.freepik.com/free-photo/notebook-felt-tip-pen-eyeglasses-stationery-cellphone-white-background_2905880.htm#query=office%20supplies%20background&position=24&from_view=keyword&track=ais">Freepik</a></p> */}
            </div>
        </div>   
    )
}

export default HomePage;