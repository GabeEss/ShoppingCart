import allProducts from "../data/all-products";
import "../css/Sidebar.css";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <button className="sidebar-buttons" id="all-button">All Products</button>
            <button className="sidebar-buttons">Chairs</button>
            <button className="sidebar-buttons">Erasers</button>
            <button className="sidebar-buttons">Highlighters</button>
            <button className="sidebar-buttons">Notebooks</button>
            <button className="sidebar-buttons">Pencils</button>
            <button className="sidebar-buttons">Pens</button>
        </div>
    )
}

export default Sidebar;