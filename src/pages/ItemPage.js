import React, {useState, useContext} from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { ProductContext } from "../components/ProductContext";

const ItemPage = () => {
    const { product } = useContext(ProductContext);
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
            {product && (
                <div>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <img alt="" src={product.gallery[0]} />
                </div>
            )}
        </div>   
    )
}

export default ItemPage;