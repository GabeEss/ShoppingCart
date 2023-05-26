import React, {useState, useContext} from "react";
import Header from "../components/Header";
import '../css/ItemPage.css';
import Cart from "../components/Cart";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ProductContext } from "../components/ProductContext";
import { CartContext } from "../components/CartContext";
import createShoppingCart from "../logic/cart-factory";
import createShoppingItem from "../logic/cart-item-factory";

const ItemPage = () => {
    const { product } = useContext(ProductContext);
    const { cart, setCartInfo } = useContext(CartContext);
    const [isCartExpanded, setIsCartExpanded] = useState(false);

    const handleToggleCart = () => {
        setIsCartExpanded(!isCartExpanded);
    };

    const handleAddToCart = () => {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        let newItem = createShoppingItem({
            name: product.name,
            price: product.price,
            type: product.type,
            gallery: product.gallery,
            id: product.id,
            quantity: product.quantity,
          });
        let itemAdded = false; // Flag to track whether the item has been added to the cart
        const updatedCart = createShoppingCart();
          
        cart.items.forEach((cartItem) => {
            // Find the item to add by matching the ID
            if (cartItem.id === newItem.id) {
                const addedItem = createShoppingItem({
                name: cartItem.name,
                price: cartItem.price,
                type: cartItem.type,
                gallery: cartItem.gallery,
                id: cartItem.id,
                quantity: cartItem.quantity + 1,
                });
                updatedCart.addItem(addedItem);
                itemAdded = true;
            } else {
                // Add the other items as they are to the new cart.
                updatedCart.addItem(cartItem);
            }
        });
        if (!itemAdded) {
            // If the item hasn't been added, add it to the cart
            updatedCart.addItem(newItem);
        }
        setCartInfo(updatedCart);   
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
                    <Carousel showThumbs={false} className="image-carousel">
                    {product.gallery.map((image, index) => (
                        <div key={index}>
                        <img src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                    </Carousel>
                    <div className="item-information">
                        <h2>{product.name}</h2>
                        <h3>Price: ${product.price}</h3>
                        <button onClick={handleAddToCart}>Add Item to Cart</button>
                        </div>
                </div>
                )}
        </div>   
    )
}

export default ItemPage;