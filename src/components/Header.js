import React, { useState } from "react";
import Cart from "./Cart";
import '../css/Header.css';

const Header = () => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleCartOpen = () => {
        setCartOpen(true);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("Search term:", searchTerm);
        setSearchTerm("");
    };

    return(
        <div className="header">
            <div className="pages">
                <a href="/">Home</a>
                <a href="/Shop">Shop</a>
            </div>
            <div className="search">
                <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button type="submit">Search</button>
                    </form>
            </div>
            <div className="cart">
                {!isCartOpen && <button onClick={handleCartOpen}>Cart</button>}
            </div>
            {isCartOpen && <Cart />}
        </div>
    )
}

export default Header;