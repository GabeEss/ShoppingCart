import React, { useState } from "react";
import '../css/Header.css';

const Header = ({ onToggleCart }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("Search term:", searchTerm);
        setSearchTerm("");
    };

    return(
        <div>
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
                <div className="cart-button">
                    <button onClick={onToggleCart}>Open Cart</button>
                </div>
            </div>
            <div className="header-spacer"></div>
        </div>
        
    )
}

export default Header;