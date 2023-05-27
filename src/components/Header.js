import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { SearchContext } from "./SearchContext";
import '../css/Header.css';

const Header = ({ onToggleCart }) => {
    const navigate = useNavigate();
    const {cart} = useContext(CartContext);
    const {search, setSearchTerm} = useContext(SearchContext);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // When user submits the form, takes user to the shop.
    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate("/Shop");
      };

    return(
        <div>
            <div className="header">
            <div className="pages">
                <a href="/">Home</a>
                <a href="/Shop">Shop</a>
            </div>
            <div className="search">
                <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={handleSearchChange}
                            onSubmit={handleFormSubmit}
                        />
                        <button type="submit">Go</button>
                    </form>
            </div>
                <div className="cart-button">
                    <button onClick={onToggleCart}>Cart</button>
                    {cart.items.length > 0 && (
                        <div id="cart-length">
                            {cart.items.length > 99 ? "99+" : cart.items.length}
                        </div>
                        )}
                </div>
            </div>
            <div className="header-spacer"></div>
        </div>
    )
}

export default Header;