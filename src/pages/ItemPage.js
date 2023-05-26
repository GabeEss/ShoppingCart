import React, {useState, useContext} from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { ProductContext } from "../components/ProductContext";
import { CartContext } from "../components/CartContext";
import createShoppingCart from "../logic/cart-factory";
import createShoppingItem from "../logic/cart-item-factory";

const ItemPage = () => {
    const { product } = useContext(ProductContext);
    const { setCartInfo } = useContext(CartContext);
    const [isCartExpanded, setIsCartExpanded] = useState(false);

    const handleToggleCart = () => {
        setIsCartExpanded(!isCartExpanded);
    };

    const handleAddToCart = () => {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        let newCart = createShoppingCart();
        let newItem = createShoppingItem({
            name: product.name,
            price: product.price,
            type: product.type,
            gallery: product.gallery,
            id: product.id,
            quantity: product.quantity,
          });
        newCart.addItem(newItem);
        setCartInfo(newCart);
    }

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
                <button onClick={handleAddToCart}>Add Item to Cart</button>
                </div>
            )}
        </div>   
    )
}

export default ItemPage;