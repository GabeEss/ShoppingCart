import React, {useState} from "react";
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
            {isCartExpanded && <Cart onCloseCart={handleToggleCart} />}
            <h1>Home</h1>
        </div>   
    )
}

export default HomePage;